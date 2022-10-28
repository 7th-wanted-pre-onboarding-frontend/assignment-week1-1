# 원티드 프리온보딩 1-1 1팀

## 배포 링크

# 팀 소개

| 이름         | github                         |
| ------------ | ------------------------------ |
| 박승민(팀장) | https://github.com/pmb087      |
| 김정현       | https://github.com/task11      |
| 김준호       | https://github.com/kimjuno97   |
| 노희정       | https://github.com/imhjnoh     |
| 오샛별       | https://github.com/saetbyeoloh |
| 윤태성       | https://github.com/taesung1993 |
| 임형섭       | https://github.com/4hsnim      |
| 조서연       | https://github.com/sycho09     |

# 기술 스택

<img src="https://img.shields.io/badge/javascript_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

# 실행 방법

```bash
npm install
npm run start
```

# 디렉토리 구조

```
📦 src
┣ 📂 components /- 하위 컴포넌트
┣ 📂 pages /- 페이지 컴포넌트
┣ 📂 styles /- common 스타일 관련 코드
┃ ┗ 📜 GlobalStyle.js /- reset.css를 포함한 글로벌 스타일
┣ 📂 ui /- styled-components로만 구성된 컴포넌트
┣ 📂 utils /- 로직 분리
┃ ┗ 📂 hooks /- Custom Hooks
┃ ┃ ┗ 📜 useLogged.js
┃ ┗ 📜 Constants.js /- 글로벌 상수
┃ ┗ 📜 CustomAxios.js /- 커스텀 Axios 인터셉터
┃ ┗ 📜 Auth.service.js /- 로그인 관련 API 서비스
┃ ┗ 📜 Todo.service.js /- 투두 관련 API 서비스
┃ ┗ 📜 LocalStorage.service.js /- 로컬 스토리지 관련 API 서비스
┣ 📜 Router.js /- 라우터 관리 컴포넌트
┣ 📜 ProtectedRouter.js /- Protected 라우터 컴포넌트
┣ 📜 PublicRouter.js /- Public 라우터 컴포넌트
┣ 📜 App.js
┗ 📜 index.js
```

# 동료학습

## Projects

Github Projects와 Issue 기반의 협업 방식을 채택하였습니다.

1. Github Projects 를 이용하여 task 생성 및 담당자 할당
2. 해당 task 로 Issue 생성
3. 해당 Issue로부터 브랜치를 생성하여 작업
4. PR은 4명 이상으로부터 approved 되어야 merge 가능
   https://github.com/orgs/7th-wanted-pre-onboarding-frontend/projects/1

> ### 코드 및 커밋 컨벤션은 Git Hooks와 husky를 사용해 자동화했습니다.

## Code Convention

- [prettier](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.prettierrc.json)
- [eslint](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.eslintrc.js)

## Commit Convention

### commitlint

- 사용 이유: 팀의 생산성 향상과 커밋 메세지 히스토리의 관리를 위해 통일성이 필요하다고 판단하였기 때문에 사용하였습니다.
- [Commitlint 문서](https://commitlint.js.org/#/)를 참고하여 설정하였습니다.
- 구성요소
  <img width="689" alt="2022-10-28_08 33 50" src="https://user-images.githubusercontent.com/56210700/198418936-4d3fc67a-7bf2-40b5-bf80-421d235c4621.png">

# best practice 토론 과정

- [Organization](https://github.com/7th-wanted-pre-onboarding-frontend)을 만들어 [Discussion](https://github.com/orgs/7th-wanted-pre-onboarding-frontend/discussions/categories/-b-1-1-assignments)을 이용하여 서로의 의견을 공유하여 best practice를 도출하였습니다.

# best practice 선정 이유

## 1. 로그인 유효성 체크

입력한 값을 trim으로 양쪽의 공백을 제거해주고, useMemo를 이용한 방법으로 에러 처리와 회원가입 및 로그인이 가능한지의 유효성 체크를 구현한다.

- 로그인 / 회원가입 유효성 체크
- 로그인 / 회원가입 폼 컴포넌트 작업
- trim을 이용한 공백제거 처리

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/0e1b6e8b1ccad489a2e2957dfd7688c4d930bdd1/src/pages/SignIn.js#L70-L89

## 2. 로그인 / 회원가입 처리

- Axios 인터셉터를 이용
- Auth 서비스를 따로 만들어 생성한 Axios 인터셉터와 같이 사용

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/0e1b6e8b1ccad489a2e2957dfd7688c4d930bdd1/src/utils/CustomAxios.js#L8-L15

- 로그인 및 회원가입 시, 토큰 값과 만료시간을 처리
- 토큰이 만료되는 것을 체킹하여, 만료되었으면 로그아웃 처리(자동로그아웃 1)
- 로그인이나 회원가입 성공 시, setTimeout의 딜레이에 토큰 만료시간을 넣어서 로그아웃 처리(자동 로그아웃 2)

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/0e1b6e8b1ccad489a2e2957dfd7688c4d930bdd1/src/utils/Auth.service.js#L4-L34

## 3. 리다이렉팅

- useLogged를 이용한 커스텀 훅과 이를 PublicRouter, ProtectedRouter 컴포넌트를 생성하여 Page에 녹인 후 사용

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/0e1b6e8b1ccad489a2e2957dfd7688c4d930bdd1/src/PublicRouter.js#L5-L13

## 4. To do List

- 맞춤 생성한 Custom Axios를 불러와서 같이 만든 Todo 서비스를 따로 만들어 사용

https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/0e1b6e8b1ccad489a2e2957dfd7688c4d930bdd1/src/utils/CustomAxios.js#L8-L15

# 사용 라이브러리

### production

- axios
- styled-components
- styled-reset

### dev

- commitlint
- eslint
- prettier
- husky
