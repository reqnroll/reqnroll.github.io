---
layout: post
title: "Reqnroll v3.2 released with MsTest v4 support and async step definition snippets"
date: 2025-10-22
categories: News
tags: Release
image: assets/images/2025/sebastian-leon-prado-MgODFmLOaEY-unsplash.webp
image_caption: "Photo by Sebastián León Prado on Unsplash"
author: gasparnagy
---

Reqnroll v3.2 has been released, bringing support for MsTest v4 and the ability to generate async step definition snippets.

<!--more-->

This is a focused update that addresses some important compatibility and workflow improvements.

## What's new in v3.2

### Improvements

*   **Async step definition snippets:** Step definition snippets (also known as skeletons) can now be generated as async methods. You can enable this by setting `trace/stepDefinitionSkeletonStyle` to `AsyncCucumberExpressionAttribute` or `AsyncRegexAttribute` in your configuration.
*   **MsTest v4 support:** Reqnroll now supports the latest version of MsTest (v4), ensuring you can use the most up-to-date testing framework.

### Bug Fixes

This release also includes a bug fix related to security vulnerabilities of some dependencies.

## Full changelog

For a complete list of all changes, please see the [v3.2.0 changelog on GitHub](https://github.com/reqnroll/Reqnroll/releases/tag/v3.2.0).

If you encounter any issues, please report them on [GitHub](https://github.com/reqnroll/Reqnroll/issues).

Thank you to all contributors for this release! 🙏
