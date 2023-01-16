import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components'
import { useUser } from '../../lib/hooks';

const Navblock = styled.nav`
    padding: 16px;
    background-color: #24292e;
    ul{
        display: flex;
    }
    li{
        padding-left: 8px;
        padding-right: 8px;
        a{
            color: white;
        }
        & .link-visited{
            border-bottom: 2px solid white;
            /* color: #5c77ff; */
        }
    }
    
    
`

const menuData = [
    { id: 'menu01', name: 'Dashboard1', path: '/dashboard' },
    { id: 'menu02', name: 'Dashboard2', path: '/dashboard1' },
    { id: 'menu03', name: 'Dashboard3', path: '/dashboard2' },
    { id: 'menu04', name: 'Dashboard4', path: '/dashboard3' },
]

export default function Nav() {
    const user = useUser();
    const router = useRouter();
    if (!user) return null;
    return (
        <Navblock>
            <ul>
                {
                    menuData.map(menu => (
                        <li key={menu.id}>
                            <Link
                                href={menu.path}
                                className={menu.path === router.pathname ? 'link-visited' : ''}
                            >{menu.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </Navblock>
    )
}
