import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { schemaPW } from "../../commons/yup.validation"
import {
  Wrapper,
  InputPhone,
  SMSbtn,
  InputSMS,
  AuthBtn,
  InputNewPW,
  ErrorMsg,
  SubmitBtn,
  SubWrapper,
  SubmitWrapper,
  Title
} from "./updatePW.styles"

const INITIAL_STATE = {
  phone:"",
  sms:"",
  password:"",
  password_2:""
}
const UpdatePW = ( { history } ) => {
const [inputs, setInputs] = useState(INITIAL_STATE)
const onChangeInputs = (e) => {
  setInputs({...inputs, [e.target.name]: e.target.value})

}

const {register, handleSubmit, formState} = useForm({
  mode: "onChange",
  resolver: yupResolver(schemaPW)
})
const onClickUpdatePW = () => {
  axios.put("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/user/reset_password/",{
    phone_number:inputs.phone,
    auth_number:inputs.sms,
    new_pw1: inputs.password,
    new_pw2: inputs.password_2
  })
  .then(() => history.push("/"))
  .catch(err => 
    console.log(err.message)
  )
}
const onClickAuth = () => {
  axios.post("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/user/auth_sms/",
  {
    phone: inputs.phone,
  })
  alert("인증번호가 발송되었습니다.")

}
const onClickSMS = async () => {
  try{
    const res = await axios.get("http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/user/auth_sms/", {
      params: {phone: inputs.phone , auth_number: inputs.sms}
    })
    res.statusText === "OK" ? alert("인증완료") : alert("인증실패")
    } catch (err){
      console.log(err)
    }
}
  return (
    <>
    <form onSubmit={handleSubmit(onClickUpdatePW)}>
      <Wrapper>
        <Title>비밀번호 변경</Title>
        <SubWrapper>
          <InputPhone name="phone" onChange={onChangeInputs} placeholder="전화번호"/>
          <SMSbtn type="button" onClick={onClickAuth}>인증번호받기</SMSbtn>
        </SubWrapper>
        <SubWrapper>
          <InputSMS name="sms" onChange={onChangeInputs} placeholder="인증번호"/>
          <AuthBtn type="button" onClick={onClickSMS}>인증하기</AuthBtn>
        </SubWrapper>
        <SubmitWrapper>
          <InputNewPW name="newPW1" {...register("password")} onChange={onChangeInputs} placeholder="새로운 비밀번호"/>
          <ErrorMsg>{formState.errors.password?.message}</ErrorMsg>
          <InputNewPW name="newPW2" {...register("password_2")} onChange={onChangeInputs} placeholder="비밀번호 확인"/>
          <ErrorMsg>{formState.errors.password_2?.message}</ErrorMsg>
          <SubmitBtn onClick={onClickUpdatePW}>변경</SubmitBtn>
        </SubmitWrapper>
      </Wrapper>
    </form>
    </>
  )
  
}
export default UpdatePW