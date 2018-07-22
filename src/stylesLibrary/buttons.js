import styled from 'styled-components';

export const TransparentNavBtn = styled.div`
    border: 1px solid #fff;
    width: 100px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    :hover {
        background: black;
    }
`;


export const BtnsAggregation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 300px;
    position: absolute;
    bottom: 30px;

`;