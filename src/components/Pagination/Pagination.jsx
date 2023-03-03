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
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #BAC1FF;
    `

const PaginationFill = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #E66525;
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

    const handleClicks = pages.map((p) => () => {
        r.replace({
            query: {
                page: p,
            },
        });
    });

    return (
        <PaginationDiv>
            {/* {pages.map((p) => {
                return p === Number(page) ? <PaginationFill key={p} /> : <PaginationDefault key={p} />
            })} */}
            {pages.map((p) =>
                p === Number(page) ? (
                    <PaginationFill key={p} />
                ) : (
                    <PaginationDefault key={p} onClick={handleClicks[p]} />
                )
            )}
        </PaginationDiv>
    );
}