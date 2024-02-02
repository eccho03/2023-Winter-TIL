*** 1주차 내용 정리 ***
- 자바 스크립트의 동기와 비동기
    - promise, call back
    - async & await : 직관적인 비동기 처리 코드 작성
    - API 호출
- node.js
    - nodejs 설치 및 초기 세팅
    - CLI 방식으로 node js 프로그램 실행시키는 방법
    - node.js의 common js 모듈 시스템 실행


 *** 2주차 내용 정리 ***
 - node.js 패키지 생성 및 외부 패키지 사용
    - npm start를 통해 실행
    - npx: 설치되어있지 않은 패키지를 딱 한 번만 사용하고 싶을 때
- react.js
    - 사용이유?
        - shotgun surgery 방지(중복 코드 작성 방지) ⇒ 컴포넌트화 방식
        - 명령형 프로그래밍(절차 일일이 나열)이 아닌 선언형 프로그래밍(바로 목적을 말함)
        - virtual DOM
    - state : 컴포넌트의 state가 바뀔 때 마다 re-render된다는 것을 알 수 있었다.
    - props: 컴포넌트에게 값 전달 가능

*** 3주차 내용 정리 ***
- project1 브랜치에 올리고 있음
- 사용자 입력처리(handleChangeState 함수, setState)
- spread: 기본적인 원래값 할당 (코드가 길어지면 일일이 state.(~~) 작성하기 힘듦)
- option
- 간단한 css
      - cursor: pointer; ->  버튼에 커서 올리면 손바닥 나옴

*** 4주차 내용 정리 ***
- DOM 조작 (useRef)
  - useRef를 사용하여 각 input.currunt.focus -> 글자수가 일정 미만일 때 alert 대신에 커서가 해당 구역으로 자동으로 이동함.
- 리스트 내장 함수를 사용하여 리스트 형태로 랜더링
- 랜더링 된 아이템을 별도의 컴포넌트로 분리하여 작성하는 방법을 배움
- toLocaleString을 사용하면 날짜를 알아보기 쉬운 형태로 바꿀 수 있음
- 고유한 id를 갖고 있을 경우 굳이 idx 사용하지 않기 -> 아이템 삭제, 추가로 순서 변경 시 문제가 생길 수 있기 때문임.
- it을 사용하면 원소 하나하나 순회 가능함.
