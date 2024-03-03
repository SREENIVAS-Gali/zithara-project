
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const Axios = require("axios")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { Client } = require('pg');

const app = express();
// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "Dillideepak@44",
//     database: "customerdetails",

// });

const db = new Client({
    user: "postgres",
    host: "localhost",
    database: "CustomersDB",
    password: "admin",
    port: 5432,
  })

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true

    })
);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

function message(props) {
    console.log(props);
}

// app.get("/getcustomerdetails",(req,res)=>{
//     db.query("SELECT * FROM customers", (err, results) => {
//         if(err) throw err;
//         res.send(results);
//       });
// })

app.post("/getcustomerdetailsByRange",(req,res) =>{
    let offset = req.body.offset
    let search = req.body.search
    let filter = req.body.filter
    let order = req.body.filterType
    if(offset){
        offset -= 1;
        offset *= 20;
    }
    else{
        offset = 0;
    }
    if(!order){
        order = ""
    }
    if(!search){
        search = "";
    }
    let query = "SELECT * FROM customers\n";
    query += "WHERE LOWER(customer_name) LIKE LOWER('%"+search+"%') OR LOWER(location) LIKE '%"+search+"%'\nORDER BY ";
    
    if(filter == 'TIME'){
        query +=  "EXTRACT(HOUR FROM created_at) "+order+", EXTRACT(MINUTE FROM created_at) "+order+", EXTRACT(SECOND FROM created_at) "+order
    }
    else if(filter){
        query += "DATE(created_at)" + order
    }
    else {
        query += "sno \n";
    }
    query += "\nLIMIT 20 OFFSET " + offset + ";";
    // console.log(query)
    db.query(query, (err, results) => {
        if(err) throw err;
           res.send(results.rows);
      });
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});



app.post("/getcustomerdetailsByFilterCount",(req,res) =>{
    let offset = req.body.offset
    let search = req.body.search
    let filter = req.body.filter
    let order = req.body.filterType
    if(offset){
        offset -= 1;
        offset *= 20;
    }
    else{
        offset = 0;
    }
    if(!order){
        order = ""
    }
    if(!search){
        search = "";
    }
    let query = "SELECT count(*) as count FROM customers\n";
    query += "WHERE LOWER(customer_name) LIKE LOWER('%"+search+"%') OR LOWER(location) LIKE '%"+search+"%'; ";
    db.query(query, (err, results) => {
        if(err) throw err;
           res.send(results.rows);
      });
})

// app.get("/getPageCount",(req,res)=>{
//     db.query("SELECT count(*) as count FROM customers", (err, results) => {
//         if(err) throw err;
//            res.send(results);
//       });
// })

app.listen(3001, () => {
    console.log("running server");
});


