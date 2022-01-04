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
# DB설정(AWS RDS 기준)
## 1. DB 선택
- 가격, Amazon Aurora(오로라) 교체 용이성
- Aurora : AWS에서 MySQL과 PostgreSQL을 클라우드기반에 맞게 재구성한 데이터베이스
- 퍼블릭 액세스 기능 Yes -> 향후 특정 IP만 접근가능하도록 통제

## 2. 파라미터설정
- 타임존 : Asia/Seoul
- Character Set -> character ~ : utf8mb4, collation ~ : utf8mb4_general_ci
- Max Connection : 150
- DB 서버 재부팅
- show variables like 'c%'
- select @@time_zone, now();
```
ALTER DATABASE 데이터베이스명
CHARACTER SET = 'utf8mb4'
COLLATE = 'utf8mb4_general_ci';
```

## 3. 보안그룹
- RDS 보안 그룹, 본인 IP 추가

## 4. VM에서 접속 확인
- sudo yum install mysql
- mysql -u 계정 -p -h host주소
- show databases;