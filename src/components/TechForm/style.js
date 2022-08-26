import styled from "styled-components";

export const Container = styled.form`

    width: 95%;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    height: 369px;

    .titleModalContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: var(--color-grey-2);
        border-radius: 4px 4px 0px 0px;
    }

    .modalTitle{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 85%;
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 14px;    
    }

    .modalTitle button{
        font-weight: 600;
        font-size: 13px;
        color: var(--color-grey-1);
    }

    .inputsModalContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 292px;
        width: 100%;
        background-color: var(--color-grey-3);
        color: var(--color-grey-0);
        border-radius: 0px 0px 4px 4px;
    }

    .modalInputs{
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: stretch;       
    }

    .modalInputs label{
        text-align: start;
        font-weight: 400;
        font-size: 12px;
    }

    .modalInputs input{
        width: 95%;
        height: 48px;
        text-align: start;
        font-weight: 400;
        font-size: 14px;
        color: var(--color-grey-1);
        font-size: 16px;
        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
        border-radius: 4px;
        padding-left: 10px;
    }

    select{
        width: 100%;
        height: 48px;
        text-align: start;
        font-weight: 400;
        font-size: 14px;
        color: var(--color-grey-1);
        font-size: 16px;
        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
        border-radius: 4px;
        margin-bottom: 10px;
    }

    .saveTechButton{
        width: 100%;
        height: 43px;
        padding: 0px 23px;
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        color: var(--color-white);
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 4px;
        cursor: pointer;
    }

    .saveTechButton:hover{
        background-color: var(--color-primary-focus);
        border: 1px solid var(--color-primary-focus);
    }

    p{
    color: var(--color-negative);
    font-weight: 600;
    font-size: 12px;
  }
    
`

export default Container;