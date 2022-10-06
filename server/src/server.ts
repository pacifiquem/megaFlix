import express from 'express';

const app:express.Application = express();

app.listen(3001, () => {
    console.log(`server connected to ${3000}`);
})