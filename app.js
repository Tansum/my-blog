const express = require('express');
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const Blog = require('./models/blogdata.js')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/static/', express.static(path.join(__dirname,'/static/')))

app.use('/',require('./routers/blog.js'));

app.listen(3000,()=>{
	console.log('running……')
})