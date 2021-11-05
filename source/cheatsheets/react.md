---
title: Cheat Sheet
description: 치트시트
meta:
- name: keywords
  content: 키워드
- property: og:image
  content: http://localhost:8080/logo.png
- property: og:desciption
  content: 치트시트
---

# React Native

## 개발환경설정
```batch
-- Homebrew 설치
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

-- Nodejs 설치
brew install node

-- n 패키지 설치
sudo npm install -g n
-- n stable : 안정 버전
-- n latest : 최신 버전
-- n lts : lts 버전
-- n x.x.x : 특정 x.x.x 버전
-- n ls : 설치된 node 버전들 보기
-- n rm <version> : 특정 버전 삭제

-- Nodejs 버전 변경
sudo n install [특정버전]
```

## Expo 설치
```batch
-- Expo 설치
npm install expo-cli --global
```

## 프로젝트 실행
```batch
-- expo start 와 동일
npm start
```

## 프로젝트 소스코드 구조
```
[Project]
├─ ...
├─ assets // 정적파일폴더
│  ├─ *.jpg
│  ├─ *.png
│  ├─ *.css
│  └─ ...
├─ components // 컴포넌트 모듈 폴더
│  ├─ CustomButton.js
│  ├─ *.js
│  └─ ...
└─ screens // 화면전환 모듈 폴더
   ├─ Screen1.js
   ├─ Screen2.js
   └─ ...
```