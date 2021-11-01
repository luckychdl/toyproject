import { Card } from "antd"
import styled from "styled-components"

export const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  padding: 30px;
`
export const CardUI = styled.div `
  display: flex;
  align-items: center;
  width:100%;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 0;
  

`
export const List = styled(Card)`
  padding: 20px;
  width: 200px;
  border: 1px solid #1B1C1D;
  margin: 10px;
  border-radius: 5px;
  height: 270px;
  flex-grow: 0;
  font-size: 16px;
  font-weight: 700;
  /* background-color: black; */
  
  
`
export const Item = styled.div`
  font-size: 16px;
  font-weight: 500;
  
  align-items: center;
`
export const Wrapper = styled.div`
  display:flex;
  padding-top:15px;
  align-items: center;
  justify-content: space-between;
`
export const MainWrapper = styled.div`
  width:100%;
  height: 100vh;
  background-color: #2bef57;
  background-attachment: scroll;
  @media (max-width: 798px) {
    height: 100%;
    background-color: #2bef57;
    background-attachment: scroll;
  }
`
