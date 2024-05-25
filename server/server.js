const express=require('express')
const app=express()
const port=5000
const cookieParser=require('cookie-parser')
const connectDb=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
//imports
const loginRouter=require('./routes/login')
const regiserRouter=require('./routes/register')
const requestRouter=require('./routes/request')
const postRouter=require('./routes/post')
const likeRouter=require('./routes/likes')
const commentRouter=require('./routes/comment')
const detailRouter=require('./routes/detail')
const userRouter=require('./routes/user')
const cors=require('cors')
const checkIsAdmin=require('./middlewares/checkAdmin')
//routes
app.use(cors({
    origin: 'http://localhost:3000', // 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials:true
  }));
  
app.use('/login',loginRouter)
app.use('/register',regiserRouter)
app.use('/request',requestRouter)
app.use('/post',postRouter)
app.use('/likes',likeRouter)
app.use('/comment',commentRouter)
app.use('/detail',detailRouter)
app.use('/user',checkIsAdmin,userRouter)
connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`listening on port`)})
})