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

export default function SearchBar() {
    return (
        <SearchBarBlock>
            <form>
                <input type={'text'} placeholder='search...' />
                <button>🔍</button>
            </form>
        </SearchBarBlock>
    )
}
