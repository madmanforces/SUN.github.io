---
date: '2022-02-23'
title: 'Video Storage'
categories: ['Portfolio']
summary: 'Node.js, Express, PUG, SCSS, MongoDB, Webpack, Pug'
thumbnail: './videostorage.png'
---

### 1. 소개

자바스크립트를 공부 하던중 쇼핑몰을 만들어 보고 싶었고 그 중 회원관리 구현에 관심이 생겨서 node.js를 중점으로 연습하기 위해 진행한 프로젝트 입니다.

node.js를 기반으로 로그인/ 회원가입/ 로그아웃/ 게시물 올리기/ 게시물 삭제하기/ 게시물 수정하기 / 등 crud를 구현하였습니다.
올린 게시물을 재생할 수 있도록 플레이어를 만들고 게시물을 찾을 수 있도록 검색기능을 만들었습니다.

### 2. 느낀점

CRUD 를 구현한후 개발이란 이런 것이다. 라는 생각이 들며 매우 뿌듯했으나 client 와의 통신
을 하지 않고 뷰 엔진인 Pug 로 화면을 구현했기 때문에 약간 아쉬웠다.
비동기 방식의 세가지 방식을 골고루 사용하였음 이를 통해 콜백 지옥이란 것이 무엇인지
소소하게 나마 깨닳았고 이를 해결하기 위해 promise 라는걸 사용하고 .then()을 이용하여 여러
개의 promise 를 잇는 promise chaning 그리고 promise chaining 을 더 깔끔하게 만들어주는
async await 을 충분이 익힐 수 있었던 프로젝트 였다.
React.js 나 Vue.js 같은 JavaScript 라이브러리를 사용하여 서버와의 통신을 하는 SPA 를 만들어보고 싶다.

---

## Source

- SEO 기본 가이드

  [<https://github.com/madmanforces/Video-Storage>](https://github.com/madmanforces/Video-Storage)
