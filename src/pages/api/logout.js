export default (_, res) => {
  res.setHeader("Set-Cookie", "u_n=_;Max-Age=-1;HttpOnly,Secure");
  res.writeHead(302, { Location: "/" });
  res.end();
};
