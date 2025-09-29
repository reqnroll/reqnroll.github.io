---
layout: post
title: "Reqnroll v3.1 released with xUnit v3 support and other improvements"
date: 2025-09-29
categories: News
tags: Release
image: assets/images/2025/sebastian-leon-prado-MgODFmLOaEY-unsplash.webp
image_caption: "Photo by Sebastián León Prado on Unsplash"
author: gasparnagy
---

We are happy to announce the release of Reqnroll v3.1. This release focuses on improving test framework compatibility, fixing bugs, and making the overall experience smoother.

<!--more-->

This is a minor update following our major v3.0 release, but it includes some important new features and improvements.

## Key highlights of v3.1

### New Features

*   **xUnit v3 support:** You can now use Reqnroll with the latest xUnit v3. To get started, use the new `Reqnroll.xunit.v3` package.
*   **Improved parallel execution control:** The `addNonParallelizableMarkerForTags` feature now works with scenario-level tags for NUnit, MsTest V2, and TUnit.
*   **Option to disable friendly test names:** A new `generator/disableFriendlyTestNames` setting in `reqnroll.json` allows you to turn off friendly test method names, which can help with compatibility with tools like VSTest retry.

### Improvements

*   **Verify v29+ support:** The Reqnroll.Verify plugin now supports Verify v29 and later.
*   **Updated dependencies:** We've updated to Cucumber Gherkin v35, Cucumber Messages v29, and Cucumber CompatibilityKit v23.
*   **Optimized MSBuild generation:** The `Reqnroll.Tools.MsBuild.Generation` NuGet package is now smaller and more efficient.

### Bug Fixes

This release also includes several bug fixes related to formatters, plugin hooks, and the dry-run mode.

## Check the full changelog

For a complete list of all changes, please see the [v3.1.0 changelog on GitHub](https://github.com/reqnroll/Reqnroll/releases/tag/v3.1.0).

As always, your feedback is valuable. If you encounter any issues, please report them on [GitHub](https://github.com/reqnroll/Reqnroll/issues).

A big thank you to all our contributors for this release! 🙏
