import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../lib/hooks";

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
  useUser({ redirectTo: "/", redirectIfFound: true });
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    const loginData = {
      id,
      password,
    };
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(loginData),
      });
      if (res.status === 200) {
        router.push("/");
      } else {
        alert("????????? ?????? ??????????????? ???????????? ????????????.");
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
    }
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
          placeholder="?????????"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type={"password"}
          placeholder="????????????"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginBtn>?????????</LoginBtn>
        <div>
          <button>???????????? ??????</button>
          <Link href="join">????????????</Link>
        </div>
      </LoginForm>
    </LoginBlock>
  );
}
