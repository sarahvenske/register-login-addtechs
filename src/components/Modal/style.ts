import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(18, 18, 20, 0.7);
    margin-top: 10px;

    .modalComponentBox{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    @media (max-height: 530px) {
        .modalComponentBox{
            overflow-y: scroll;
        }
    }

    @media (min-width: 768px) {
        margin-top: 50px;
    }
`;

export default Container;