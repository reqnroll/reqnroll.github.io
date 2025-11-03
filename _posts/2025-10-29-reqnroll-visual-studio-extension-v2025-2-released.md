---
layout: post
title: "Reqnroll Visual Studio Extension v2025.2 released"
date: 2025-10-29
categories: News
tags: Release VisualStudio
image: assets/images/2024/backstage-jessie-mccall-2vfKU3bm8xM-unsplash.jpg
image_caption: "Photo by Jesse McCall on Unsplash.com"
author: gasparnagy
---

**Reqnroll Visual Studio Extension v2025.2 has been released with improvements to the 'New Project' wizard, table formatting enhancements, and bug fixes.**

<!--more-->

A new version of the Reqnroll Visual Studio 2022 extension has been released: v2025.2.359 ([Release notes](https://github.com/reqnroll/Reqnroll.VisualStudio/releases/tag/v2025.2.359)).

If you have installed an earlier version of the Reqnroll Visual Studio extension, it will by default automatically update to the latest version. You can also install the extension by searching for "Reqnroll" in the Visual Studio "Manage Extensions…" dialog. Please find the detailed instructions in [Visual Studio 2022 setup guide](https://go.reqnroll.net/doc-setup-vs).

## What's new

### Improvements

The release includes several useful improvements:

* **Updated 'New Project' wizard**: The wizard now uses the latest versions of supported test frameworks and .NET frameworks, including .NET 10 support.
* **xUnit v3 support**: You can now select xUnit v3 as a test framework when creating new projects.
* **Enhanced table formatting**: The 'Format Document' command now right-aligns numeric values in tables by default, improving readability. If you prefer left alignment, you can override this by setting `gherkin_table_cell_right_align_numeric_content = false` in your `.editorconfig` file within a `[*.feature]` section.

### Bug fixes

The release also addresses several issues:

* Fixed ambiguous steps being reported when a definition matches via more than one tag
* Fixed incorrect binding language detection in the Visual Studio extension
* Fixed the 'New Project' wizard to prevent specifying project names that result in invalid namespaces for generated code-behind files

## Visual Studio 2026 Insiders support

The Reqnroll Visual Studio extension also supports the new [**Visual Studio 2026 Insiders**](https://visualstudio.microsoft.com/insiders/) version, which is a preview version of Visual Studio 2026. This ensures you can use the latest Reqnroll features even if you're testing the upcoming Visual Studio release.

## Feedback

Reqnroll is free, but we provide dedicated support through our [paid subscription packages]({{ site.url }}/support/). Purchasing them will also support the [sustainability of the open-source project](https://go.reqnroll.net/sustainability).

If you find any issues or have ideas, please use our [community support channels](https://go.reqnroll.net/community-support) to report them.

📢 Please take a few minutes and help others by rating ⭐ the extension on the [Visual Studio Marketplace](https://go.reqnroll.net/vs2022-extension).
