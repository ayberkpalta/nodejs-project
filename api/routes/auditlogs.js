const express = require('express');
const router = express.Router();


//catch get all audit logs


router.get("/:id",(req,res,next)=>{
    res.json({
        body: req.body,
        params: req.params,// "/:id" => req.params.id

        query: req.query,  //http://localhost:3010/auditlogs?id=12&name=tester
        headers: req.headers
    })
})

//http://localhost:3010/auditlogs/123?id=1122333&name=testtest

//require authentication and authorization for admin
module.exports = router;