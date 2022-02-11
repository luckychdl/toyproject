import styled from "styled-components"

export const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  padding: 30px;
`
export const InputPhone = styled.input`
  height: 30px;
  width: 100%;
  margin: 10px 10px 10px 0;
  padding: 5px;
  ::placeholder {
    font-size: 12px;
  }
`
export const SMSbtn = styled.button`
height:30px;
width: 100px;
font-size: 10px;
margin: 10px 0;
background-color: #2bef57;
  border:none;
  border-radius: 5px;
  font-weight: 700;
`
export const InputSMS = styled.input`
  height: 30px;
  width: 100%;
  margin: 10px 10px 10px 0;
  padding: 5px;
  ::placeholder {
    font-size: 12px;
  }
`
export const AuthBtn = styled.button`
  height:30px;
  width: 100px;
  font-size: 10px;
  margin: 10px 0;
  background-color: #2bef57;
  border:none;
  border-radius: 5px;
  font-weight: 700;
`
export const InputNewPW = styled.input`
  height: 30px;
  padding: 5px;
  width: 100%;
  margin: 10px;
  ::placeholder {
    font-size: 12px;
  }
`
export const ErrorMsg = styled.div`
  font-size: 12px;
  color:red;
`
export const SubWrapper = styled.div`
  display:flex;
  width: 100%;
  max-width: 300px;
`
export const SubmitBtn = styled.button`
  height:30px;
  width: 100px;
  background-color: #2bef57;
  border:none;
  border-radius: 5px;
  font-weight: 700;
  margin-top: 20px;
`
export const SubmitWrapper = styled.div`
  display:flex;
  width: 100%;
  max-width: 300px;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  padding: 30px;
  font-size: 26px;
  font-weight: 700;
`