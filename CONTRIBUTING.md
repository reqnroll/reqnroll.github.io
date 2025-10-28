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

In order to create draft posts, you can find ideas in [this article by Fizer Khan](https://www.fizerkhan.com/blog/posts/working-with-upcoming-posts-in-jekyll). You can force displaying future posts with the `--future` flag (e.g. `bundle exec jekyll serve --livereload --future`).