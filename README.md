# React로 구현한 Pokemon_Remember_UI_v1
## 해당 프로젝트는 DRF로 작성한 api인 Pokemon_Remember_v1과 연동하는 프론트엔드이다.

api를 배포할 수 있는 Heroku가 2022/11/28에 무료서비스를 종료해서 배포는 하지 못하고, 로컬주소로 api를 연결했다.

추후에 api를 배포하면, 이 React 프로젝트에도 api 주소를 변경할 필요가 있다.

# 2023-01-31 git pages를 이용한 배포까지 완료.

문제가 발생했다.

gcp에 올린 api 서버가 http만을 지원하기 때문에 https를 지원하는 리액트에서 요청을 보낼 수가 없다!!

임시적으로 jringterm.github.io/Pokemon_Remember_UI_v1/ 에 접속해서 주소창 옆에 자물쇠버튼을 누르고, 사이트 설정에 들어가 안전하지 않은 콘텐츠를 허용해주면, api에 데이터를 요청할 수 있다.

완전히 고치려면 gcp에서 유료로 SSL 인증을 받던지, api주소로 도메인을 구매해서 Let's encrypt로 무료 인증서를 발급받던지 해야할 듯.