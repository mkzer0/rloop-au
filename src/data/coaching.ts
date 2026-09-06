/** Coaching offerings shown on /coaching. Edit text here. */
export interface Offering {
  id: string;
  title: string;
  image: string;
  paragraphs: string[];
}

export const offerings: Offering[] = [
  {
    id: 'devops',
    title: 'Realising DevOps',
    image: '/images/c0bc5d-recursive-loop-coaching-devops.jpg',
    paragraphs: [
      'Leveraging our immense experience we can support your organisation in realising DevOps by facilitating a cultural shift towards a more collaborative, cross-functional environment. We can guide your teams in adopting practices that promote faster, more efficient development and operations, such as continuous integration, continuous delivery, and automated testing. By emphasising shared responsibility, we can help break down silos and encourage teams to work together to deliver high-quality software rapidly and reliably.',
    ],
  },
  {
    id: 'scaling-scrum',
    title: 'Scaling Scrum',
    image: '/images/11c0fb-recursive-loop-coaching-scaling-scrum.jpg',
    paragraphs: [
      'We guide organisations to effectively scale Scrum principles across multiple teams and departments using the Scrum @ Scale framework. We help you identify and map your value streams and organise your teams around these value streams to optimise flow and eliminate waste. We will facilitate the development of a network of Scrum teams that can work together to deliver value more effectively and responsively at scale.',
    ],
  },
  {
    id: 'team-scrum',
    title: 'Team Level Scrum',
    image: '/images/afc5cc-recursive-loop-coaching-team-level.jpg',
    paragraphs: [
      'We can aid your organisation in embracing Scrum principles by offering training, mentorship, and coaching to your teams. We can help you comprehend the values and principles underpinning Scrum, like transparency, inspection, and adaptation, and steer your teams towards implementing Scrum artefacts, roles, and ceremonies. We can foster an environment where teams are self-organising, empowered to make decisions, and committed to delivering value in an incremental and iterative manner.',
    ],
  },
  {
    id: 'mentoring',
    title: 'Adaptable Software Mentoring',
    image: '/images/bc6c50-recursive-loop-coaching-mentoring.jpg',
    paragraphs: [
      'Creating Adaptable Software Architectures and Teams: In our Agile coaching role, we can guide your teams in creating software architectures that are not only adaptable but also facilitate the continuous flow of value. We introduce them to concepts such as modular design, loose coupling, and high cohesion to create flexible and resilient software.',
      'Furthermore, we embed the principles of ‘Team Topologies’ in our approach, moulding teams into efficient structures that best fit their context. By applying the concept of the Reverse Conway’s Law, we align your team structures with the desired architecture, thereby optimising the flow of work.',
      'We emphasise the importance of principles like YAGNI (You Aren’t Gonna Need It) and KISS (Keep It Simple, Stupid) to circumvent over-engineering and preserve system adaptability. To top it off, we promote practices like Test-Driven Development (TDD) and Continuous Integration (CI) to ensure your software remains robust and resilient, despite frequent modifications.',
    ],
  },
];
