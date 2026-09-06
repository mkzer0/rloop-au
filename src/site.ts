/** Site-wide settings. Edit here, not in the pages. */
export const site = {
  name: 'Recursive Loop',
  tagline: 'Agile training and coaching services',
  url: 'https://www.recursiveloop.com.au',
  email: 'info@recursiveloop.com.au',
  location: 'Adelaide, South Australia',
  analyticsId: 'G-6SB1NT3BG4',
  /** Formspree form id. Create a form at https://formspree.io and paste its id here. */
  formspreeId: 'mppzjpnw',
  /** Buttondown username. Create a newsletter at https://buttondown.com and paste the username here. */
  buttondownUser: 'mfagan',
  eventbrite: 'https://www.eventbrite.com.au/o/reagile-by-recursive-loop-40688851063',
  social: {
    linkedin: 'https://www.linkedin.com/in/michael-fagan-a6a38784/',
    twitter: 'https://twitter.com/mick_fagan',
    github: 'https://github.com/mkzer0',
  },
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Our People', href: '/our-people' },
    { label: 'Classes', href: '/classes' },
    { label: 'Coaching', href: '/coaching' },
    { label: 'Insights', href: '/insights' },
  ],
};

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
