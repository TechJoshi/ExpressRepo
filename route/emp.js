const express = require('express');
const db = require('../db')

const router = express.Router()

router.get('/',(request,response)=>{
  const connection = db.connect();
  const statement = `select * from emp`;
  connection.query(statement,(err,data)=>{
      if(err==null)
      {
          response.send(JSON.stringify(data));
      }
      else
      {
          response.send(JSON.stringify(err))
      }
  })
})

module.exports = router