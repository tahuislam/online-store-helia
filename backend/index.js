import express from "express";
import { PORT } from "./config";

const app = express();

app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send('welcome to mern stack');

});

app.listen(PORT, ()=> {
    console.log(`App is running to port: ${PORT}`)
})