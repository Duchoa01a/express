// src/routes/index.js
import newRouter from './news.js';
import siteRouter from './sites.js';

export default function route(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
}
