import styled from 'styled-components';
import { useRouter } from 'next/router';

const PaginationDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 20px;
    `

const PaginationDefault = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #E4E4E4;
    `

const PaginationFill = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: purple;
    `

export default function Pagination() {
    const r = useRouter();
    let { page } = r.query;
    if (page === undefined) {
        page = 0;
    }
    let pages = [];
    for (let i = 0; i < 6; i++) {
        pages.push(i);
    }

    return (
        <PaginationDiv>
            {pages.map((p) => {
                return p === Number(page) ? <PaginationFill key={p} /> : <PaginationDefault key={p} />
            })}
        </PaginationDiv>
    );
}