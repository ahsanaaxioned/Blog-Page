module.exports = eleventyConfig=>{
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addCollection('post',collection=>{
    return collection.getFilteredByGlob("posts/*.md");
  })
};