import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './server.js';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import flash from 'express-flash';
import session from 'express-session';
//Routes
import pageRouter from './routes/web/pageRouter.js';
import aboutRoute from './routes/web/aboutRoute.js'; 
dotenv.config();
connection();
const app = express();

cloudinary.config({
     cloud_name: process.env.CLOUD_NAME,
     api_key: process.env.CLOUD_API_KEY,
     api_secret: process.env.CLOUD_SECRET_API
});

// Template
app.set("view engine","ejs");
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({useTempFiles : true}));
app.use(session({
     secret: 'my-secret-key',
    resave: false,
     saveUninitialized: false,
}));
app.use(flash());

// Web Routes
app.use('/', pageRouter);
app.use('/about', aboutRoute);

app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;