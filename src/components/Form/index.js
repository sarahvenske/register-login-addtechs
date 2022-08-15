import styled from "styled-components";

const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 85%;
    height: 500px;

    background-color: var(--color-grey-3);
    color: var(--color-grey-0);

  .formContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;
    
    width: 90%;
    height: 535px;
    margin: 30px 0px 30px 0px;
    gap: 5px;

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
    font-weight: 400;
    font-size: 16px;

    background-color: var(--color-grey-2);
    border: 1.2px solid var(--color-grey-0);
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

  .formContainer .register{
    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);
    background-color: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
  }

  @media (min-width: 425px) {
    width: 369px ;
  }
`;

export default Form;
