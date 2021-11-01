import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import {  useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { schemaSignUp } from "../../commons/yup.validation"
import { 
  SignUpWrapper,
  SignUpTitle,
  SignUpListWrapper,
  SMSWrapper,
  InputPhone,
  SMSBtn,
  InputPassword,
  ProfilePhoto,
  InputSMS,
  ProfileWrapper,
  ProfileTitle,
  SubmitBtn,
  ErrorMsg,
  SendSMSBtn,
  Image
} from "./signUp.styles"

const INPUTS_INIT = {
  phone: "",
  sms:"",
  password:"",
  email:""

}

const SignUpPage = ( {history} ) => {
  const fileRef = useRef(null)
  const [imgUrl, setImgUrl] = useState()
  const [files, setFiles] = useState()
  const [inputs, setInputs] = useState(INPUTS_INIT)
  const [isAuth, setIsAuth] = useState(false)
  const {register, formState, handleSubmit} = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSignUp)
  })
  const onclickBox = () => {
    fileRef.current?.click()
  }
  const onChangeFile = (e) => {
    const file = e.target.files[0]
    
    setFiles(file)
    const fileReader = new FileReader()
    if (file && file.type.match('image.*')){
      fileReader.readAsDataURL(file)
      console.log(file)
    }
    fileReader.onload = (data) => {
      setImgUrl(data.target?.result)
    }
    
  }
  const onChangeInputs = (e) => {
    setInputs(e.target.value)
    setInputs({...inputs, [e.target.name]: e.target.value })
  }
const onClickSubmit = () => {
  axios.post('http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/user/sign_up/', {
    phone_number: inputs.phone,
    password: inputs.password,
    auth_number: inputs.sms,
    email: inputs.email,
    // photo: imgUrl.toString()
    
  })
  alert("회원가입이 완료되었습니다.")
  history.push("/signIn")
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
    setIsAuth(true)
    res.statusText === "OK" ? alert("인증완료") : alert("인증실패")
    } catch (err){
      console.log(err)
    }
}
  return (
  <form onSubmit={handleSubmit(onClickSubmit)}>
    <SignUpWrapper>
    <SignUpTitle>회원가입</SignUpTitle>
      <SignUpListWrapper>
        <SMSWrapper>
          <InputPhone name="phone" placeholder="전화번호" {...register("phone")} onChange={onChangeInputs}/>
          <SendSMSBtn type="button" onClick={onClickAuth}>SMS 발송</SendSMSBtn>
        </SMSWrapper>
        <ErrorMsg>{formState.errors.phone?.message}</ErrorMsg>
        <SMSWrapper>
          <InputSMS name="sms" placeholder="승인번호"  {...register("sms")} onChange={onChangeInputs}/>
          
          { isAuth ?
            <SMSBtn type="button" isAuth={isAuth}>인증성공</SMSBtn> : <SMSBtn type="button" onClick={onClickSMS}>인증하기</SMSBtn>}
        </SMSWrapper>
        
        <ErrorMsg>{formState.errors.sms?.message}</ErrorMsg>
        <InputPassword name="email" placeholder="이메일"  {...register("email")} onChange={onChangeInputs}/>
        <ErrorMsg>{formState.errors.email?.message}</ErrorMsg>
        <InputPassword name="password" type="password" placeholder="비밀번호" {...register("password")} onChange={onChangeInputs} />
        <ErrorMsg>{formState.errors.password?.message}</ErrorMsg>
        <ProfileWrapper >
        <ProfileTitle>프로필 이미지</ProfileTitle>
          {imgUrl ? <img src={imgUrl} alt="" style={{width:80}}/> :
            <ProfilePhoto onClick={onclickBox}>+</ProfilePhoto>
          }
          
          <Image type="file" ref={fileRef} onChange={onChangeFile} accept="image/*"/>
        </ProfileWrapper>
      </SignUpListWrapper>
      <SubmitBtn type="submit">회원가입</SubmitBtn>
    </SignUpWrapper>
  </form>
  
  )
}
export default SignUpPage