<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filterBlogs" class="single-blog">
    	<router-link v-bind:to="'/blog/'+ blog._id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link> 
    	<article>
    		{{blog.content | snippet}}
    	</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data(){
  	return {
		blogs: [],
		search:""
  	}
  },
  created(){
  this.$axios.get("/api/")
 		.then(data=>{
      // console.log(data);
      // this.blogs = data.data.slice(0, 10);
      this.blogs = data.data;
 		})
  },
  computed: {
  	filterBlogs(){
		return this.blogs.filter(blog=>blog.title.match(this.search));
  	}
  }
}
</script>

<style>
  #show-blogs {
  	max-width: 800px;
  	margin: 0 auto;
  }
  .single-blog {
  	padding: 20px;
  	margin: 20px 0;
  	box-sizing: border-box;
  	background-color: #eee;
    border: 1px dotted #aaa;
  }
  #show-blogs a {
    /* color: #444; */
    text-decoration: none;
  }
  input[type="text"] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
