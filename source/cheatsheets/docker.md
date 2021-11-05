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


# Docker
## 도커 로그인
```batch
docker login -u [토큰] [주소] [비밀번호]
```
## 컨테이너 생성
Dockfile 있는 경로에서 실행
```batch
docker build -t [이미지이름] .
```
## 도커이미지 실행
Dockfile 있는 경로에서 실행
```batch
docker run -d -p [호스프포트넘버]:[컨테이너포트넘버] [이미지이름]
```
## 도커이미지 태그변경
```batch
docker image tag [원본이미지이름] [변경이미지이름]
```
## 도커이미지 Push
```batch
docker push [이미지이름]
```
## 도커이미지 Pull
```batch
docker pull [이미지이름]
```