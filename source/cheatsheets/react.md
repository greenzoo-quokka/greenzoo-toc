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

## 프로젝트 실행
```batch
react-native run-android
```

## 안드로이드 디바이스 재연결시
```batch
adb reverse tcp:8081 tcp:8081
```

