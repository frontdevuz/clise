import styled from "styled-components";
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
export const TitleBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

`;
export const TitleRow = styled.div`
  width: 200px;
  height: 50px;
  border-right: 3px solid #3e9663;
  border-left: 3px solid #3e9663;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: #3e9663;
    color: white;
    cursor: pointer;
    transition: all .4s linear;
    p{
      color: white;
    }
  }
`;
export const TitleS = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #000;
  text-transform: capitalize;
`;
