# Based on: https://stackoverflow.com/a/26616937/26530
module Jekyll
  class UpdatePostData < Jekyll::Generator

    def generate(site)
      @site = site
      site.posts.docs.each { |post| updatePostData post }
    end

    private

    def updatePostData(post) 
      if (post.data.key?("modified_date"))
        post.data["last_modified_at"] = post.data["modified_date"]
      end
    end

  end
end