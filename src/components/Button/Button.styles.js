import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({variant}) => variant==='outline' ? '#FFF' : '#4caf50'};
  border: 2px solid #4caf50;
  color: ${({variant}) => variant==='outline' ? '#4caf50' : '#FFF'};;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`