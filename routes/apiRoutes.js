
let tables = require("../data/tables.js");

let waitlist = require("../data/waitlist.js");

const https = require('https');


module.exports = (app) => {
    app.post("/api/tables", (req, res) => {
        // if tables is less than 5, we add to tables
        if(tables.length < 5){
            tables.push(req.body);
            res.json(true);
        }
        else{
            // if tables is more than 5, we add to waiting list
            waitlist.push(req.body);
            res.json(false);
        }
    });

    app.get("/api/tables", (req, res) => {
        // sets content-type to "application/json"
        // formats the variable that is in the input parameter as a JSON string
        res.json(tables);
    });
    app.get("/api/waitlist", (req, res) => {
        res.json(waitlist);
    });

    app.delete("/api/table/delete/:tableIndex", (req, res) => {
        let tableIndex = parseInt(req.params.tableIndex);
        tables = tables.filter( (e, i) => i != tableIndex ); 
        res.json(tables);
    });

    
    app.post("/api/clear", (req, res) => {
        tables = [];
        waitlist = [];
        res.end();
    });

    app.get("/test/api/proxy", (req, res) => {
        let target = req.query.target;
        console.log(target);
        https.get(decodeURIComponent(target), function(result){
            res.end(result);
        });
    });
}