import styled from 'styled-components';

export const Form = styled.form`
/* max-width: 400px; */
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  
`;

export const Button = styled.button`
  font-size: 20px;
  margin-right: auto;
  margin: 20px auto;
  margin-bottom: 20px;
  width: 200px;
  height: 32px;
  padding: 20px auto;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  &:hover {
    background-color: blue;
    color: #fff;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  /* margin-bottom: 10px; */
`;

export const Input = styled.input`
/* display:block; */
  width: 368px;
  margin-left: auto;
  margin-right: auto;
  /* height: 32px; */
  border-radius: 4px;
  font-size: 20px;
  /* margin-bottom: 10px; */
  padding: 6px 16px 6px;

`;