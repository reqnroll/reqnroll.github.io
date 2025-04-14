---
layout: post
title: "Reqnroll Visual Studio Extension v2024.1 released"
date: 2024-02-08
categories: News
tags: Release SpecFlow VisualStudio
featured_image: 2024/backstage-jessie-mccall-2vfKU3bm8xM-unsplash.jpg
featured_image_caption: "Photo by Jesse McCall on Unsplash.com"
author: Gaspar Nagy
---

**Reqnroll Visual Studio Extension v2024.1 has been released with SpecFlow & Reqnroll project support, .NET 8 support and hook navigation.**

The first version of the Reqnroll Visual Studio 2022 extension has been released: v2024.1.49 ([Release notes](https://go.reqnroll.net/vs-release-notes)).

For background and motivation of the [Reqnroll project]({{ site.url }}), please check our [intro post]({{ site.url }}/news/2024/02/from-specflow-to-reqnroll-why-and-how/).

The Visual Studio extension can handle both SpecFlow and Reqnroll projects, so you can use it even if you have not [migrated all your projects](https://go.reqnroll.net/guide-migrating-from-specflow) to Reqnroll.

You can install the extension by searching for "Reqnroll" in the Visual Studio "Manage Extensions…" dialog. Please find the detailed instructions in [Visual Studio 2022 setup guide](https://go.reqnroll.net/doc-setup-vs).

Important: The extension cannot work together with the SpecFlow for Visual Studio 2022 extension (both provide commands for feature files), so you have to disable or remove the SpecFlow extension, in order to use the Reqnroll extension. As it also supports SpecFlow projects, you can still use your existing SpecFlow projects with it.

The extension has been based on the 2022.1.91 version of the SpecFlow extension, so all the features of the extension (syntax highlighting, step navigation, define steps, etc.) are also available in the Reqnroll extension.

In addition to the feature-set of the SpecFlow extension, there are also two additional improvements: .NET 8 support and hook navigation.

## .NET 8.0 support

The extension provides support for projects with all .NET versions, including .NET 8.0, so you can use it with your modern .NET projects as well.

## Hook navigation

An exciting feature that is available with the Reqnroll extension is to list and jump to the hooks that are going to be executed when running a particular scenario.

{% include figure.html url="/assets/images/2024/vs-go-to-hooks.png" alt="Go To Hooks command" description="Go To Hooks command" %}

The command can be invoked from the context menu of the feature files (from a scenario), but it also comes up if you use the "Go To Definition" (F12) command from the heading of the scenario (tags, keyword line, description). The default keyboard shortcut for it is Ctrl+B, H.

The feature only works for Reqnroll projects.

## Feedback

Reqnroll is free, but we provide dedicated support through our [paid subscription packages]({{ site.url }}/support/). Purchasing them will also support the [sustainability of the open-source project](https://go.reqnroll.net/sustainability).

If you find any issues or have ideas, please use our [community support channels](https://go.reqnroll.net/community-support) to report them.

📢 Please take a few minutes and help others by rating ⭐ the extension on the [Visual Studio Marketplace](https://go.reqnroll.net/vs2022-extension).