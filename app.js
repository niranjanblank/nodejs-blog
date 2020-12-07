const express = require('express')
const morgan = require('morgan')
const mongooge = require('mongoose')

const { render } = require('ejs')
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express()

//connect to mongodb
const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mhgfq.mongodb.net/<database_name>?retryWrites=true&w=majority'
const localURI='mongodb://localhost:27017/blogdatabase'
mongooge.connect(localURI, {useNewUrlParser:true, useUnifiedTopology: true})
.then((result)=>{
    console.log('connected to db')
    //listen for requests
    app.listen(3000)
}).catch((err)=>{console.log(err)})


//register view engine
app.set('view engine','ejs')
// app.set('views','name_of_view') // if we have view in seperate file





//middleware
// app.use((req,res, next)=>{
//     console.log('new request made:')
//     console.log('host', req.hostname)
//     console.log('path', req.path)
//     console.log('method', req.method)
//     next()
// })

//middleware and static file
app.use(express.static('public'))// express.static('folder_name') doing this will allow the files to be accessed in the folder_NAME
app.use(express.urlencoded({extended:true})) //for accepting form data
app.use(morgan('dev'))

//mongoose practice
app.get('/add-blog',(req, res)=>{
    const blog = new Blog({
        title: 'New Blog 2',
        snippet: 'About new Blog',
        body: 'more about my new Blog'

    })
    blog.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })

})
app.get('/all-blog',(req,res)=>{
    Blog.find().then((result)=>{
        res.send(result)
    }).catch((err)=>console.log(err))
    
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('5fcdf54198faab274c0d4a8a').then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

///////////////////////
app.get('/',(req,res)=>{

    // res.send('<p>HomePage</p>')
    // res.sendFile('./views/index.html',{root: __dirname}) // for normal routing

    // const blogs= [
    //     {title: 'Yoshi finds egges', snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    //     {title: 'Mario finds stars', snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    //     {title: 'How to defeat bowser', snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    // ]
    // res.render('index',{title:'Home',blogs}) //using view engines
    res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
    // res.send('<p>About</p>')
    // res.sendFile('./views/about.html',{root: __dirname})
    res.render('about',{title:'About'})
})

//blog routes
app.use(blogRoutes) // we can use app.use('/blogs', blogRoutes) but we have to remove '/blogs' with '/' with the blogRoutes file

//404 page
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root: __dirname})
    res.status(404).render('404',{title:'404'})
})