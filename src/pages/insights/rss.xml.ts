import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../../site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('insights')).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: `${site.name} — Insights`,
    description: 'Writing on agile delivery, measurement, decision-making and better ways of building software.',
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/insights/${p.id}`,
      author: p.data.author,
    })),
    customData: '<language>en-au</language>',
  });
}
