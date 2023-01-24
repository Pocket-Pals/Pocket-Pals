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
    if (page === '0') {
        return <PaginationDiv>
            <PaginationFill />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
        </PaginationDiv>
    }
    if (page === '1') {
        return <PaginationDiv>
            <PaginationDefault />
            <PaginationFill />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
        </PaginationDiv>
    }
    if (page === '2') {
        return <PaginationDiv>
            <PaginationDefault />
            <PaginationFill />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
        </PaginationDiv>
    }
    if (page === '3') {
        return <PaginationDiv>
            <PaginationDefault />
            <PaginationDefault />
            <PaginationFill />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
        </PaginationDiv>

    }
    if (page === '4') {
        return <PaginationDiv>
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationFill />
            <PaginationDefault />
            <PaginationDefault />
        </PaginationDiv>

    }
    if (page === '5') {
        return <PaginationDiv>
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationFill />
            <PaginationDefault />
        </PaginationDiv>
    }
    if (page === '6') {
        return <></>
    }
    else {
        return <PaginationDiv>
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationDefault />
            <PaginationFill />
        </PaginationDiv>
    }
}