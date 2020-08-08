
let tables = require("../data/tables.js");

let waitlist = require("../data/waitlist.js");


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
        res.json(tables);
    });
    app.get("/api/waitlist", (req, res) => {
        res.json(waitlist);
    });

    
    app.post("/api/clear", (req, res) => {
        tables = [];
        waitlist = [];
        res.end();
    });
}