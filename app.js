const express = require('express');
const dotenv = require('dotenv');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
//const db require("./config/db");
const routes = require("./routes/ipRoutes");
dotenv.config();
//db();

const app = express();
 
// middleware 
app.use(express.json());
app.use("/ip", routes);
app.use(helmet()); //pour securiser les en-tetes http
// limiter le nombre de requêtes par IP
const limiter = rateLimit({
    windowMs : 15 * 60 * 1000, //15min
    max: 100, //limite 100 req pour une seule IP
    message : "Trop de requêtes, veuillez réessayer plus tard."
});
app.use(limiter); 
const PORT = process.env.PORT ;
app.listen(PORT , () => console.log(`listening on port ${PORT}`));