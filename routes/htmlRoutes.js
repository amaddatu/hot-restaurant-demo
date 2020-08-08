var path = require("path");

module.exports = (app) => {
    app.get("/reserve", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/tables", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });
}