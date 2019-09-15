const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/myBlog', { useNewUrlParser: true },err=>{
	if(err){
		console.log(err);
	}else {
		console.log('数据库连接成功')
	}
})

var blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String
	},
	categories: {
		type: Array
	},
	type: {
		type: String,
		default: ''
	}
})

module.exports = mongoose.model('Blog',blogSchema)
