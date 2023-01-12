import Link from 'next/link'
import React from 'react'
import { useAuth } from '../../context/auth';

export default function SignButton() {
  const auth = useAuth();
  return (
    <div style={{ marginRight: "16px" }}>
      {auth.user === "" ? (
        <Link href={"/login"}>
          <button>Sign in</button>
        </Link>
      ) : (
        <button onClick={auth.logout}>logout</button>
      )}
    </div>
  )
}
