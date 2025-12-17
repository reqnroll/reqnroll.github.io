---
layout: post
title: "Reqnroll v3.3 released with improved build performance and formatter enhancements"
date: 2025-12-17
categories: News
tags: Release
image: assets/images/2025/sebastian-leon-prado-MgODFmLOaEY-unsplash.webp
image_caption: "Photo by Sebastián León Prado on Unsplash"
author: gasparnagy
---

Reqnroll v3.3 has been released, bringing improved build performance, enhanced formatter configuration options, and support for linked feature files.

<!--more-->

This release focuses on build optimization, better file handling flexibility, and improved compatibility with the latest testing frameworks.

## What's new in v3.3

### Improvements

*   **Improved build performance:** Up-to-date checking for feature files has been improved, resulting in faster builds. Code-behind files are now deleted on clean or rebuild for better incremental build support.
*   **Intermediate output folder support:** Feature code-behind files can now be stored in the intermediate output folder (obj folder) by setting the `ReqnrollUseIntermediateOutputPathForCodeBehind` MSBuild property to `true`.
*   **Linked feature files support:** Reqnroll now supports linked feature files (files used from outside of the project folder). The `ReqnrollUseIntermediateOutputPathForCodeBehind` flag must be enabled to use this feature.
*   **Formatter variable substitution:** Formatters' configured OutputFilePath can now contain variable substitution parameters for build metadata, timestamp, and environment variables. See the [formatter configuration documentation](https://docs.reqnroll.net/latest/installation/formatter-configuration.html#available-substitution-variables) for details.
*   **Updated testing framework support:** NUnit dependencies are updated to v4.4.0 in templates, and TUnit integration now supports TUnit v1.3.25 and .NET 10 SDK compatibility.
*   **Updated Cucumber integrations:** Cucumber.HtmlFormatter updated to version 22 to support HTML reports on non-https URLs, and Cucumber.Messages updated to version 30.
*   **Improved packaging:** Reqnroll NuGet packages have been improved for better quality and compatibility.
*   **Updated behavior:** NotImplementedException thrown by tests is no longer treated as a "pending" outcome, reverting to v2 behavior.

### Bug Fixes

This release also includes several bug fixes related to stability and error handling.

## Full changelog

For a complete list of all changes, please see the [v3.3.0 changelog on GitHub](https://github.com/reqnroll/Reqnroll/releases/tag/v3.3.0).

If you encounter any issues, please report them on [GitHub](https://github.com/reqnroll/Reqnroll/issues).

Thank you to all contributors for this release! 🙏

<center>🎅 <b>Happy Holidays from the Reqnroll team!</b>🎄</center>

{% include figure.html url="/assets/images/2025/reqnroll-icon-xmas-small.webp" alt="Reqnroll Logo with Santa Hat (generated with AI)" style="width:200px; height:auto;" %}