import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './server.js';
import pageRouter from './routes/web/pageRouter.js';
dotenv.config();
connection();
const app = express();


// Template
app.set("view engine","ejs");
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Web Routes
app.use('/', pageRouter);

app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;