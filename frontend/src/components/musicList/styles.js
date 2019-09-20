import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    padding: 10px;
    
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);
`

export const ItemContainer = styled.section`
    display:flex;
    flex-direction: row;
    align-items: center;

    li {
        width: 291px;
        display:flex;
        justify-content: space-between;
        padding: 3px;
    }

`
