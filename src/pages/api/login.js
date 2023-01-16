import user from "./db/account";
export default (req, res) => {
  if (req.method === "POST") {
    const { id, password } = req.body;
    if (id === user.id && password === user.pw) {
      res.setHeader("Set-Cookie", `u_n=${id};Max-age=3600;HttpOnly,Secure`);
      res.status(200).send({ messege: "ok" });
    } else {
      res.statusCode = 400;
      res.status(401).send({ messege: "아이디 또는 비밀번호가 일치하지 않습니다." });
    }
  }
};
