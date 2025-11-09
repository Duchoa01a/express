import express from 'express';
import { create } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

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

app.use(morgan('combined'));

app.use(express.urlencoded({
  extended :true
}));
app.use(express.json());


app.get('/', (req, res) => {
  res.render('home', { title: 'Hello World!' });
});

app.get('/news', (req, res) => {
  res.render('news/index', { title: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
