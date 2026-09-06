"""Convert the Squarespace blog export (crawl/insights-posts.json) into Markdown files
under src/content/insights/, one per post, rewriting CDN image URLs to local ones."""
import json, re, html, datetime, os, urllib.parse
from html.parser import HTMLParser

images = json.load(open('crawl/images.json'))

def local_image(url):
    u = url.split('?')[0]
    if u in images: return images[u]
    for k, v in images.items():
        if k.split('?')[0] == u: return v
    return url

class MD(HTMLParser):
    BLOCK = {'p','h1','h2','h3','h4','blockquote','ul','ol','li','pre','figure','figcaption','hr','div'}
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []; self.stack = []; self.list_stack = []; self.href = None; self.in_pre = False; self.img_alt = ''
    def txt(self, s): self.out.append(s)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('h1','h2','h3','h4'):
            self.txt('\n\n' + '#' * int(tag[1]) + ' ')
        elif tag == 'p':
            self.txt('\n\n' + ('> ' if 'blockquote' in self.stack else ''))
        elif tag == 'blockquote': self.txt('\n\n> ')
        elif tag in ('strong','b'): self.txt('**')
        elif tag in ('em','i'): self.txt('_')
        elif tag == 'a': self.href = a.get('href'); self.txt('[')
        elif tag in ('ul','ol'): self.list_stack.append([tag, 0]); self.txt('\n')
        elif tag == 'li':
            if self.list_stack:
                t = self.list_stack[-1]; t[1] += 1
                self.txt('\n' + '  ' * (len(self.list_stack)-1) + ('- ' if t[0]=='ul' else f'{t[1]}. '))
        elif tag == 'br': self.txt('  \n')
        elif tag == 'pre': self.in_pre = True; self.txt('\n\n```\n')
        elif tag == 'code' and not self.in_pre: self.txt('`')
        elif tag == 'hr': self.txt('\n\n---\n\n')
        elif tag == 'img':
            src = a.get('data-src') or a.get('src') or ''
            if src.startswith('https://images.squarespace') and 'format=' not in src.split('?')[0]:
                self.txt(f"\n\n![{a.get('alt','')}]({local_image(src)})\n\n")
        elif tag == 'figcaption': self.txt('\n\n*')
        self.stack.append(tag)
    def handle_endtag(self, tag):
        if self.stack and tag in self.stack:
            while self.stack and self.stack.pop() != tag: pass
        if tag in ('strong','b'): self.txt('**')
        elif tag in ('em','i'): self.txt('_')
        elif tag == 'a':
            self.txt(f']({self.href})' if self.href else ']'); self.href = None
        elif tag in ('ul','ol'):
            if self.list_stack: self.list_stack.pop()
            self.txt('\n')
        elif tag == 'pre': self.in_pre = False; self.txt('\n```\n\n')
        elif tag == 'code' and not self.in_pre: self.txt('`')
        elif tag == 'figcaption': self.txt('*\n\n')
    def handle_data(self, data):
        if self.in_pre: self.txt(data); return
        if 'style' in self.stack or 'script' in self.stack: return
        data = re.sub(r'\s+', ' ', data)
        if data.strip() == '' and not self.out: return
        self.txt(data)

def to_md(h):
    h = re.sub(r'<script.*?</script>', '', h, flags=re.S)
    h = re.sub(r'<style.*?</style>', '', h, flags=re.S)
    p = MD(); p.feed(h)
    s = ''.join(p.out)
    s = re.sub(r'\*\*\s*\*\*', '', s)                 # empty bold
    s = re.sub(r'(\*\*|_)(\s+)', r'\2\1', s)          # move trailing space outside emphasis
    s = re.sub(r'[ \t]+\n', '\n', s)
    s = re.sub(r'\n{3,}', '\n\n', s)
    s = s.replace('​', '').replace('￼', '')
    return s.strip() + '\n'

def strip_html(h):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', h))).strip()

posts = json.load(open('crawl/insights-posts.json'))['items']
for it in posts:
    date = datetime.datetime.fromtimestamp(it['publishOn']/1000, datetime.timezone(datetime.timedelta(hours=9, minutes=30)))
    thumb = local_image(it.get('assetUrl', ''))
    desc = strip_html(it.get('excerpt', '')).replace('"', '\\"')
    title = it['title'].replace('"', '\\"')
    body = to_md(it['body'])
    body = body.replace('https://www.recursiveloop.com.au/insights/', '/insights/')
    fm = f'---\ntitle: "{title}"\ndescription: "{desc}"\npubDate: {date.date().isoformat()}\nimage: "{thumb}"\n---\n\n'
    open(f"src/content/insights/{it['urlId']}.md", 'w').write(fm + body)
    print(f"{date.date()}  {it['urlId']}.md  {len(body)} chars  thumb={'ok' if thumb.startswith('/images') else 'MISSING'}")
