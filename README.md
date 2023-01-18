# 원티드 프리온보딩 사전과제 - Todo App 📖

## ✨소개

사전과제로 진행한 간단한 투두리스트입니다. 기본적인 회원기능과 할 일 CRUD 기능이 구현되어있습니다.

## 📷시연

<img src="https://user-images.githubusercontent.com/23312485/210824069-5f83aca8-0bc3-4650-9534-8c2f883219f7.gif" width="300px" />

## 실행 방법

```bash
  git clone https://github.com/kangju2000/wanted-pre-onboarding-challenge-fe-1
  cd frontend
  yarn setting
  yarn dev
```

## 🔍사용 스택

- React
- Typescript
- vite
- React-query
- emotion

## 구현 요구 사항

- 로그인 / 회원가입 기능 개발

  - /auth 경로에 로그인 / 회원가입 기능 개발
    - [x] 최소한 이메일, 비밀번호 input, 제출 button 구성
  - 이메일, 비밀번호 유효성 검사
    - [x] 이메일 조건: 최소 `@`,`.` 포함
    - [x] 비밀번호 조건: 8자 이상 입력
    - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화
  - 로그인 API
    - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장
    - [x] 토큰이 존재할 때 로그인/회원가입 페이지 접근 시 todos 페이지로 리다이렉트
    - [x] 토큰이 존재하지 않을 때 todos 페이지 접근 시 로그인 페이지로 리다이렉트

- todos 페이지
  - Todo List API를 호출하여 CRUD 기능 구현
    - [x] 목록 / 상세 영역으로 나누어 구현
    - [x] Todo 목록을 볼 수 있음
    - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됨
    - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있음
    - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있음
  - 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인 가능하도록 구현
    - [ ] 새로고침 했을 때 현재 상태 유지되어야 함
    - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있어야 함
  - 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영


## 🤔개발하면서 느낀점

- 스낵바 구현
  스낵바를 처음으로 구현해보았습니다. index.html에 id가 'snackbar'인 div 엘리먼트를 추가 후 createPortal로 Portal을 생성해서 스낵바를 구현했습니다.  
  Context API를 활용하여 `SnackBarContext`를 만들고, `useSnackBar`라는 custom hook을 만들어 context를 사용할 수 있도록 했습니다. [d17280f](https://github.com/kangju2000/wanted-pre-onboarding-challenge-fe-1/commit/d17280f593277300c00273e53a53d78a0dfa2824)

- React-query 라이브러리를 사용해보았는데, 기억이 잘 나지않아 문서와 예전에 짰던 코드들을 다시 찾아가며 새로 배우는 느낌으로 작성했습니다. 그리고 lint 설정하는 법을 이번 과제를 통해 조금 익숙해질 수 있었습니다.  
  요청에 에러가 났을 때 스낵바를 띄워주는 것을 디폴트로 하고 싶어서 queryClient의 setDefaultOptions 메서드를 사용해서 onError 디폴트를 구현했습니다. [5213ed6](https://github.com/kangju2000/wanted-pre-onboarding-challenge-fe-1/commit/5213ed65fd4fe84414743a9b0fc88c0f1090578c)
