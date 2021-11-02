import { Card } from "antd"
import styled from "styled-components"

export const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  padding: 50px 0 15px 0;
`
export const Answer = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 20px;
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
  background-color: #95f7ab;
  
  
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background-color: #d4fbdd;
  background-attachment: scroll;
  @media (max-width: 380px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #d4fbdd;
    background-attachment: scroll;
  }
`
export const SubmitBtn = styled.button`
  background-color: black;
  font-weight: 700;
  color: #FFFFFF;
  border:none;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
`