import user from "./db/account";
export default (req, res) => {
  if (req.method === "POST") {
    const { id } = req.body;
    if (id === user.id) {
      res.statusCode = 400;
      res.json({ state: 400, messege: "이미 있는 아이디 입니다." });
    } else {
      res.statusCode = 200;
      res.json({ state: 200, messege: "회원가입에 성공하였습니다." });
    }
  }
};
