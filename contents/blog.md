---
date: '2022-03-10'
title: 'gatsby로 블로그 & 포트폴리오 만들기 '
categories: ['Portfolio']
summary: 'React,Gatsby,GraphQL,'
thumbnail: './blog.png'
---

### 1. 소개

개발자라면 t-story나 네이버 블로그도 좋지만 자기가 만든 간단한 블로그 하나 정돈 있어야 하지 않을까!
그리고 기존에 있던 포트폴리오용 웹페이지가 너무 조잡하다 라고 생각되어 포트폴리오와 여러 지식들을 같이 보관할
블로그를 만들어보고 싶어서 만들게 된 프로젝트 입니다.

이 블로그는 기본적으로 메인 페이지와 게시글 페이지로 나누어져 있습니다.
메인페이지에선 저를 소개하는 문장과 프로필 사진이 있고
카테고리 별로 분류 해놓은 게시글들을 볼 수 있습니다.

### 2. WHY Gatsby?

기술 블로그 개발에 가장 잘맞는 프레임워크가 Gatsby라고 생각되어 Gatsby로 진행을 하였습니다. 왜냐하면
Gatsby는 정적 사이트 생성의 기능을 갖고있고 무엇보다 React 기반의 프레임워크이기 때문입니다.
그렇다면 같은 React 기반의 정적 사이트 생성의 기능을 가졌고 Gatsby보다 더 인기가 많은 Next.js를
사용하지 않은 이유가 무엇이냐?!
Next.js는 주로 서버사이드 렌더링을 위해 사용하는 프레임워크이기 때문입니다.

### 3. 느낀점

Robots.txt 파일은 검색 엔진에 어떤 페이지를 크롤링해도 되는지 알리는 파일로, 서버의 루트 디렉토리에 있어야 한다.

과도한 Robots.txt 파일은 더 많은 방문자를 유도할 수 있는 정상적인 검색 엔진 크롤러의 접근을 막을 가능성이 있기 때문에 적절하게 설정해야 한다.

---

## Source

- 깃허브 링크

  [<https://github.com/madmanforces/madmanforces.github.io>](https://github.com/madmanforces/madmanforces.github.io)
