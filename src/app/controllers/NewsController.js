class NewsController {
  index = (req, res) => {
    res.render('news/index');
  }


  show = (req, res) => {
    res.send('ok nhé');
  }
}

export default new NewsController();
