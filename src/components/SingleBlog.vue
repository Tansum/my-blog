<template>
	<div id="single-blog">
		<h2>{{blog.title}}</h2>
		<p><small>标签：{{blog.categories}}</small></p>
		<p><small>类型：{{blog.type}}</small></p>
		<hr>
		<article>
			<p><strong>内容：</strong></p>
			<p>{{blog.content}}</p>
		</article>
		<router-link v-bind:to="'/edit/'+ id">编辑</router-link>
		<button v-on:click = "deleteBlog()">删除</button>
	</div>
</template>

<script>
	export default{
		name: "single-blog",
		data(){
			return {
				id: this.$route.params.id,
				blog: {}
			}
		},
		created(){
			// this.$http.get("https://jsonplaceholder.typicode.com/posts/"+this.id)
			// this.$axios.get("/posts/"+this.id)
			this.$axios.get("/api/blog?id="+this.id)
				.then(res=>{
					// console.log(res);
					this.blog = res.data;
				})
		},
		methods: {
			deleteBlog(){
				this.$axios.delete("/api/blog?id="+this.id)
					.then(res=>{
						this.$router.push({path: '/'})
					})
					.catch(err=>{
						console.log(err)
					})
			}
		}//methods
	}
	
</script>

<style scoped>
#single-blog {
	min-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background-color: #eee;
	border: 1px dotted #aaa;
}
</style>