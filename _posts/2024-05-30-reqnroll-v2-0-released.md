---
layout: post
title: "Reqnroll v2.0 released"
date: 2024-05-30
categories: News
tags: .NET release Reqnroll
featured_image: 2024/reqnroll-john-matychuk-gUK3lA3K7Yo-unsplash-scaled.jpg
featured_image_caption: "Photo by John Matychuk on Unsplash.com"
author: Gaspar Nagy
---

Last week we released a new major version of Reqnroll: **Reqnroll v2.0**.

We released v1 three month ago and this time has been used to review many concepts and dependencies that we inherited from SpecFlow. We quickly ran into breaking changes (as expected), but our testing solution was not good enough yet to allow us to make smaller, incremental releases (continuous delivery). It took us 3 month to stabilize these, but now, starting from v2 we will be more capable of frequent delivery.

<!--more-->

Although many things have changed inside, there are only a few breaking changes that are visible to the public. The most important one is related to our internal dependency injection framework (BoDi) we used. We decided to integrate it to Reqnroll itself, so it is not a separate package anymore. This change implies a namespace change as well, but users have needed to interact with BoDi only in special cases, so the impact should not be large. With this change we emphasize even more that BoDi is the DI framework used by Reqnroll itself. It can be used to configure a few test dependencies locally, but for more complex DI tasks, we recommend using one of the [supported DI frameworks](https://docs.reqnroll.net/latest/integrations/index.html) (Microsoft.Extensions.DependencyInjection, Autofac or Castle Windsor). But is is also easy to [create your own DI adapter](https://github.com/reqnroll/Reqnroll/issues/145#issuecomment-2137282775).

An important improvement in this release is the availability of the [Microsoft.Extensions.DependencyInjection](https://www.nuget.org/packages/Microsoft.Extensions.DependencyInjection) plugin. With SpecFlow this plugin was implemented as an external contribution package, but the author, Mark Hoek has generously offered his work for the Reqnroll project 🙏, so now it is part of the core Reqnroll repository.

We have also fixed a couple of issues and made a bunch of smaller improvements. You can check them out in our [GitHub announcement](https://github.com/orgs/reqnroll/discussions/142).

We use [semantic versioning](https://semver.org/), so any minor or path number changes will not cause breaking changes, so make sure you upgrade to the latest v2 version (at the time of writing this is v2.0.1).

## What's next

The team is working on a couple of interesting improvements. We hopefully can provide method-level parallel execution soon and we also work on moving the code-behind file generation to a [Roslyn source generator](https://learn.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview) solution. (I guess I'm not the only one who struggles with the "feature.cs" files generated into the source folders...) But finding a replacement for the LivingDoc generator is also on the agenda still.

As these are fundamental changes, there might be smaller breaking changes (new major releases) through the year, but we try to minimize the impact of these for our growing user base and all others who plan to migrate from SpecFlow.

In the first month we got a small, enthusiastic team of contributors. We keep improving the contribution experience with the hope that even more people can join. We have just created a [Discord server](https://go.reqnroll.net/discord-invite), so that people can help each other even easier. You are also welcome!

If you plan to talk about Reqnroll on a meetup or other event, please let us know, so that we can send you [Reqnroll stickers](https://github.com/orgs/reqnroll/discussions/98) for sharing.

![Reqnroll stickers]({{ site.url }}/assets/images/2024/2024-05-30-10.15.08-472x1024.jpg)

Photo by Gaspar Nagy

No roadmap should exist without mentioning [sustainability](https://go.reqnroll.net/sustainability). We have established our [sponsoring channels]({{ site.url }}/sponsorship/#sponsorship-model) through [Open Source Foundation](https://opencollective.com/reqnroll) and [GitHub Sponsors](https://github.com/sponsors/reqnroll) (thanks for our first silver sponsor, [Info Support](https://www.infosupport.com/)!), but we also have our payed support packages for those who need instant and guaranteed help for their Reqnroll solution or for migrating from SpecFlow. The profit made on the support is also contributing to the annual budget of the open-source project that we would like to use to pay our infrastructure costs, for marketing and community building. See our detailed plans on the [Sponsorship page]({{ site.url }}/sponsorship/).

I think transparency is important to build a trustful open-source community, so I regularly (currently monthly) share our usage and sustainability statistics on the [GitHub announcement discussion channel](https://github.com/orgs/reqnroll/discussions/categories/announcements?discussions_q=is%3Aopen+category%3AAnnouncements+label%3Atransparency).

May Reqnroll be with you!