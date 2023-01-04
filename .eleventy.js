const markdownIt = require('markdown-it'),
markdownItAttrs = require('markdown-it-attrs');
module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("favicon");
  eleventyConfig.addPassthroughCopy("css");
    markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true
    }

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
  eleventyConfig.setLibrary('md', markdownLib)
  eleventyConfig.addCollection('post', collection => {
    return collection.getFilteredByGlob("posts/*.md");
  })
};


