import React from 'react'
import styled from 'styled-components'

const SearchBarBlock = styled.div`
    padding: 8px 16px;
    border: 2px solid #24292e;
    input{
        padding: 4px 8px;
        font-size: 1rem;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid #24292e;
    }
    button{
        font-size: 1rem;
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
`

export default function SearchBar({fallback}) {
    console.log(fallback);
    // const list = useUserList()
    return (
        <SearchBarBlock>
            <form>
                <input type={'text'} placeholder='search...' />
                <button>🔍</button>
            </form>
        </SearchBarBlock>
    )
}


export async function getServerSideProps(){
    // const response = await fetch('http://localhost:4004/api/dashboard/user-list');
    // const response = await fetch('/api/dashboard/user-list');
    // console.log(response);
    // const data = await response.json();
    const list = await getArti

    return {
        props:{
            fallback:{
                list: data
            }
        }
    }
}