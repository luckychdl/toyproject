import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { schemaPW } from "../../commons/yup.validation"

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
  history.push("/")
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
console.log(inputs)
  return (
    <>
    <form onSubmit={handleSubmit(onClickUpdatePW)}>
      <div style={{display:"flex", flexDirection:"column"}}>
      <input name="phone" onChange={onChangeInputs}/>
      <button type="button" onClick={onClickAuth}>인증번호받기</button>
      <input name="sms" onChange={onChangeInputs}/>
      <button type="button" onClick={onClickSMS}>인증하기</button>
      <input name="newPW1" {...register("password")} onChange={onChangeInputs}/>
      <div>{formState.errors.password?.message}</div>
      <input name="newPW2" {...register("password_2")} onChange={onChangeInputs}/>
      <div>{formState.errors.password_2?.message}</div>
      <button onClick={onClickUpdatePW}>변경</button>
      </div>
    </form>
    </>
  )
  
}
export default UpdatePW