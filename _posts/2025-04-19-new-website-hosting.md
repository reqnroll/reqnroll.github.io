---
layout: post
title: "New Website Hosting"
date: 2025-04-19
categories: News
tags: website sponsorship
image: 2025/markus-winkler-Vagh0KcwvwQ-unsplash-1024.webp
image_caption: "Photo by Markus Winkler on Unsplash"
author: gasparnagy
---

The Reqnroll website "reqnroll.net" has been moved to a new host. It is now hosted by GitHub Pages as a static site generated with Jekyll from the GitHub repository [reqnroll.github.io](https://github.com/reqnroll/reqnroll.github.io). The change was required due to performance issues.

<!-- more -->

A year ago, when I [started with the Reqnroll project](2024-02-08-from-specflow-to-reqnroll-why-and-how.md), many things were unclear. I spent most of my time applying the code changes required for the "fork", but quickly realized that we would also need a website of some kind. I took the route that seemed to be the easiest and cheapest at that time. Since I had some WordPress experience and [my company](https://specsolutions.eu) already had a hosting service, the simplest thing was to set up another WordPress site at the same hosting provider. 

I found a suitable theme, one from [KORTEZ](https://kortezthemes.com/kortez-fse/), that was easy to apply. When you need to get all the little details correct, time flies quickly, but altogether I got something running with reasonable effort.

While the solution served the first months successfully, it became visible that it could not handle the increasing load we were getting from Reqnroll users. Just for comparison, the load was approximately 10x the load of my own business site (established 10 years ago). Fortunately, the documentation was hosted elsewhere because that has at least four times as much load as the website. The whole website became pretty slow.

Someone on our [Discord channel](https://go.reqnroll.net/discord-invite) commented on this as, "We've gotten really popular" 😎. I had a meetup talk about [technical debt](https://en.wikipedia.org/wiki/Technical_debt) recently and somehow felt I had gotten trapped in exactly that. Open-source users (I assume) are patient and didn’t get upset if a website loaded slowly, but when I started receiving daily notices from WordPress that my business site was down, the situation became less funny. It became apparent that I needed to fix this quickly.

I had a few options in mind, but after a quick discussion on the Discord channel, we decided that the best solution would be to use GitHub Pages with a static site generator for our needs. A contributor, [@registeel](https://github.com/registeel), made a prototype with [Jekyll](https://jekyllrb.com/) that was enough to kick off the "transition" project 🙏.

Jekyll is great and clearly serves our purpose, but still, transforming a WordPress site into a generated static website is quite a bit of work, even if you keep the design. All those hidden details that are mandatory nowadays, like SEO, sitemap, feeds, CI/CD, etc., require hours of research. Not even mentioning my fairly dusty Ruby knowledge. But we have it now. Yay! 🎉

One extra benefit of the website source being on [GitHub](https://github.com/reqnroll/reqnroll.github.io) is that we don’t need to maintain an additional set of credentials to manage the website: any contributors can submit pull requests to fix things.

## Next Steps

We have the new website in place, but there might still be a few glitches. If you find any, please let me know or submit them to the [GitHub issues](https://github.com/reqnroll/reqnroll.github.io/issues) of the website project.

My plan is to migrate the posts from the [Announcements topic](https://github.com/orgs/reqnroll/discussions/categories/announcements) of the GitHub discussions as news posts here so that we have all news in one place. 

I will also migrate the "go.reqnroll.net" and the "schemas.reqnroll.net" sites as well, but these are much easier anyway.

Most importantly, I can get back to coding topics and help with bug fixes and pull request reviews that I had suspended for a few weeks.

## Call for Posts

The new structure also allows easier contributions for website content, like blog posts or news entries. If you feel like you have a good topic to share, please contact me on [Discord](https://go.reqnroll.net/discord-invite) or send a note to the [website GitHub project](https://github.com/reqnroll/reqnroll.github.io/issues).

Maybe the new website will also encourage potential sponsors to [support our project]({{ site.url }}/sponsorship).