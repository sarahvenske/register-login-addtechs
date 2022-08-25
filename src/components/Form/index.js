import styled from "styled-components";

const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: fit-content;
    max-height: fit-content;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px; 
    margin-top: 15px;

  .formContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;    
    width: 90%;
    height: fit-content;
    margin: 30px 0px 30px 0px;
    gap: 15px;
  }
  
  .formContainer h3{
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }

  .formContainer label{
    text-align: start;
    font-weight: 400;
    font-size: 12px;
  }

  .formContainer input{
    width: 100%;
    height: 42px;
    text-align: start;
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-0);
    font-size: 16px;
    background-color: var(--color-grey-2);
    border: 1.2px solid var(--color-grey-2);
    border-radius: 4px;
  }

  .formContainer div{
    color: var(--color-grey-1);
    font-weight: 600;
    font-size: 12px;
    text-align: center;
  }

  .formContainer p{
    color: var(--color-negative);
    font-weight: 600;
    font-size: 12px;
  }

  button{
    width: 100%;
    height: 43px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 23px;
    gap: 10px;
    text-decoration: none;
    cursor: pointer;
  }

  .formContainer .login{
    font-weight: 500;
    font-size: 16px;
    color: var(--color-white);
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
  }

  .formContainer .login:hover{
    background-color: var(--color-primary-focus);
    border: 1px solid var(--color-primary-focus);
  }


  .formContainer .register{
    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);
    background-color: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
  }

  .formContainer .register:hover{
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }

  select{
    width: 100%;
    height: 42px;
    text-align: start;
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-0);
    font-weight: 400;
    font-size: 14px;
    background-color: var(--color-grey-2);
    border: 1.2px solid var(--color-grey-2);
    border-radius: 4px;
  }

  @media (min-width: 425px) {
    width: 369px ;
  }`;

export default Form;
