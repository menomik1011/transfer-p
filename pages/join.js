import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const JoinBlock = styled.div`
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

const JoinForm = styled.form`
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
    justify-content: flex-end;
    a {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.6);
      background-color: transparent;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
  h3 {
    text-align: center;
  }
`;

const JoinBtn = styled.button`
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

export default function Join() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  function join(e) {
    e.preventDefault();
    const JoinData = {
      id,
    };
    if (password === passwordCheck) {
      fetch("/api/join", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(JoinData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.state === 500) {
            alert(data.messege);
            router.push("/join");
          } else {
            alert(data.messege);
            router.push("/login");
          }
        });
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      router.push("/join");
    }
  }
  return (
    <JoinBlock>
      <Logo>
        <Image
          alt="logo"
          src={"/logo-removebg-preview.png"}
          height={50}
          width={175}
        />
      </Logo>
      <JoinForm onSubmit={join}>
        <h3>회원가입</h3>
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
        <input
          type={"password"}
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <JoinBtn>가입하기</JoinBtn>
        <div>
          <Link href="/login">로그인</Link>
        </div>
      </JoinForm>
    </JoinBlock>
  );
}
