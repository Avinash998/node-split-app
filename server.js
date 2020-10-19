const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/test',(req,res) => {
    res.status(200).send("Successfull");
})

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})