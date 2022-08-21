import express from 'express';
import resize from './routes/resize';

const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`server started working at http://localhost:${port}`);
});

app.use('/resize', resize);

export default app;
