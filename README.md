# 버핏서울 기술 문제: 상품 추천 시스템

### 참고 사항

- 사용할 API 문서 url - http://ec2-3-37-62-104.ap-northeast-2.compute.amazonaws.com/api/schema/swagger-ui/
- 지원하신 이메일로 해당 프로젝트를 테스트할 수 있는 Postman 워크스페이스에 초대해드렸습니다.
- 앱으로 테스트 진행 시 React-Native를 이용하여 진행해주세요.
- 웹으로 테스트 진행 시 자유롭게 진행하되, Mobile 환경도 고려해서 진행해주세요.
- Authorization에 JWT Token 입력 시 prefix로 'Bearer '를 포함해야 합니다.

### 요구 사항 명세서

웹 or 앱 기반으로 아래의 요구사항을 구현해 주세요.

1. 회원가입

   - 필수 조건
     - ID(phone_number), Password, Profile Image
     - 각 필드 예외처리
     - 휴대폰 인증
     - Password 형식 검증 ( 특수문자, 알파벳 대문자 포함 8글자 이상 )
   - API
     - 자세한 건 API 문서 URL 참고 및 포스트맨 참고
     - 휴대폰 인증 번호 전송: POST '/user/auth_sms/'
     - 휴대폰 인증 번호 확인: GET '/user/auth_sms/'
     - 회원 가입: POST '/user/sign_up/'

   ```
      ## 회원 가입
      phone_number: string;
      password: string;
      auth_number: string;
      photo: file;
   ```

2. 로그인

   - JWT 토큰을 사용하여 만료시 refresh token으로 새로운 토큰으로 발급 받으셔야 됩니다.
   - API
     - 자세한 건 API 문서 URL 참고 및 포스트맨 참고
     - 로그인 (JWT 토큰 생성): POST '/user/token/'
     - JWT 토큰 확인: POST '/user/token/verify/'
     - JWT 토큰 리프레쉬: POST '/user/token/refresh/'

3. 상품 페이지

   - 제공하는 API를 사용하여 질문/답변 형식으로 UI를 자유롭게 표현해 보세요.
   - API

     - 자세한 건 API 문서 URL 참고 및 포스트맨 참고
     - 질문 / 답변 리스트: GET '/api/tag-group/'
     - 상품 리스트: GET '/api/product/'

     ```
      질문은 /api/tag-group/에서 넘어오는 name:string 입니다.
      질문에 대한 답변들은 tags에 포함되어 있습니다.

      각 질문에서 선택한 답변의 id 값들을 저장해서
      /api/product/에 요청할 떄 [tags] 필드에 id 값을 ','를 이용하여 string 값으로 보내면 됩니다.

      ex)
      tags: '1,2,8,13'
     ```

- 최종적으로 필터링된 프로그램은 카드형식으로 보여주면 됩니다.
- 추천된 프로그램이 없다면(빈배열이 넘어온다면), UI에서 확인할 수 있도록 합니다.

```
프로그램에 대한 상세 정보는 아래 API 에서 확인 하실 수 있습니다.
상품 상세: GET '/api/product/{id}/'

{
   ...,
   name: 프로그램이름;
   use_days: 사용기간;
   pass_count: 운동 횟수;
   price: 가격;
}
```

4. 마이페이지

   - 개인 정보 변경 기능
     - 별도의 페이지 or 팝업 등등 어떤 방식이든 무관
   - API

     - 자세한 건 API 문서 URL 참고 및 포스트맨 참고
     - 정보 확인: GET '/user/info/'
     - 정소 수정: PUT '/user/info/'
     - 비밀번호 수정: '/user/update_password/'

     ```
     정보 수정 API를 통해 유저의 정보를 변경합니다.
     전화번호 필드는 수정이 불가능하도록 하고, email, photo를 변경할 수 있도록 합니다.

     비밀번호 변경은 같은 페이지에서 진행하거나 별도의 영역에서 진행하셔도 무관합니다.
     ```

5. 해당 프로젝트의 ReadMe를 작성해 주세요.

6. 완료시 main branch에 푸쉬 하시고 완료라는 제목의 @limdongkyu 를 멘션하는 이슈를 하나 등록해 주세요.
