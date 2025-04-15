---
layout: post
title: "SpecFlow end-of-life has been announced"
date: 2025-01-09
categories: News
tags: LivingDoc Migration OpenSource SpecFlow
image: 2025/SF_dead.png
image_caption: "Screenshot from the specflow.org website"
author: gasparnagy
---

In December 2024, Tricentis [announced **the end-of-life of the SpecFlow open source project**](https://support-hub.tricentis.com/open?number=NEW0001432&id=post). According to the announcement, SpecFlow reached its end-of-life on December 31, 2024. As of 1st January, the SpecFlow GitHub projects are deleted and the support section of the specflow.org website is disabled.

> "SpecFlow will no longer be available after December 31, 2024." ([specflow.org](https://specflow.org/))

<!--more-->

While the announcement was on a short notice, the SpecFlow project has showed no activity in the last two years and Tricentis has never publicly commented the users questions about the future of SpecFlow. This was the reason [why we started with the Reqnroll project]({{ site.url }}/news/2024/02/from-specflow-to-reqnroll-why-and-how/) in the beginning of 2024. More about that below.

## I have SpecFlow projects, what does it mean to me?

Despite the message on the specflow.org website, the actions of Tricentis do not mean that your SpecFlow projects will stop working from one day to another. SpecFlow is distributed through nuget.org that does not allow to delete the existing SpecFlow packages, so **you can keep using SpecFlow for now**.

But keep in mind that **SpecFlow will not going to be updated for newer .NET platforms** (works up to .NET 7), Visual Studio or Rider versions, therefore sooner or later you will not be able to use it. Also worth noticing that since the GitHub project has been deleted, you don't have access to the knowledge base of the SpecFlow issues and you cannot submit and issue to GitHub related to SpecFlow.

There has been an update to the SpecFlow Visual Studio 2022 extension to provide partial support for .NET 8.0. This has never been published to the Visual Studio Marketplace but was available to download from the SpecFlow GitHub project (which is gone now). Fortunately a community member kept a copy of the updated package and made it available in [a Reqnroll discussion forum post](https://github.com/orgs/reqnroll/discussions/359#discussioncomment-11624656), so you can download it from there is you need to.

We have no information about the additional steps Tricentis is planning to take, but you might need to **prepare** **for** **the following additional actions** that will make the use of SpecFlow even more inconvenient.

* They might make the SpecFlow NuGet packages "unlisted" on nuget.org. This means that if you know the exact version of the SpecFlow packages you use, you will be able to download them, but they will not appear in search results.
* They might revoke the SpecFlow Visual Studio 2022 extension package from the Visual Studio Marketplace, so you can only install the extension from the archived package uploaded to the [Reqnroll discussion forum post](https://github.com/orgs/reqnroll/discussions/359#discussioncomment-11624656).
* They might shut down the documentation site ([https://docs.specflow.org/](https://docs.specflow.org/)), so the documentation will not be available.
* They might shut down the SpecFlow website ([specflow.org](https://specflow.org/)), so the blog posts and other content will not be available (including the great ["Given-When-Then with style" challenges](https://specflow.org/learn/given-when-then-with-style/) by Gojko Adzic).

These actions can be done by Tricentis without prior announcement.

## Is it the right time to migrate to Reqnroll?

Seeing that the SpecFlow project seemed to be abandoned and as we failed to convince Tricentis to give back the SpecFlow project to the community if they don’t want to support it, in the beginning of 2024 we "forked" the project and rebooted it under a new name: Reqnroll. ("Forking" is a term used in open-source projects to make a copy of the open-source codebase.) It was necessary to give it a new name, as the name "SpecFlow" is trademarked by Tricentis.

By now, **Reqnroll is an actively developed open-source project with an active contributor and user base**. It has been updated to [support .NET 8.0 and .NET 9.0](https://docs.reqnroll.net/latest/installation/compatibility.html) and we keep adding further improvements (e.g. we just added the support for [scenario-level parallelization](https://docs.reqnroll.net/latest/execution/parallel-execution.html)).

More than 5000 projects have been using Reqnroll by the beginning of 2025, including some bigger projects with more than 1000 feature files, so we can say that **Reqnroll is a mature replacement option for SpecFlow projects**.

As Reqnroll has been created based on the SpecFlow codebase, it is highly compatible with SpecFlow and **the migration process is fairly straightforward, but it is not effortless**. We have a [detailed guide to support migrations](https://docs.reqnroll.net/latest/guides/migrating-from-specflow.html).

Still, depending on the complexity of your SpecFlow project, you might run into issues with the migration where you might need to get help. This might happen especially if you have special asynchronous execution or parallel execution solution, if you have used custom dependency injection configurations or if you have used third-party SpecFlow plugins. We have created a [dedicated discussion category](https://github.com/orgs/reqnroll/discussions/categories/specflow-migration-q-a) to get **community support** for these issues.

## But I have used SpecFlow LivingDoc generator, how should I replace that?

The SpecFlow+ LivingDoc component of SpecFlow was not open-source and therefore we could not take it over when started Reqnroll. We have made attempts to convince Tricentis to make it open-source, but failed. So **SpecFlow+ LivingDoc has no direct substitute in Reqnroll currently**.

SpecFlow+ LivingDoc consisted a command line report generator tool ([SpecFlow+LivingDoc Generator](https://www.nuget.org/packages/SpecFlow.Plus.LivingDoc.CLI)) and an Azure DevOps plugin ([SpecFlow+LivingDoc for Azure DevOps](https://marketplace.visualstudio.com/items?itemName=techtalk.techtalk-specflow-plus)). The LivingDoc generator has been widely used, but the Azure DevOps plugin was also used by quite some projects.

We are in progress with the implementation of a replacement tool of the LivingDoc generator, but it will take some time until it will be ready. **If you urgently need a reporting solution for Reqnroll, you need to find an alternative solution**.

Currently there is no plan to replace SpecFlow+LivingDoc for Azure DevOps within the Reqnroll open-source project.

Without going into the details of them, you should consider the following alternatives (please let us know if there are any other that has not been listed here).

##### Alternatives for SpecFlow+ LivingDoc Generator:

*   One of our contributors (@ThomasHeijtink) has made a temporary Reqnroll plugin that can produce the same proprietary data format that is needed by the SpecFlow+ LivingDoc Generator. So with this plugin you can keep using the SpecFlow+ LivingDoc Generator with Reqnroll. See the [related discussion topic](https://github.com/orgs/reqnroll/discussions/68) for details.
*   [Allure Report](https://allurereport.org/), one of the most popular open-source reporting tool, was one of the first to implement an integration with Reqnroll, so you can use Allure as a replacement with Reqnroll. See the [Allure Report Reqnroll integration documentation](https://allurereport.org/docs/reqnroll/) for details.
*   Johan Van Berkel (ICT Improve) posted about an enterprise reporting solution they have built from open-source components that you can also consider. See details in his [post on LinkedIn](https://www.linkedin.com/pulse/takes-village-johan-van-berkel-bofre/).

##### Alternatives for SpecFlow+LivingDoc for Azure DevOps:

*   The built-in test execution reports of Azure DevOps are pretty good, so you can consider to use them. In this case you do not need to provide any additional reporting page for the Reqnroll BDD scenarios.
*   You can implement a pipeline task that uses one of the alternative solutions for generating a test report from the list above and publish the generated report to your product dashboard in Azure DevOps.
*   Through my own company, Spec Solutions, I have been working on a tool ("SpecSync") for some years that can synchronize BDD scenarios with Azure DevOps Test Cases and allow publishing the test execution results to them. By organizing these Test Cases to a Test Suite hierarchy you can achieve more visibility of the BDD tests with their test results (including test result history), so it can be also considered as an alternative of the LivingDoc plugin. Check the [SpecSync product page](https://www.specsolutions.eu/specsync/) for details. _Note: SpecSync is a commercial tool and Spec Solutions is a gold_ [_sponsor of Reqnroll_]({{ site.url }}/sponsorship/)_._

Please [let us know]({{ site.url }}/contact/) if there is any other alternative that has not been listed here or if you have a case study of using any of the alternatives above.

## How to ensure that Reqnroll will not be abandoned within a few years?

The Reqnroll open-source project has been initiated as a community-driven project without a bigger enterprise owning the assets. This ensures that **as long as there is an interest in the community to keep it alive, it can stay active**.

The community efforts have some limitations though and there are some direct costs as well associated with Reqnroll. Therefore in the long run **we rely on your contribution**!

Please consider to [sponsor Reqnroll]({{ site.url }}/sponsorship/), or use one of our [paid support services]({{ site.url }}/support/). These ensure **the long-term sustainability of the project**. We keep transparency as a top priority: all of our financial transactions can be tracked at [Open Source Collective](https://opencollective.com/reqnroll) and through our [monthly reports](https://github.com/orgs/reqnroll/discussions/categories/announcements?discussions_q=is%3Aopen+category%3AAnnouncements+label%3Atransparency).