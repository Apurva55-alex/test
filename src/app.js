import express from "express"
import path from "path"
import * as hbs from "hbs"
import fs from "fs"

const app=express()
const __dirname=path.resolve()

//Define path for expresss congfig
const publicPath=path.join(__dirname,'public')
const viewPath= path.join(__dirname,'templates/views')
const partialsPath=path.join(__dirname,'templates/partials/header.hbs')




app.set('view engine','hbs') // for handle bar setup and now we can use it to create dynamic templates
app.set('views',viewPath) //views-location

//const { name } = path.parse(path.basename(partial_path));

//Handlebars.registerPartial(name, readHbs(partial_path));
//hbs.registerPartial('partials',readHbs(partialsPath))
//setup static directory to serve
app.use(express.static(publicPath))


app.get('/',(req,res)=>{
res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'photo with glasses',
        object:'camera'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        work: 'to help you navigate through the site!'
    })
})


app.get('/weather',(req,res)=>{
    res.send({
        forecast:'today is windy',
        location:'kathmandu'
    })

})

app.listen(3000,()=>{
    console.log('server is up correctly on port 3000')
})