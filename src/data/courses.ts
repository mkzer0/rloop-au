/** Course catalogue shown on /classes. Edit text here. */
export interface Course {
  id: string;
  title: string;
  code?: string;
  image: string;
  intro: string;
  details: string[];              // paragraphs shown inside "Course details"
  concepts?: { heading?: string; items: string[] };
  included?: string[];
  certification?: string;
  whoShouldAttend?: string;
  location: string;
  readMore?: { label: string; href: string };
  enquirySubject: string;
}

export const courses: Course[] = [
  {
    id: 'icp-atf',
    title: 'Agile Team Facilitation',
    code: 'ICP-ATF',
    image: '/images/3e8d94-image.png',
    intro:
      'This first-of-its-kind workshop blends the Let’s Go Model® – a transformational framework for understanding how people get things done in groups – with the expert leadership of Martin Kearns, one of the world’s first certified Scrum coaches. The result is a powerful learning experience that elevates every meeting you run. With no prerequisites required, anyone interested in levelling up the outcomes of their meetings can join. Whether you’re an Agile Coach, Scrum Master, team leader or facilitator of any kind, you’ll gain practical tools to turn ordinary discussions into engaging, outcome-focused sessions.',
    details: [
      'We emphasise practical outcomes, leadership, and psychological safety, ensuring you walk away ready to foster trust and transparency in your teams while delivering real results.',
    ],
    concepts: {
      items: [
        '**Facilitation Techniques & Mindset:** Master a range of agile facilitation techniques and develop a facilitator’s mindset to confidently guide group discussions.',
        '**Effective Agile Meetings:** Learn to plan and run effective team events – from energising planning sessions and daily stand-ups to insightful retrospectives – that foster collaboration and drive action.',
        '**Psychological Safety & Trust:** Discover how to create an environment of psychological safety where all voices are heard and ideas can flourish. Harness skilled facilitation to encourage open dialogue and build a culture of trust.',
        '**Managing Dynamics & Conflict:** Gain strategies to navigate group dynamics and handle conflicts with confidence. Turn tension into opportunities for growth, ensuring constructive outcomes even when diverse opinions collide.',
        '**Systems Thinking in Practice:** Apply systems thinking frameworks like the Let’s Go model to make sense of complex team interactions. Identify the five key dynamics of collaboration (Belief, Structure, Involvement, Progress, Care) and respond to what your team needs to move forward.',
        '**Leadership & Engagement:** Strengthen your leadership presence as a facilitator. Inspire engagement and accountability in your team by modelling effective facilitation leadership – empowering teams to feel valued, engaged, and accountable in reaching their goals.',
      ],
    },
    certification:
      'This course is accredited by ICAgile. Upon completion of the one-day training, you’ll earn the ICAgile Certified Professional in Agile Team Facilitation (ICP-ATF) designation. Your certification is globally recognised and never expires (once earned, it’s yours for life). Participants receive an official digital certificate and will be listed on ICAgile’s global directory of accredited professionals – a valuable credibility boost with employers and clients. All course materials and exercises are designed for hands-on learning, so you can immediately apply new techniques in your workplace. (Note: Pricing and dates are provided separately. Corporate and on-site sessions available upon request.)',
    whoShouldAttend:
      'This course is ideal for anyone who facilitates or leads team activities and wants to achieve better outcomes. Agile Coaches, Scrum Masters, Product Owners, Project Managers, Team Leaders, Business Analysts – all are welcome. Even if you’re new to Agile or facilitation, you’ll benefit from the practical skills and insights (no prior experience required). If you’re in Australia looking to inspire high-performing, collaborative teams grounded in trust and innovation, this course will equip you with the facilitation mastery and systems thinking savvy to make every meeting count.',
    location: 'Online and Remote (Australia-wide options available)',
    enquirySubject: 'Agile Team Facilitation enquiry',
  },
  {
    id: 'icp-prg',
    title: 'Agile Software Development',
    code: 'ICP-PRG',
    image: '/images/73aa92-recurvise-loop-class-3-web-res.jpg',
    intro:
      'In this course, programmers will get hands-on experience with agile technical practices guided by professional agile coaches and learn the ability to ship compelling products faster and of greater quality. Yes, you can have your cake and eat it too!',
    details: [
      'Learners will earn the ICP-PRG accreditation via 3 days in person or 8x2hrs should remote be preferred. Learners get hands-on experience with techniques that enable business agility through agile thinking, adaptive software practices, and great design.',
    ],
    concepts: {
      items: [
        'Software design for adaptability',
        'Knowledge acquisition strategies',
        'Test-Driven Development',
        'Stubs, Fakes, Doubles, and Mocks',
        'Continuous Integration',
        'Refactoring and writing clean code',
        'Pair and Mob Programming',
        'Working with Legacy Code',
        'Behaviour Driven Development',
      ],
    },
    included: [
      'A 90-page participant workbook for ICAgile Programming, which is only available with this training course.',
      'An official certificate IC-PRG, and listing on the public certificant directory on www.icagile.com',
      'Membership of the Recursive Loop Slack group.',
      'Exercises with support for most programming languages.',
      'A curated set of asynchronous home study lessons.',
    ],
    location: 'Online and Remote',
    readMore: { label: 'Read more at ICAgile', href: 'https://www.icagile.com/certification/agile-programming' },
    enquirySubject: 'Agile Software Development (ICP-PRG) enquiry',
  },
  {
    id: 'scrum-foundations',
    title: 'Foundations of Scrum for Teams',
    image: '/images/e201ec-recurvise-loop-gen-4-web-res.jpg',
    intro: 'This is the perfect starting point for teams new to Scrum and a great way to kickstart a new team culture.',
    details: [
      'The goal of this course is to create a learning experience tailored to team members seeking an exploration of Scrum and the broader ecosystem of agile within a safe non-judgmental atmosphere. To this end, our teaching philosophy promotes a “learning by doing” approach to provide individuals with the knowledge of the rules, roles and practices of Scrum and accelerate the conceptualisation of Scrum concepts.',
      'Learners will earn the Scrum Foundations certificate either through 1-day face-to-face class or by attending 3 x 2hr remotely facilitated sessions. Start your agile journey with the most widely used framework in the world!',
      'We create the conditions for learners to feel the experience of Scrum and gain a hands-on appreciation of the tools and the temperament needed to be an agent of change striving for a sustainable future of work. All learning styles and levels of experience are considered, our trainer’s adaptive approach to the course’s agenda ensures the learning goals of the group influence the format and the content covered.',
    ],
    concepts: { items: ['Scrum Values and Principles', 'The Inspect and Adapt Culture', 'Scrum Roles, Events and Artifacts'] },
    location: 'Online and Remote',
    readMore: { label: 'Read more at Scrum Alliance', href: 'https://www.scrumalliance.org/get-certified/practitioners/scrum-foundations' },
    enquirySubject: 'Foundations of Scrum for Teams enquiry',
  },
  {
    id: 'icp',
    title: 'Fundamentals of Agile',
    code: 'ICP',
    image: '/images/a80e1e-class-imagery-2500w-11a.jpg',
    intro:
      'The fundamentals of Agile course is designed to help students realise that Agile is not a ‘buzzword’ or the latest trend, it has been around for a long time and some aspects of how they’ve been working to date is proof of that.',
    details: [
      'This course emphasises the values, principles, and mindset integral to an agile work approach. Students will engage in various group activities, fostering behaviours that align with an agile environment. These exercises will help distinguish between simply implementing agile practices (‘doing agile’) and embodying the agile philosophy (‘being agile’). Facilitated retrospectives throughout the course will encourage students to value and adapt to feedback.',
      'Upon completing the course, students will gain insights into their personal work preferences and learn how to adapt these to thrive in an agile team. They will also earn the ICAgile Certified Professional certification.',
    ],
    concepts: {
      items: [
        'Understanding the history of agile methodologies and the Agile Manifesto, which reflects long-standing work practices.',
        'Recognising the application of agile principles beyond software development.',
        'Identifying the characteristics and behaviours of an Agile mindset, such as valuing feedback, learning from early failures, collaboration, continuous improvement, and ongoing discovery.',
        'Applying tools and techniques to foster a shared understanding within teams or project contexts.',
        'Distinguishing between self-organised teams and those requiring more managerial direction.',
        'Grasping value-driven delivery and how incremental development and limiting work in progress contribute to efficiency.',
        'Learning techniques to identify and categorise different user and customer types, and to gather feedback effectively.',
        'Demonstrating agile planning and progressive elaboration in managing backlogs, and understanding how to estimate in uncertain situations.',
        'Being mindful of the environment and applying suitable agile methodologies appropriately.',
      ],
    },
    location: 'Online and Remote',
    readMore: { label: 'Read more at ICAgile', href: 'https://www.icagile.com/certification/agile-fundamentals' },
    enquirySubject: 'Fundamentals of Agile enquiry',
  },
  {
    id: 'csm',
    title: 'Certified Scrum Master',
    code: 'CSM',
    image: '/images/0288fd-class-imagery-2500w-5.jpg',
    intro:
      'The goal of this course is to create a learning experience tailored to professionals seeking a deep exploration of Scrum and the broader ecosystem of agile within a safe non-judgmental atmosphere. To this end, our teaching philosophy promotes a “learning by doing” approach to provide individuals with the knowledge of the rules, roles and practices of Scrum and accelerate the conceptualisation of Scrum concepts.',
    details: [
      'We create the conditions for learners to feel the experience of Scrum, gain a hands-on appreciation of the tools and the temperament needed to be an agent of change striving for a sustainable future of work. All learning styles and levels of experience are considered, our trainer’s adaptive approach to the course’s agenda ensures the learning goals of the group influence the format and the content covered.',
      'Upon completion of the course, the Scrum Alliance will be notified and access to sit the certification exam granted. To be sufficiently prepared we recommend you study our carefully curated reading and viewing list. The time commitment is typically under 2 hours and materials will be shared with participants no later than 1 week post completion of the course.',
    ],
    concepts: {
      items: [
        'The Scrum Roles – Product owner, Scrum master, Team Development',
        'The Scrum Activities – Sprint Planning, Daily Scrum, Sprint Review, Sprint Execution, Sprint Retrospective',
        'The Scrum Artefacts – Potentially Shippable, Product Backlog, Sprint Backlog',
        'Non-core Scrum – Product backlog grooming, Work in-progress limits, Systems thinking, Complexity theory',
      ],
    },
    location: 'Online and Remote',
    readMore: { label: 'Read more at Scrum Alliance', href: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster' },
    enquirySubject: 'Certified Scrum Master enquiry',
  },
  {
    id: 'cspo',
    title: 'Certified Scrum Product Owner',
    code: 'CSPO',
    image: '/images/5ea3ad-class-imagery-2500w-8.jpg',
    intro:
      'The Product Owner’s role within the Scrum team is crucial as they represent the voice of the customer and the interests of the organisation. They are responsible for shipping the best possible product for their customers whilst balancing return on investment and quick speed to market.',
    details: [
      'In this course you will be placed in a simulated environment where you will practice the skills and techniques to help you make great product decisions. You’ll learn the Scrum terminology, practices and principles behind the most popular agile framework in use today and how your role as Product Owner fits within the Scrum team and the broader organisational setting.',
      'We create the conditions for learners to feel the experience of Scrum, gain a hands-on appreciation of the tools and the temperament needed to be an agent of change striving for a sustainable future of work. All learning styles and levels of experience are considered, our trainer’s adaptive approach to the course’s agenda ensures the learning goals of the group influence the format and the content covered. Learning to deal with the complexity of a scrum work environment and the emergent nature of teamwork will also be introduced.',
      'Upon completion of the 3-day course, Scrum Alliance will be notified and you will be awarded the CSPO accreditation.',
    ],
    concepts: {
      items: [
        'Release Planning',
        'Using Metrics to inform decisions',
        'Prioritisation Techniques',
        'Balancing Stakeholder groups needs',
        'Effective User Stories',
        'Planning horizons',
        'Hypothesis driven experiments',
        'Complexity and Systems Thinking',
        'Inspect and adapt product direction',
      ],
    },
    location: 'Online and Remote',
    readMore: { label: 'Read more at Scrum Alliance', href: 'https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner' },
    enquirySubject: 'Certified Scrum Product Owner enquiry',
  },
];
