import styled from "styled-components";

export const Item = styled.li`
font-size: 20px;
margin-bottom: 16px;
margin-top: 16px;
display: flex;
justify-content: space-between
`


export const ItemBtn = styled.button`
font-size: 20px;
margin-left: 24px;
border-radius: 4px;
border: none;
cursor: pointer;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  &:hover {
    background-color: blue;
    color: #fff;
  }
`