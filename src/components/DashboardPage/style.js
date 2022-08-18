import styled from "styled-components"

export const Container = styled.div`

width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 72px;
  border-bottom: 0.1px ridge var(--color-grey-0);
}

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
      border: 1px dotted var(--color-grey-2);
    }

.firstSection{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 118px;
  border-bottom: 0.1px ridge var(--color-grey-0);
}

.firstSection div{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 90%;
  height: 118px;
}

.firstSection h2{
  color: var(--color-grey-0);
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
}

.firstSection p{
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: var(--color-grey-1);
}

.secondSection{
  color: var(--color-grey-0);
  display: none;
}

@media (min-width:768px)  {

  .firstSection div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.secondSection{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 118px;
}

.secondSection div{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80%;
  height: 118px;
}

}`

export default Container;