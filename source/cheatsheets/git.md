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

# GIT

## 초기프로젝트 생성
```batch
-- 디렉토리 생성
mkdir [projectname]

-- 해당프로젝트로 이동
cd [projectname]

-- 1. Git init
git init

-- 2. 사용자 이름 설정
git config --local user.name greenzoo.quokka

-- 3. 사용자 이메일 확인
git config --local user.email greenzoo.quokka@gmail.com

-- 4. Remote 연결
git remote add origin ~.git

-- 5. Git Commit and Merge
git commit -am "Init Project"

-- 6. Push
git push -u origin master
```

## 초기화 및 Pull
```batch
-- 디렉토리 생성
mkdir [projectname]

-- 해당프로젝트로 이동
cd [projectname]

-- Git init
git init

-- Git Pull 주소
git pull ~~.git
```

## Commit And Push
```batch
-- Git Commit 
git commit -am "message"

-- Git Master 로 Push 
git push origin master
```

## 강제 Pull
```batch
-- Git HEAD로 리셋
git reset --hard HEAD

-- Git Pull하여 마스터로 리셋
git pull origin master
```

## login 관련
```batch
-- 사용자 이름 확인
git config [--global] user.name

-- 사용자 이메일 확인
git config [--global] user.email

-- 사용자 이름 설정
git config [--global] user.name greenzoo.quokka

-- 사용자 이메일 확인
git config [--global] user.email greenzoo.quokka@gmail.com
```