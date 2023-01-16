import Link from 'next/link'
import React from 'react'
import { useUser } from '../../lib/hooks';

export default function SignButton() {
  const user = useUser();
  return (
    <div style={{ marginRight: "16px" }}>
      {user ? (
        <Link href={"/api/logout"}><button>logout</button></Link>
      ) : (
        <Link href={"/login"}>
          <button>Sign in</button>
        </Link>
      )}
    </div>
  )
}
