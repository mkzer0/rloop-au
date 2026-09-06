"""Download every Squarespace CDN image referenced by the old site into public/images.
Writes crawl/images.json mapping original URL -> local path."""
import json, os, re, subprocess, sys, urllib.parse

def local_name(url):
    path = urllib.parse.unquote(url.split('?')[0])
    parts = path.rstrip('/').split('/')
    name, uid = parts[-1], parts[-2]
    name = re.sub(r'[^A-Za-z0-9.]+', '-', name).strip('-').lower()
    name = re.sub(r'-+', '-', name)
    if len(name) > 60:
        stem, ext = os.path.splitext(name); name = stem[:50].rstrip('-') + ext
    return f"{uid[-6:]}-{name}"

urls = [u.strip() for u in open('crawl/image-urls.txt') if u.strip()]
mapping = {}
for u in urls:
    fn = local_name(u)
    dest = f"public/images/{fn}"
    mapping[u] = f"/images/{fn}"
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        continue
    r = subprocess.run(['curl', '-sL', '-H', 'Accept: image/jpeg,image/png,image/*', '-o', dest, u + '?format=original'])
    ok = os.path.exists(dest) and os.path.getsize(dest) > 1000
    print(('ok  ' if ok else 'FAIL'), os.path.getsize(dest) if os.path.exists(dest) else 0, fn)
json.dump(mapping, open('crawl/images.json', 'w'), indent=1)
