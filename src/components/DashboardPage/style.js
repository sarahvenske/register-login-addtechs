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

.divHeader{
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 780px;
  justify-content: space-between;
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

.techSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-grey-0);
  width: 100vw;
  height: 600px;
}

.techBox{
  width: 90%;
  max-width: 780px;
}

.techTitle{
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-grey-0);
}

.techTitle button{
    background-color: var(--color-grey-3);
    border-radius: 4px;
    font-size: 19px;
}

.techList{
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: var(--color-grey-3);
  border-radius: 4px;
}

ul{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 95%;
  gap: 10px;
  border-radius: 4px;
}

li{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 49px;
  width: 100%;
  border-radius: 4px;
  background-color: var(--color-grey-4);
}

li:hover{
  background-color: var(--color-grey-2);
}

li h3{
  width: 65%;
  margin-left: 5px;
  font-weight: 700;
  font-size: 14px;
  color: var(--color-grey-0);

}

li div{
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center ;
  margin-right: 5px;
}

li div p{
  font-size: 10px;
  font-weight: 400;
  color: var(--color-grey-1);
}

li div button{
  display: none;
}

.divClose{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.modal{
  width: 100%;
  height: 500px;
}

@media (min-width: 400px) {
  li div button{
    display: block;
  }

  .divClose{
    width: 30%;
    justify-content: space-between;
}
}

@media (min-width: 768px)  {
  .firstSection div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.techBox{
  width: 90%;
}

li h3{
  margin-left: 12px;
}

li div{
  margin-right: 12px;
}

.divClose{
    width: 17%;
    justify-content: space-between;
}
}`

export default Container;