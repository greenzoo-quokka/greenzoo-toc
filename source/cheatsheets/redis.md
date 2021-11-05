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

# Redis
## 전체 채널 내역 조회
```batch
pubsub channels *
```
## 전체 해쉬 조회
```batch
hgetall [채널값]
```
## 채널 구독 사용자수 조회
```batch
pubsub numsub [채널값]
```
## 접속중인 리스트 조회
```batch
client list
```
## 기타 명령어
::: details 명령어 자세히보기
```batch
INFO : 레디스 버전과 운영체제, 연결된 클라이언트, 메모리 사용량, 저장소, 복제본, 키 스페이스에 대한 정보를 포함한 모든 레디스 서버 통계를 리턴한다.
기본적으로 INFO 커맨드는 사용할 수 있는 모든 섹션을 보여준다.
매개변수로 섹션 이름을 명세헤 결과를 제한할 수도 있다. (memory, cpu 등)

CONFIG : 레디스 설정을 보여준다
사용법 : https://redis.io/commands/config-get

DBSIZE : 레디스 서버에 존재하는 키 개수를 리턴한다.

DEBUG SEGFAULT : 올바르지 않은 메모리 접근을 수행해 레디스 서버 프로세스를 종료한다.
애플리케이션 개발 중 버그를 시뮬레이션 할 때 유용하다.

MONITOR : 레디스 서버가 처리하는 모든 커맨드를 실시간으로 보여준다.

CLIENT LIST : 클라이언트에 대한 관련 정보와 통계뿐 아니라 서버에 연결된 모든 클라이언트 목록을 리턴한다.

CLIENT SETNAME : 클라이언트의 이름을 변경한다.

CLIENT KILL : 클라이언트의 연결을 종료한다. IP나 포트 iD 타입으로 클라이언트 연결을 종료할 수 있다.

FLUSHALL : 레디스의 모든 키를 삭제한다. 삭제한 키는 다시 복구할 수 없다.

RANDOMKEY : 존재하는 키 중 무작위로 선택한 하나의 키 이름을 리턴한다.

EXIRE : 특정 키의 타임아웃을 초 단위로 설정한다.

EXPIREAT : 유닉스 타임스탬프를 기반으로 특정 키의 타임아웃을 설정한다.

TTL : 타임아웃 값이 있는 키의 남아 있는 생존시간을 초 단위로 리턴한다.

PTTL : TTL과 같지만 단위가 밀리 초이다.

PERSIST : 특정 키에 주어진 현존 타임아웃을 제거한다.

SETEX : 특정 키에 값을 저장할때 만료 시간도 함께 원자적으로 설정한다.

DEL : 하나 이상의 키를 레디스에서 삭제한다.

EXISTS : 특정 키가 존재하면 1을, 존재하지 않으면 0을 리턴한다.

PING : PONG 문자열을 리턴한다. 레디스가 데이터를 교환할 수 있는 상태인지를 확인할 때 유용하다.

MIGRATE : 특정 키를 대상 레디스 서버로 옮긴다. 키를 저장할 레디스 서버에 키가 존재한다면 실패한다.

SELECT : 클라이언트가 연결된 현재의 데이터베이스를 변경한다. (레디스는 기본적으로 다중 데이터베이스이다.)

AUTH : 레디스에 연결할 수 있는 클라이언트를 허가(authorization)하는 데 사용된다.

SCRIPT KILL : 루아 스크립트 실행을 종료한다.

SHUTDOWN : 모든 클라이언트를 종료하고, 최대한 데이터를 저장하려고 한 후 레디스 서버를 종료한다.

SAVE, NOSAVE 두개의 매개변수 중 하나를 받는다.

OBJECT ENCODING : 주어진 키에서 사용중인 인코딩 값을 리턴한다.

```
:::