module.exports = eleventyConfig=>{
  eleventyConfig.addPassthroughCopy("favicon");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addCollection('post',collection=>{
    return collection.getFilteredByGlob("posts/*.md");
  })
};