import styled from "styled-components"

export const MainWrapper = styled.div`
display: flex;
  align-items: center;
  width:100%;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 0;
  
`
export const List = styled.div`
padding: 20px;
  width: 200px;
  border: 1px solid #1B1C1D;
  margin: 10px;
  border-radius: 5px;
  height: 270px;
  flex-grow: 0;
  font-size: 16px;
  font-weight: 700;
  background-color: #95f7ab;
`
export const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  padding-top:15px;
  align-items: flex-start;
  justify-content: space-between;
`
export const Item = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
`