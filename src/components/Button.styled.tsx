import styled from "styled-components";

export const StyleBtn = styled.button`
  margin: 20px 0 0 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #4E71FE;
  height: 30px;
  width: 86px;
  font-family: inherit;
  font-size: 10px;
  font-weight: 700;
  color: #4E71FE;
  padding: 0;
  
  &:hover {
    color: ${props => props.color};
    background-color: #4E71FE;
    border: 2px solid #f1eded;
  }
  
  p {
    margin: 0;
  }
`


  //color: #4E71FE