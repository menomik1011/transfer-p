import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../context/auth';

const Navblock = styled.nav`
    padding: 16px;
`

export default function Nav() {
    const auth = useAuth();
    if (auth.user === "") return null;
    return (
        <Navblock>
            <ul>
                <li><Link href={"/dashboard"}>Dashboard</Link></li>
            </ul>
        </Navblock>
    )
}
