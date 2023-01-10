import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
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
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    font-size: 1rem;
    padding: 4px 8px;
    width: calc(100% - 16px);
    background-color: #fafafa;
    outline: none;
    border: none;
    border-bottom: 1px solid silver;
  }
  > div {
    display: flex;
    justify-content: space-between;
    button,
    a {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.6);
      background-color: transparent;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;

const LoginBtn = styled.button`
  height: 40px;
  border: 1px solid silver;
  border-radius: 4px;
  background-color: rgba(0, 149, 246, 0.5);
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 149, 246, 0.3);
  }
`;

export default function Login() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();
    const loginData = {
      id,
      password,
    };
    fetch("/api/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "ok") {
          router.push("/");
        } else {
          alert(data.message);
          router.push("login");
        }
      });
  }
  return (
    <LoginBlock>
      <Logo>
        <Image
          alt="logo"
          src={"/logo-removebg-preview.png"}
          height={50}
          width={175}
        />
      </Logo>
      <LoginForm onSubmit={login}>
        <input
          type={"text"}
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type={"password"}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginBtn>로그인</LoginBtn>
        <div>
          <button>비밀번호 찾기</button>
          <Link href="join">회원가입</Link>
        </div>
      </LoginForm>
    </LoginBlock>
  );
}
