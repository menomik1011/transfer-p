import userInfo from "../db/userInfo"
export default (_, res)=>{
    const list = userInfo.map(user=>({code : user.ep, name: user.name}));
    console.log(list);
    res.status(200).send(list);
}