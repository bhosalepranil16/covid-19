const path = require('path')
const express = require('express')
const app = express()
const request = require('request')

const port = process.env.PORT || 5500;

const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

app.get('/india_data',(req,res)=>{
  request({ url : 'https://covid-19india-api.herokuapp.com/all' , json : true },(err,data) => {
      if(err) {
        return res.status(400).json({
          error : err
        })
      }
      res.status(200).send(data.body[0])
  })
})

app.get('/global_data',(req,res)=>{
  request({ url : 'https://covid-19india-api.herokuapp.com/global' , json : true },(err,data) => {
      if(err) {
        return res.status(400).json({
          error : err
        })
      }
      res.status(200).send(data.body.data)
  })
})

app.get('/states_data',(req,res)=>{
  request({ url : 'https://covid-19india-api.herokuapp.com/all' , json : true },(err,data) => {
      if(err) {
        return res.status(400).json({
          error : err
        })
      }      
      res.status(200).send(data.body[1].state_data)
  })
})

app.get('/news_data',(req,res)=>{
  request({ url : 'https://covid-19india-api.herokuapp.com/headlines' , json : true },(err,data) => {
      if(err) {
        return res.status(400).json({
          error : err
        })
      }      
      res.status(200).send(data.body)
  })
})

app.get('/contacts_data', (req, res) => {
  request({ url: 'https://covid-19india-api.herokuapp.com/helpline_numbers', json: true }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      })
    }
    res.status(200).send(data.body.contact_details)
  })
})


app.listen(port, () => {
  console.log(`Server is on port ${port}` );
})

