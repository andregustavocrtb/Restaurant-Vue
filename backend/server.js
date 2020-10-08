const db = require("./models");
const app =  require('./app')

const port = 3333;
const ip = 'localhost';

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.listen(port, ip, ()=>{
    console.log(`Server is running on http://${ip}:${port}`);
    console.log("Kill server with: Ctrl + C")
});


