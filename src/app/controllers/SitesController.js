class SitesController {
  index = (req, res) => {
    res.render('home'); // tên file view trong views
  }
}

export default new SitesController();
