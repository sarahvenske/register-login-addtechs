import styled from "styled-components"

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  max-width: 369px;
  margin-bottom: 20px;

    button{
    height: 25px;
    background: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    border-radius: 4px;
    color: var(--color-grey-0);
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    }

    button:hover{
      background: var(--color-grey-2);
      border: 1px solid var(--color-grey-2);
    }
`

export default Container;