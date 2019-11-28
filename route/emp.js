const express = require('express');
const db = require('../db')

const router = express.Router()

router.get('/',(request,response)=>{
  const connection = db.connect();
  const statement = `select * from emp`;
  connection.query(statement,(err,data)=>{
      if(err==null)
      {
          console.log("changed..");
          
          response.send(JSON.stringify(data));
      }
      else
      {
        console.log("changed..");
          response.send(JSON.stringify(err))
      }
  })
})

module.exports = router