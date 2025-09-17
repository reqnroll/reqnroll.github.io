# Contributing to Reqnroll WebSite

## Building the site locally

Prerequisites:

* Ruby v3.3 or later

Install dependencies

* Invoke `bundle install`

In order to test your changes, there are multiple options:

* Build the site and host it locally with live reload (recommended)
  * Invoke `bundle exec jekyll serve --livereload`
  * This will host the site at http://127.0.0.1:4000/
* Build the site once and host it locally
  * Invoke `bundle exec jekyll serve`
  * This will host the site at http://127.0.0.1:4000/
* Build the site once
  * Invoke `bundle exec jekyll build`
  * The generated site is in the `_site` folder