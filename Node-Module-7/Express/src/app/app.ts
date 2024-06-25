import express,{NextFunction, Request,Response} from 'express';
const app = express()
const port = 5000

//parsers
app.use(express.json())
app.use(express.text())

//middlewire

const logger =(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.url,req.method,req.hostname)
    next()
}
//Router 
const userRouter = express.Router()
app.use('/',userRouter)

userRouter.get('/app/v2/user/create',(req:Request,res:Response)=>{
    console.log(req.body)
    res.json({
        message:'Succed'
    })
})


app.get('/',logger,(req:Request,res:Response)=>{
    res.send('Hello World!!') 
})

app.post('/',logger,(req:Request,res:Response)=>{
    console.log(req.body)
    // console.log('got data')
    // res.send('got data')
    res.json({
        message:'succesfully'
    })
})

export default app;