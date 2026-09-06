---
title: "Law of Large Numbers: Try it Yourself!"
description: "Most organsiations I work with say they need more data before they can make a decision. It sounds reasonable—but it’s usually wrong. As Doug Hubbard puts it in his book “How to Measure Anything”, a measurement has value only if it reduces uncertainty. That’s the bar. Not precision. Not completeness. Just: are we less uncertain than before?"
pubDate: 2026-04-05
image: "/images/ZVJCHP-unsplash-image-qdkyhylccfa.jpg"
---

Most organsiations I work with say they need more data before they can make a decision. It sounds reasonable—but it’s usually wrong. As Doug Hubbard puts it in his book “How to Measure Anything”, a measurement has value only if it reduces uncertainty. That’s the bar. Not precision. Not completeness. Just: are we less uncertain than before?

I created a simple simulation to demonstrate, go on and try it yourself!

👉 [https://mkzer0.github.io/lln/](https://mkzer0.github.io/lln/)

Watch the running average as each new sample is added. Early on, it jumps around wildly. Then, after only a small number of observations, it begins to settle. That’s the law of large numbers in action—not as a theory, but as something you can see.

>

> The biggest reduction in uncertainty happens early.

What matters is not that the average eventually stabilises—it’s when it starts to stabilise. After ~1–3 samples it’s chaotic. Around ~5, it’s still noisy but narrowing. By ~10–20, it’s noticeably more stable. Beyond that, each additional sample changes less and less. You don’t need hundreds. You don’t need thousands.

>

> You often need far less data than you think to reduce uncertainty meaningfully.

The birth-weight example makes this concrete. With no data, you’re guessing. With one sample, you’re still guessing. With five, you already have a rough range. With twenty, you’re much closer to reality. You are not certain—but you are significantly less wrong than before. That’s enough to improve a decision. As Douglas Hubbard points out with his Rule of Five, a small number of observations can go a long way.

>

> Measurement doesn’t need to be perfect to be valuable—it just needs to reduce uncertainty.

This is where organisations get stuck. “We don’t have enough data yet.” “Let’s wait for more evidence.” Meanwhile, velocity is tracked, dashboards fill up, and decisions stall. The irony is you often already have enough data to reduce uncertainty—you’re just not measuring the right thing. So here’s the real question: how do you know when the marginal cost of gathering more information outweighs the uncertainty it reduces? Because each additional observation gives you less new information than the last.

That’s the next step—understanding how error actually shrinks, and why it doesn’t do so linearly.

>

> You don’t need enough data to be certain.

> You need enough data to be less wrong than you were before.
