import * as yup from "yup";

let phoneConfirm = /^[0-9]+$/;
let passwordConfirm = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
let emailConfirm = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/

export const schemaLogin = yup.object().shape({
  
  phone: yup
    .string()
    .matches(phoneConfirm, "전화번호가 올바르지 않습니다.")
    .max(11,"올바른 전화번호를 입력해주세요.")
    .required("휴대폰 인증 확인시 휴대폰 번호과 인증코드는 필수 입력 항목 입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상으로 입력해주세요.")
    .matches(passwordConfirm, "특수문자가 포함되어야 합니다.")
    .required("비밀번호를 입력해주세요."),
});

export const schemaSignUp = yup.object().shape({
  phone:yup
  .string()
  .matches(phoneConfirm, "전화번호가 올바르지 않습니다.")
  .max(11,"올바른 전화번호를 입력해주세요.")
  .required("전화번호를 입력해주세요."),
  sms: yup
  .string()
  .matches(phoneConfirm, "인증번호가 올바르지 않습니다.")
  .max(4)
  .required("휴대폰 인증 확인시 휴대폰 번호과 인증코드는 필수 입력 항목 입니다.")
  ,
  email:yup
  .string()
  .matches(emailConfirm,"이메일 형식이 올바르지 않습니다.")
  .required("이메일 주소를 입력해주세요.")
  ,
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상으로 입력해주세요.")
    .matches(passwordConfirm, "특수문자가 포함되어야 합니다.")
    .required("비밀번호를 입력해주세요."),
})

export const schemaPW = yup.object().shape({
  phone:yup
  .string()
  .matches(phoneConfirm, "전화번호가 올바르지 않습니다.")
  .max(11,"올바른 전화번호를 입력해주세요.")
  .required("전화번호를 입력해주세요."),
  sms: yup
  .string()
  .matches(phoneConfirm, "인증번호가 올바르지 않습니다.")
  .max(4)
  .required("휴대폰 인증 확인시 휴대폰 번호과 인증코드는 필수 입력 항목 입니다.")
  ,
  password:yup
  .string()
  .min(8, "비밀번호는 8자 이상으로 입력해주세요.")
  .matches(passwordConfirm, "특수문자가 포함되어야 합니다.")
  .required("비밀번호를 입력해주세요."),
  password_2:yup
  .string()
  .oneOf([yup.ref('password'), null],'비밀번호가 일지하지 않습니다.')
})