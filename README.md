# 원티드 프리온보딩 사전과제 - Todo App 📖

## ✨소개
사전과제로 진행한 간단한 투두리스트입니다. 기본적인 회원기능과 할 일 CRUD 기능이 구현되어있습니다.

## 📷시연
<img src="https://user-images.githubusercontent.com/23312485/210824069-5f83aca8-0bc3-4650-9534-8c2f883219f7.gif" width="300px" />

## 실행 방법
```bash
  cd frontend
  yarn
  yarn dev
```

## 🔍사용 스택
- React
- Typescript
- vite
- React-query
- emotion
  
## 🤔개발하면서 느낀점
- 스낵바 구현
스낵바를 처음으로 구현해보았습니다. index.html에 id가 'snackbar'인 div 엘리먼트를 추가 후 createPortal로 Portal을 생성해서 스낵바를 구현했습니다.   
Context API를 활용하여 `SnackBarContext`를 만들고, `useSnackBar`라는 custom hook을 만들어 context를 사용할 수 있도록 했습니다. [d17280f](https://github.com/kangju2000/wanted-pre-onboarding-challenge-fe-1/commit/d17280f593277300c00273e53a53d78a0dfa2824)

- React-query 라이브러리를 사용해보았는데, 기억이 잘 나지않아 문서와 예전에 짰던 코드들을 다시 찾아가며 새로 배우는 느낌으로 작성했습니다. 그리고 lint 설정하는 법을 이번 과제를 통해 조금 익숙해질 수 있었습니다.   
요청에 에러가 났을 때 스낵바를 띄워주는 것을 디폴트로 하고 싶어서 queryClient의 setDefaultOptions 메서드를 사용해서 onError 디폴트를 구현했습니다.  [5213ed6](https://github.com/kangju2000/wanted-pre-onboarding-challenge-fe-1/commit/5213ed65fd4fe84414743a9b0fc88c0f1090578c)
