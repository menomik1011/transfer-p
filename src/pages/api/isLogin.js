export default (req, res) => {
    res.statusCode = 200;
    res.json({ user: req.cookies.u_n });
  };