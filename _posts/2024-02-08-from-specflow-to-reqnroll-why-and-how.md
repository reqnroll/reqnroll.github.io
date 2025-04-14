---
layout: post
title: "From SpecFlow to Reqnroll: Why and How"
date: 2024-02-08
last_modified_at: 2024-02-16
categories: News
tags: Migration OpenSource SpecFlow VisualStudio
featured_image: reqnroll-logo-bubbles.jpg
author: Gaspar Nagy
---

Please, welcome **Reqnroll**, a fork of SpecFlow with the aim of rebooting the open-source project!

SpecFlow is used (and maybe loved a bit as well) by many developers, testers and companies and hopefully Reqnroll can provide the continuity for all of them. In this post, I would like to share some background info why I decided on forking and how the new project will work.

Lately I have been watching the progress (or rather the inactivity) of the SpecFlow project with worries. The team has dissolved, blogging has stopped, releases have become less frequent and then even stopped. The last stable release of SpecFlow was in May 2022, almost two years ago. And soon the first ["What is the status of this project?" issue](https://github.com/SpecFlowOSS/SpecFlow/issues/2719) was arisen.

To be honest, my first feeling was that his was not my problem as I was not the owner of this project anymore. However, I couldn't let this problem go, I called friends and asked for advice. I got diverse answers. Some suggested to let it go, some suggested forking. I decided to wait and at least to be a spokesman of the community trying to negotiate with Tricentis, because there was no official reply to the questions regarding the future. I haven't received any bad response, but on the one hand it has been clear that SpecFlow is not their priority anymore, on the other hand they cannot easily make decisions about it. This is how 2023 ended.

I'm not a big fan of new year resolutions, but during the winter holidays it became clear to me that there is no point in waiting further. SpecFlow needs official .NET 8.0 support and I also started to worry what would happen to my own projects using SpecFlow. It was a strange feeling to press the "fork" button on GitHub, but I realized that forking was the least effort. It was a hard work, however, now it's done. Here we are.

You might have some questions now. I would like to address some of these here, but feel free to keep the conversation going by posting a comment below or even at the [GitHub discussion board of Reqnroll](https://go.reqnroll.net/discussions).

## Why did you give it a new name? What's wrong with SpecFlow? Why Reqnroll?

The name "SpecFlow" is trademarked and the visual assets are the intellectual property of Tricentis, therefore we could not use any of them. I also considered calling it Cucumber, but even this is not possible currently for legal reasons, although this is something we can reconsider later.

It is not easy to find a good name and it is impossible to find one liked by everyone. I did a renaming marathon and brainstorming about the name in my family for 4-5 days. We picked Reqnroll (pronounced as \[reknroʊl\]) from the long list of ideas. It may not be perfect, but I like the pun how it rhymes to SpecFlow (specification - requirements, flow - roll). I think the fact that it starts the flow at requirements and highlights its iterative nature is even closer to the philosophy of BDD. Not to mention the fun you can make with its similarity to rock 'n' roll 🤘. As a tribute to that, the new [Quickstart](https://go.reqnroll.net/quickstart) lets you build a music instrument store, where you can buy electric guitars and guitar picks.

Anyway, this is just a name - that _we_ have to fill with good meaning.

## Who is behind Reqnroll? How do you plan to keep up the activity?

Doing the fork is a serious step and I take the responsibility for it, but the result, Reqnroll, is not mine. It is ours. My business has allowed me to spend this month on working on this, but the project itself belongs to the community and not to my company or any other big sponsor. Once the project has been ramped up, I will move all the assets to one of the bigger open-source foundations.

Keeping up the activity is another thing. Although I am committed to keep contributing to the project, we have to find a plan that keeps the project sustainable. Reqnroll will be free. We offer different options for (bigger) companies to contribute to the project, however. Besides donation and classic sponsoring options, the idea is to provide paid subscription packages for Reqnroll, which provide guaranteed support for companies and teams. The support will be initially provided by me, but later we might set up a small paid team to do this. We can use the profit to improve the product itself, either by providing compensation (money) for the active contributors and also for implementing bigger features that are harder to achieve by free and voluntary contributions. This ["sustainability plan"](https://go.reqnroll.net/sustainability) has been documented on the website, please check it out for details.

The Reqnroll project is maintained and sponsored by the community and the companies who benefit from it.

## Has everything been "forked" from SpecFlow?

SpecFlow has had a big eco-system and it is hard to get an overview of all the assets. So let me categorize them to answer the question.

Core assets ported: The BDD framework itself and the documentation have been ported to Reqnroll. These are all in the Reqnroll GitHub project, but the documentation has been published to our documentation site: [https://docs.reqnroll.net](https://docs.reqnroll.net). The SpecFlow plugins maintained in the main repository before (e.g. SpecFlow.ExternalData or SpecFlow.Autofac) have also been ported (see [integrations](https://go.reqnroll.net/doc-integrations) for the full list).

IDE integrations ported: The Visual Studio extension has been fully ported to Reqnroll. It has been modified to work with both Reqnroll and SpecFlow projects to make the transition easier. There is a little cool new feature as well, check out the release announcement! The porting of the Rider plugin is also in progress. The core contributor of the SpecFlow Rider plugin was [@Socolin](https://github.com/Socolin), who will also help the ported version as well 🙏. I hope to have a first version available in 1-2 weeks. The [Cucumber plugin for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official) works with Reqnroll, too.

Closed-source assets cannot be ported, might need to be rebuilt: One of the most successful side-tool, the "SpecFlow+ LivingDoc Generator" is unfortunately closed-source, so we cannot fork that. The need for this tool is obvious, so probably this is the first thing we need to rebuild from scratch. Similarly, we have no chance to port "SpecFlow+ Runner (SpecRun)", but that has been deprecated anyway, so probably will be skipped.

SpecFlow "Actions" and examples will be reviewed & ported: SpecFlow had a cool concept of providing ready-to-run integrations for the most commonly used automation strategies, like API or browser automation. These are also planned to be ported, but maybe at the same time we should review & update them if necessary. The good news is that they are anyway available in source-code for SpecFlow, so everyone can quickly port them to Reqnroll individually until the official version is out. The story with the "examples" project is similar. They need a bit of de-dusting before moving them to Reqnroll. Nevertheless, there is a new  [Quickstart](https://go.reqnroll.net/quickstart) guide with its own example and I have also ported my demo Q&A site project (now called [ReqOverflow](https://github.com/reqnroll/Sample-ReqOverflow)) that can be used as a more complex showcase with domain-call, REST API and Web UI automation examples.

**Update (16th Feb 2024):** The current state of the SpecFlow "Actions" packages has been also ported to make the migration easier as "Reqnroll.SpecFlowCompatibility.Actions.\*" (e.g. "[Reqnroll.SpecFlowCompatibility.Actions.Selenium](https://www.nuget.org/packages/Reqnroll.SpecFlowCompatibility.Actions.Selenium)"). Once they are revised and updated they will be moved to "Reqnroll.Actions.\*".

## How will the versioning of Reqnroll be done?

After some considerations, I decided to reset the versions, so Reqnroll will start from v1.0.0 to avoid confusions. This will also help to apply a more consistent [semantic versioning](https://semver.org/) scheme.

The IDE integrations will be versioned in JetBrains-style, with the year and a version within that, so the first one there is v2024.1.

## Is it difficult to migrate a SpecFlow project to Reqnroll?

The short answer is NO. 🙂 I have upgraded a couple of projects now (also larger ones) and all was done within an hour, but most of them took just a few minutes.

The bit longer answer is that I have created a detailed [migration guide](https://go.reqnroll.net/guide-migrating-from-specflow) that shows you the possible migration paths and the required steps.

The more longer answer would be that Reqnroll is compatible with SpecFlow v4 beta, but we have renamed the namespaces and some of the names that contained the word "SpecFlow". Besides this there are only minor and backwards compatible changes. So if you have already been on SpecFlow v4 beta, then the migration is mainly about changing the NuGet package references and doing a search & replace.

The most of the search & replace stuff can be avoided (or delayed) with the help of the "SpecFlow compatibility package". This package contains derived classes for the most commonly used API (e.g. the "\[Given\]" attribute) in the legacy "TechTalk.SpecFlow" namespace. So by using this extra package, you can try your project with Reqnroll even without replacing all namespace usings immediately. This is also detailed in the [migration guide](https://go.reqnroll.net/guide-migrating-from-specflow).

If you are on SpecFlow v3, you might encounter a few smaller breaking changes (the breaking changes of SpecFlow v4 itself), I have also listed these with some hints in the [migration guide](https://go.reqnroll.net/guide-migrating-from-specflow).

## What's next? How can I help?

I personally will sleep a bit more now as I have some deficit on that, but we will move on with the changes. One of my plans for next week is to setup a [planning board](https://go.reqnroll.net/planning-board) in GitHub projects to track the upcoming tasks and activities. As now we are public, it will be easier to get help from the community, so I'm really counting on you.

The most important thing right now is to get more visibility for Reqnroll in the social media but also in your companies. Please help to spread the word and help others by starring ⭐ the [GitHub project](https://github.com/reqnroll/Reqnroll) and rating the extension on the [Visual Studio Marketplace](https://go.reqnroll.net/vs2022-extension).

But maybe even more important is to [migrate](https://go.reqnroll.net/guide-migrating-from-specflow) your own projects to Reqnroll to verify the concept and demonstrate to your team, to your managers and to the world that **BDD for .NET is still alive**!