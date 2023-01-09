import Image from "next/image";
import styled from "styled-components";

const LoginBlock = styled.div`
  width: 350px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
  padding-top: 16px;
`;
const Logo = styled.div`
  height: 50px;
  width: 50%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const LoginForm = styled.form`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input{
        padding: 4px 8px;
        width: calc(100% - 16px);
        background-color: #fafafa;
        outline: none;
        border: none;
        border-bottom: 1px solid silver;
    }
`

export default function Login() {
  return (
    <LoginBlock>
      <Logo>
        <Image
          alt="logo"
          src={"/logo-removebg-preview.png"}
          fill
        />
      </Logo>
      <LoginForm>
        <input type={"text"}/>
        <input type={"password"}/>
      </LoginForm>
    </LoginBlock>
  );
}
