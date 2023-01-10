export default (req, res) => {
  res.setHeader("Set-Cookie", "u_n=_;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ messege: "ok" });
};
