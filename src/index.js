import express from 'express';
import { create } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/admin/index.js';
import connect from "./config/db/index.js";
import mongoose from "mongoose";

connect(); // Gọi kết nối

// (Tùy chọn) Test chèn dữ liệu

const app = express();
const port = 3000;

// Khai báo route admin

// Tạo __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))
// Tạo engine Handlebars
const hbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts'), //layouts
    partialsDir: path.join(__dirname, 'resources/views/partials') //partials
});

app.engine('hbs', hbs.engine); // phải dùng hbs.engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// app.use(morgan('combined'));

app.use(express.urlencoded({
  extended :true
}));
app.use(express.json());

// init route
route(app)


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

connect().then(() => {
    app.listen(3000, () => {
        console.log("Server chạy tại http://localhost:3000");
    });
});