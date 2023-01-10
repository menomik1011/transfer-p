import user from "./db/account";
export default (req, res) => {
  if (req.method === "POST") {
    const { id, password } = req.body;
    if (id === user.id && password === user.pw) {
      res.setHeader("Set-Cookie", "Max-age=3600;HttpOnly,Secure");
      res.StatusCode = 200;
      res.json({ messege: "ok" });
    } else {
      res.StatusCode = 401;
      res.json({ messege: "아이디 또는 비밀번호가 일치하지 않습니다." });
    }
  }
};
