const express = require('express')
const mongoose = require('mongoose')
const Blog = require('../models/blogdata.js')

const router = express.Router()
/*----------------首页-------------------*/
router.get('/',(req,res)=>{
    // console.log(req.query)
    Blog.find()
    	.then((blogs)=>{
    		// console.log(blogs)
    		res.send(blogs)
    	},err=>{
    		console.log(err)
    	})
})
/*----------------添加-------------------*/
router.post('/post',(req,res)=>{
    // console.log(req.body)
    new Blog(req.body).save()
    	.then((blogs)=>{
    		// console.log(blogs)
    		res.send(blogs)
    	},err=>{
    		console.log(err)
    	})
})
/*----------------详情-------------------*/
router.get('/blog',(req,res)=>{
	// console.log(req.query)
    Blog.findById(req.query.id)
		.then((blogs)=>{
			res.send(blogs)
		},err=>{
			console.log(err)
		})
})

/*----------------修改-------------------*/
router.post('/edit',(req,res)=>{
    // console.log(req.body)
    Blog.findByIdAndUpdate(req.body._id,req.body)
    	.then(()=>{
    		res.status(200).send('OK');
    	},err=>{
    		console.log(err)
    	})
})

/*----------------删除-------------------*/
router.delete('/blog',(req,res)=>{
    // console.log(req.query.id)
    Blog.findByIdAndDelete(req.query.id)
    	.then(()=>{
    		res.status(200).send('OK');
    	},err=>{
    		console.log(err)
    	})
})

module.exports = router
