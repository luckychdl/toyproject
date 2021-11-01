import { useState } from "react"
import { useForm } from "react-hook-form"
import { schemaLogin } from "../../commons/yup.validation"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  SignInMain,
  InputId,
  InputPassword,
  Logo,
  LogIn,
  InputWrapper,
  LogInBtn,
  SignUpBtn,
  FindPassword,
  SubWrapper,
  ErrorMessage
} from "./signIn.styles"
import axios from "axios"


const SignInPage = ({history}) => {
  const {register, handleSubmit, formState} = useForm({
    mode:"onChange",
    resolver:yupResolver(schemaLogin)
  })
  const [loginId, setLoginId] = useState("")
  const [password, setPassword] = useState("")
  const onChangeId = (e) => {
    setLoginId(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onclickMoveSignUp = () => {
    history.push("/signUp")
  }
  const onClickMovePW = () => {
    history.push("/updatePW")
  }
  const getToken = () => {
    axios.post("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/user/token/", {
      phone_number: loginId ,
      password: password
    })
    history.push("/main")
  }
  return (
    <form onSubmit={handleSubmit(getToken)}>
    <SignInMain>
      <Logo src="https://butfitseoul.com/static/butfit/img/logo.png" />
      <InputWrapper>
        <LogIn>로그인</LogIn>
        <InputId placeholder="전화번호" 
        {...register("phone")}
        onChange={onChangeId}
        />
        <ErrorMessage>{formState.errors.phone?.message}</ErrorMessage>
        <InputPassword placeholder="비밀번호" 
        type="password"
        {...register("password")}
        onChange={onChangePassword}
        />
        <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
        <LogInBtn isActive={formState.isValid}>로그인</LogInBtn>
      
      <SubWrapper>
        <SignUpBtn type="button" onClick={onclickMoveSignUp}>회원가입</SignUpBtn>
        <div>|</div>
        <FindPassword type="button" onClick={onClickMovePW}>비밀번호 찾기</FindPassword>
      </SubWrapper>
      </InputWrapper>
    </SignInMain>
    </form>

  )
}
export default SignInPage