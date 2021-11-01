import styled from "styled-components"

export const SignUpWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width:100%;
  /* height: 100vh; */
  padding: 15px 25px;
`
export const SignUpTitle = styled.div`
  color:#1B1C1D;
  font-size: 27px;
  width:100%;
  max-width:480px;
  font-weight: 900;
  padding-top: 20px;
  margin-bottom: 50px;
`
export const SignUpListWrapper = styled.div`
  width:100%;
  max-width: 480px;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
export const SMSWrapper = styled.div`
  display:flex;
  width:100%;
  /* max-width: 380px; */
`
export const InputPhone = styled.input`
  max-width: 370px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #f8f9fb;
  border:none;
  border-radius: 5px;
  ::placeholder {
    color: #e0e0e2;
  }
`
export const SMSBtn = styled.button`
  background-color: ${(props) => !props.isAuth ? "#2bef57" : "#f8f9fb"}; 
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  margin-left: 10px;
  color: #1B1C1D;
  cursor: pointer;
`
export const SendSMSBtn = styled.button`
  background-color: #2bef57;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  margin-left: 10px;
  color: #1B1C1D;
  cursor: pointer;
`
export const InputSMS = styled.input`
  max-width: 370px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #f8f9fb;
  border:none;
  border-radius: 5px;
  ::placeholder {
    color: #e0e0e2;
  }
`
export const InputPassword = styled.input`
  max-width: 480px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #f8f9fb;
  border:none;
  border-radius: 5px;
  ::placeholder {
    color: #e0e0e2;
  }
`
export const ProfilePhoto = styled.div`
  background-color: #2bef57;
  width: 80px;
  height: 70px;
  border-radius: 5px;
  text-align: center;
  line-height: 70px;
  color: #1B1C1D;
  font-size: 24px;
  cursor: pointer;
  
`
export const ProfileWrapper = styled.div`

`
export const ProfileTitle = styled.div`
  margin-bottom: 10px;
`
export const SubmitBtn = styled.button`
  width:100%;
  max-width: 140px;
  height: 60px;
  border:none;
  border-radius: 5px;
  background-color: #2bef57;
  font-size: 18px;
  font-weight: 700;
  margin-top: 70px;
`
export const ErrorMsg = styled.div`
margin-bottom: 10px;
font-size: 12px;
height:12px;
color:red;
`
export const Image = styled.input`
  display:none;
`