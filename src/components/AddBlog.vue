<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form>
      <label>标题:</label>
      <input type="text" v-model="blog.title" required />
      <label>内容:</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>标签：</label>
        <label>诗</label>
        <input type="checkbox" value="诗" v-model="blog.categories">
        <label>书</label>
        <input type="checkbox" value="书" v-model="blog.categories">
        <label>礼</label>
        <input type="checkbox" value="礼" v-model="blog.categories">
        <label>易</label>
        <input type="checkbox" value="易" v-model="blog.categories">
        <label>春秋</label>
        <input type="checkbox" value="春秋" v-model="blog.categories">
      </div>
      <label>类型：</label>
      <select v-model="blog.type">
        <option v-for="type in types">{{type}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    
    <div id="preview">
      <h3>博客总览</h3>
      <p>标题：{{blog.title}}</p>
      <p>内容：</p>
      <p>{{blog.content}}</p>
      <p>分类：</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>类型：{{blog.type}}</p>
    </div>

  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        type: ""
      },
      types: ["原创","转载","翻译"]
    }//return
  },
  methods: {
    post(){
      this.$axios.post("/api/post",{
        title: this.blog.title,
        content:this.blog.content,
        categories: this.blog.categories,
        type: this.blog.type
      })
        .then(res=>{
          // console.log(res)
          this.$router.push({path: '/blog/'+res.data._id})
        },
        err=>{
          console.log('error',err)
        })
    },
    redirect(){

    }
  }//methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  textarea {
    height: 200px;
  }

  #checkboxes label {
    display: inline-block;
    margin-top: 0;
  }
  #checkboxes input {
    display: inline-block;
    margin-left: 0;
    margin-right: 15px;
  }
  button {
    display: block;
    margin: 20px 0;
    padding: 14px;
    color: #fff;
    background-color: crimson;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3 {
    margin-top: 10px;
  }
</style>
