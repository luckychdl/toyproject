import styled from "styled-components"

export const SignInMain = styled.div`
`
export const InputId = styled.input`
  max-width: 380px;
  width: 100%;
  height: 50px;
  margin-bottom:5px;
  padding: 5px 10px;
  background-color: #f8f9fb;
  border:none;
  border-radius: 5px;
  ::placeholder {
    color: #e0e0e2;
  }
`
export const InputPassword = styled.input`
  max-width: 380px;
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: #f8f9fb;
  border:none;
  border-radius: 5px;
  ::placeholder {
    color: #e0e0e2;
  }
`
export const Logo = styled.img`
  width: 120px;
  height: 70px;
  padding: 15px 25px;
`
export const LogIn = styled.div`
  color:#1B1C1D;
  font-size: 27px;
  font-weight: 900;
  padding-top: 20px;
  margin-bottom: 50px;
`
export const LogInBtn = styled.button`
  max-width: 380px;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.isActive ? "#2bef57" : "#f8f9fb"};
  border:none;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.isActive ? "#1B1C1D" : "#bdbdbd"};
  border-radius: 5px;
  cursor: pointer;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`
export const FindPassword = styled.div`
  cursor: pointer;
`
export const SignUpBtn = styled.div`
  cursor: pointer;
`
export const SubWrapper = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  color: #9e9e9e;
`
export const ErrorMessage = styled.div`
margin-bottom: 10px;
font-size: 12px;
height:12px;
color:red;
`