---
layout: post
title: "Building Reqnroll IDE Support with an AI agent: an interview with Chris Rudolphi"
date: 2026-11-03
categories: News
tags: IDE AI Interview
image: assets/images/2026/brunxs-dtqlaz4HyHw-unsplash-1024.webp
image_caption: "Photo by Brunxs on Unsplash"
author: gasparnagy
---

**[Chris Rudolphi](https://github.com/clrudolphi) rewrote the Reqnroll IDE integration as a shared codebase for Visual Studio, VS Code and Rider, without typing a line of source code himself. We talked about how that agentic workflow really looked like.**

<!--more-->

Last week we announced the [preview of the new Reqnroll IDE Support](2026-10-21-reqnroll-ide-support-preview.md), which brings the same experience to Visual Studio, VS Code and Rider from one codebase. This was a big step, and it was done in a way that was new to us: Chris generated all the source code with an AI agent. I was curious about his experience, so I asked him a few questions. This is the (slightly shortened) result of that conversation.

## The tools

**Gáspár:** Did you have prior experience with this kind of agentic programming, or did you use this project as an opportunity to try it out?

**Chris:** No, this is the first one, and I was curious to see how far we could take it. I just decided early to see if we could use an AI harness to do all the grunt work of developing the code. I was really surprised by how capable it was. There were a lot of bumps along the road, no doubt, and I flipped back and forth between using Claude and Hermes. It was an interesting ride.

**Gáspár:** Which tool stack did you use, and why? There are plenty of options—Claude, Copilot, and many others—and it is pretty hard to separate the hype from the real advantages or disadvantages. In many cases, at the end, they are using the same model. So how important is the tooling at all?

**Chris:** I had previously tried using Copilot inside of Visual Studio for things like "write unit tests for a method". Then, earlier this year, Microsoft changed how they account for Copilot use and made it extraordinarily expensive. You could blow through a month's worth of quota in a day, so I just gave up on it. It may have changed in the interim. Then I had gotten interested in Hermes, and I tried that a little bit outside of our projects. I didn't really get very far with it, largely because of its immaturity back at the beginning of the year. But I would say it is much better now.

I have a $20 a month plan with Claude and a $20 a month plan with Nous Research, the company that sponsors Hermes, which gets me a certain number of API credits. They have an OpenRouter-style setup where you can pick different models from different providers.

When we started this project, I used Hermes for the architecture design work: how do extensions like this behave, how are they typically structured, what is the prior art, looking at the existing prototype, et cetera, to come up with an overall architectural design. That's where we had those early conversations back in May, where I had a couple of diagrams. But when I really got going, I decided to switch to Claude just to see how it would work, and I pretty much stuck with that since then. There were a couple of occasions when I ran out of my session credits or weekly credits with Claude, and I flipped back over and continued with Hermes. But for the most part, it's been Claude.

**Gáspár:** So, for the majority of the time, you could survive with the $20-per-month subscription?

**Chris:** The next level of subscription is like $100 a month, which I'm not going to spend on a hobby. So I basically made my workflow fit around its limits. You can do so much work within a five-hour window and so much work per week. I rarely ran into the weekly limit. The five-hour limit would come up every once in a while, and then I can take a break and go walk the dog. I'm retired, I don't really have to sit at the desk eight hours a day, so I just made it fit.

***Update:** After our interview, I did a bit of research and found that Reqnroll's core contributors can apply for the [Claude for Open Source Program](https://claude.com/contact-sales/claude-for-oss), which would allow them to use Claude without the $20-per-month subscription cost.*

## The workflow

**Gáspár:** What does a usual coding session look like? If somebody would sit behind you, what would they see?

**Chris:** What worked well is that at the beginning of a feature, I ask the system to do research: what's the prior art, how do other similar systems handle this situation. From that it puts together a set of recommendations. I review it when it comes back, and then we work on a design or approach document. Many of those didn't survive into anything committed to the repo, but they were just enough for me to understand what is going to happen. How is it going to work, what is the sequence of steps, what design and code artifacts are going to be created. I also try to make sure that I ask about the risks, so we think that through and highlight them.

Two weeks ago I did a bug hunt. I had found a skill, and I had it sweep through the entire codebase and try to identify as many bugs as possible and enter them. That did two things. One, it blew out my hard drive, because for each item you have it working on in parallel it creates a work tree, and this is a big repo. I've only got about 50 gigabytes left on my hard drive, so it's easy to blow it out. And it also resulted in around 100 defect issues and PRs for me to review. That takes a long time to get through, and it's a slog. For the human it is much more bearable if you don't have such a long list of things to look at every morning. You work through a couple of items, make progress, get that hit of dopamine and keep moving. So I was trying to keep the process flowing by having one or two items in flight at any given time.

**Gáspár:** Did you let it run while you were away?

**Chris:** Every once in a while, yes. But pretty often I would find that we had done enough for today and there were already one or two items to review when I came back. Although if you talked to my wife, you would think I was tied to it all the time. I would have a number of known defects in the issue list, and in the evening while my wife and I were watching television, I'd be on my phone telling it, okay, work on this one, work on this one. Okay, that's good, let's go on to the next one. So I could continue the session without being tied to the desk, which was an interesting work experience.

**Gáspár:** How does this relate to work-life balance? Sometimes it is okay to just click on "next", but it is still a context switch, and you might not feel how exhausting it is. Do you expect this to be long-term feasible?

**Chris:** That will definitely get back to normal. This was just trying to get it pushed through. And you are very limited in what you can realistically do on a phone. You couldn't really review code, and you couldn't try out the work product in the IDE. It was more like: here's the next item I want you to work on, kick it off and let it go in the background, and I come back the next morning to look at the result.

## Skills, plugins and memory

**Gáspár:** Skills and plugins are a big hype now. How important are they? Did you select some, or develop your own?

**Chris:** I experimented with a few, and largely I was disappointed. I had the best results simply by documenting in the instruction file of the harness (Claude has its `CLAUDE.md`, Hermes has its own thing) how I want to work. We follow a red-green-refactor style, so always write the tests first, that kind of stuff. Those generally got me the better results.

I also experimented with a few of the built-in skills that come from Anthropic for software engineering. Most of the time I found them incredibly expensive to run. They caused so much churn in the model that you would work through your credits very quickly, so it just wasn't feasible to use them on an ongoing basis.

**Gáspár:** Do you think it is because the skills make too many unnecessary checks, or because the skill is big and always included in the context?

**Chris:** I think the former. The thoroughness with which they expected the model to behave caused so many turns that it was just not worthwhile.

**Gáspár:** That is interesting. We are finishing our BDD book, which is basically the collection of our BDD experience of the last 15 years. Among other things, it contains 43 patterns, and I realized I use almost all of them on a daily basis when I develop. If I want a model to be as "smart" as I am, it has to know all this knowledge as well. And this is just BDD, a small portion of software development. If all that knowledge were put into skills, maybe the entire thing would end up almost as costly as, or even more costly than, hiring humans. I guess that in your case you compensated for the lack of these skills with your own knowledge and more targeted directions, with smaller chunks of work and more guidance.

**Chris:** Right. That's likely true, and I've just grown immune to seeing the difference. I did install and use a tool called [Serena](https://github.com/oraios/serena), which is basically an LSP for AI. It can open up source code and analyze it, understand where a method is called from, rather than having the harness do a bunch of text-based searches. That's useful. I'm not making a recommendation, it just happened to be the one I settled on, but I think something like that is useful.

Beyond that, there is the standard set of tools, hooks, skills and MCP servers: one to connect to GitHub, one to read the web and the Microsoft documentation, and this one tool to navigate source code. That was about the extent of the tooling. I kept the skills pretty light. What I found is that after working on this codebase for three or four months, Claude has developed its own set of internal memories that are good enough that it remembers what should be done. So even I don't have to tell it everything now. It has enough context of what's going on that it's become a pretty decent developer on its own.

**Gáspár:** But I guess this kind of context is not so easily transferable to another person, or a whole team.

**Chris:** If you are trying to encourage someone to try this approach, the real payoff might not come until their harness has sufficient memory about what's going on. Otherwise it is going to read and reread and experiment and make mistakes, until it has settled in and baked into its own memory system how this codebase works.

## The source code

**Gáspár:** The code is largely generated. Do you still type any source code yourself, and how much do you look into the code during reviews?

**Chris:** My approach with this project, as part of the experiment, was to not type any source code. So you're right, it's all been generated. But I've looked at every line of every PR I've reviewed. Even though I'm not a Kotlin expert, with the Rider plugin, I have enough industry experience that you can pretty much read any kind of source code. You may not understand all of the nuances, but you get the gist of what it's trying to do. I always read the tests as well, to make sure it is testing all of the scenarios that I think it should be testing, and that it is actually testing the things that it purports to test.

Several times in the last five months I have also asked the system to review the developer documentation, the end-user documentation and the code for human maintainability: what needs to happen so that the next maintainer can come along and understand what's going on. The day may come when that never has to happen because it will always be an AI agent. But I've tried to make it human-understandable.

**Gáspár:** I noticed that my own habits changed in this project. My primary role here was the tester, but earlier, if I saw a small problem and knew how to fix it, I would have just fixed it and sent a PR. Now I quickly made an issue, because in my mind you already have your Claude that will fix it. That is dangerous, because you also have to stand behind that PR. I have to be careful not to just push work to you and your Claude. I can find excuses, like that it was more efficient with me focusing on testing and you on coding, but it was still a different experience than what I had before in open source.

**Chris:** So you've read through some of the code. What's your feel about it? Personally, when I look at it, I think it's probably a little complicated. If it had been written by a human, it probably would have been simpler, but maybe not as robust.

**Gáspár:** After a while you smell that something is AI-generated, just like with LinkedIn posts, and it smells on the code too. One thing I noticed is that it is much more redundant in some cases than I would have been. My lazy developer mode would reuse things, but for the agent it was easier to flesh out things for all three IDEs basically independently, and I noticed it when fixing things like the package ID.

**Chris:** Even within one IDE's worth of extension code, you would find it is probably lacking the abstractions that an experienced developer would have built. There's no unifying set of themes, like a command class hierarchy. It seems much more linear in its implementation, and isolated across different subsections. I thought about it, and yes, it's probably not as sophisticated as what a top-tier developer would do, but it's likely that the code will be maintained by an AI anyway, so it doesn't matter that much.

**Gáspár:** The fact that you were able to achieve this in that time period is already very impressive. When I rewrote the Visual Studio extension from scratch five years ago, I thought that since I knew the domain perfectly and had prior experience with the mistakes of the previous one, I would be quick. It was quite a lot of work; it took at least three months until I had the first version, and it had far fewer features than the current version, which works with all three IDEs.

**Chris:** I'd still like to go back at some point and have it reassess its approaches, particularly in the VS extension, since that was the first one I attempted with it. There is a mix of VS extensibility API usage and VSSDK API usage, and it tended to defer to the latter although that is the older approach. That could be because of the level of maturity of Visual Studio's LSP client and what the new VS extensibility can and cannot do. But I suspect it was just easier for the agent to do it the old way.

## What went wrong

**Gáspár:** What kind of issues did you run into, and did you find any general pattern to avoid them?

**Chris:** Many times it was racing ahead with development of a feature without being thorough in the planning and research steps, such as figuring out how an API actually works, what the documentation says, what the prior art is, and how the other existing IDE extensions handle the same thing. There were several cases where the agent and I just ran ahead with an implementation and then had to back it out because we found some edge case that is not supported.

Even the case we have today with Rider: it has turned out that some of the APIs we use are not allowed by plugins distributed via the marketplace. The agent should have found that. What I have uncovered so far this morning is that there is a step in the CI that validates that all of the APIs we are using are allowed in a Rider extension, and the agent had turned off those warnings. My lack of experience with JetBrains and Rider led us to that position, because I trusted what it was doing too much.

## BDD, tests and logs

**Gáspár:** We inherited the feature files and scenarios from the previous extension, so it wasn't a real BDD flow. Still, were the scenarios valuable to keep the agent within the outside boundaries of how the feature should behave? How did they relate to the technical unit tests?

**Chris:** I tried to port them over, and subsequent development has expanded the set of scenarios. There are a few that are not yet running; they are set to ignore right now. I need to go back and look at them. I think they have to do with the way the legacy extension worked. But generally, I found them helpful. Having an existing base of expectations and prior art to work from was definitely helpful.

But what the agents really excel at is writing unit tests. I'd say the two most useful parts of the tooling chain are that it can write the unit tests, and that it is really good at looking at logs.

**Gáspár:** I noticed that too. When I saw the amount of logs we are generating, I thought no human can ever read this. But I realized that those logs are not necessarily for me anymore. The agent is really good at it, and that is an interesting feedback loop: because agents can process logs better, we produce more logs, and now it is a complete loop.

**Chris:** Yep, debugging issues are by far the bane of my existence with this thing. So logs are very useful.

## Closing

**Gáspár:** Thanks, it was very good to talk to you about this, and I am sure it would also help others planning to experiment with agentic development.

You can try out the result of Chris' work in the [Reqnroll IDE Support preview](2026-10-21-reqnroll-ide-support-preview.md), and please [tell us what you think](https://github.com/orgs/reqnroll/discussions/1123).
