---
title: "Putting “Continuous” back into Continuous Integration"
description: "Both the continuous function in mathematics and the Tri-Spiral motif in ancient Celtic art represent unbroken, seamless progressions. In maths, this is shown through an unending line on a graph covering all intermediate values. In Celtic art it's visualised through continuous lines that create an infinite loop, suggesting a never-ending cycle. Both express the concept of endless continuity, whether it be through values in a graph or lines in a design. Read on to challenge yourself to think about Continuous Integration differently and what you can do to embrace the practice in your teams."
pubDate: 2024-04-15
image: "/images/2C5CI8-tri-spiral.jpg"
---

As a Scrum coach I work with a lot of teams who build software products and one trend I’ve noticed is the conflation of 2 separate yet linked concepts: Continuous Integration and Continuous Delivery/Deployment. Generally, this is just shortened to CICD and are infrequently separated. I’ll address the CD half in another post, with the focus here being on CI.

Continuous Integration is an overstatement of the eXtreme Programming (XP) rule [Integrate Often](http://www.extremeprogramming.org/rules/integrateoften.html) which advises to communicate code changes to your team frequently. This doesn’t nessesarily mean continuous as this would imply an asymtotic limit of real time. Think of it like the difference between a continuous function and a discrete function.

![](/images/fbbbf3-continuousvsdiscrete.png)

On the left we have a continuous function, x can take any numerical value while on the right, the discrete function is limited to specific values. It isn’t a stretch therefore to say that the notion of continuous integration is ever satisfied, there will always be a lag between code written and code integrated with the team. The goal therefore is to establish an intent which will never be reached, yet directionally speaking, moves a team adopting this practice towards techniques and reduce the pain associated with integrating at pace.

I encourage you to think about what Continuous Integration means to your team in these terms rather than assuming a build server is what you need.
