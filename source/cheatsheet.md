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

# Cheat Sheet 란?
- 치트 시트 또는 유아용 시트는 빠른 참조를 위해 사용되는 간결한 메모 세트입니다. 
- 치트 시트는 역사적으로 강사나 교사가 알지 못하는 학생이 시험이나 시험에서 부정 행위를 하는 데 사용되었습니다.

## GIT

### 초기화 및 Pull
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

### Commit And Push
```batch
-- Git Commit 
git commit -am "message"

-- Git Master 로 Push 
git push origin master
```

### 강제 Pull
```batch
-- Git HEAD로 리셋
git reset --hard HEAD

-- Git Pull하여 마스터로 리셋
git pull origin master
```

### login 관련
```batch
-- 사용자 이름 확인
git config user.name

-- 사용자 이메일 확인
git config user.email

-- 사용자 이름 설정
git config user.name greenzoo.quokka

-- 사용자 이메일 확인
git config user.email greenzoo.quokka@gmail.com
```

## SQL
### SELECT
```SQL
SELECT 컬럼1, 컬럼2, ... FROM 테이블명;
```
### INSERT
```SQL
INSERT INTO [테이블명] (컬럼1, 컬럼2, ...) VALUES(값1, 값2, ...);
```
### UPDATE
```SQL
UPDATE 테이블명 SET 수정하고 싶은 컬럼명 = '수정하고 싶은 값' WHERE 특정 컬럼 = '값';
```
### DELETE
```SQL
DELETE FROM 테이블명 WHERE 특정 컬럼 = '값';
```

## Docker
### 도커 로그인
```batch
docker login -u [토큰] [주소] [비밀번호]
```
### 컨테이너 생성
Dockfile 있는 경로에서 실행
```batch
docker build -t [이미지이름] .
```
### 도커이미지 실행
Dockfile 있는 경로에서 실행
```batch
docker run -d -p [호스프포트넘버]:[컨테이너포트넘버] [이미지이름]
```
### 도커이미지 태그변경
```batch
docker image tag [원본이미지이름] [변경이미지이름]
```
### 도커이미지 Push
```batch
docker push [이미지이름]
```
### 도커이미지 Pull
```batch
docker pull [이미지이름]
```

## Kubernetes
### EXTERNAL-IP 확인
Service가 pending 상태에서 생성이 완료되면 EXTERNAL-IP를 확인합니다.
```batch
kubectl --kubeconfig=%KUBE_CONFIG% get service -n ingress-nginx
```
### Pod/Service 생성 및 확인
```batch
kubectl --kubeconfig=%KUBE_CONFIG% create -f *.yaml
kubectl --kubeconfig=%KUBE_CONFIG% get pods 
kubectl --kubeconfig=%KUBE_CONFIG% get svc
```
### 해당 Pods 접속
```batch
kubectl --kubeconfig=%KUBE_CONFIG% get pods 
kubectl --kubeconfig=%KUBE_CONFIG% exec -ti [POD-ID] sh
```

## Nodejs
### Linux Node 버전 꼬였을때
```batch
sudo rm -rf /usr/local/lib/node_modules/
sudo npm cache clean --force
sudo npm install -g n
sudo n 14.16.1
```

## Redis
### 전체 채널 내역 조회
```batch
pubsub channels *
```
### 전체 해쉬 조회
```batch
hgetall [채널값]
```
### 채널 구독 사용자수 조회
```batch
pubsub numsub [채널값]
```
### 접속중인 리스트 조회
```batch
client list
```
### 기타 명령어
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

## 리눅스 / 도스명령어
|요약|LINUX|DOS
|------|---|---|
|list 보기|ls<br>df -h<br>du -skh ./*<br>du -h --max-depth=1|dir|
|디렉토리 생성|mkdir|md|
|디렉토리 삭제|rmdir|rd|
|디렉토리 트리| |tree|
|파일 삭제|rm|del|
|파일 복사|cp|copy|
|파일 이동|mv|move|
|이름 변경|mv|rename|
|change directory|cd|cd|
|현재 디렉토리 표시|pwd|cd|
|화면 정리|clear|cls|
|명령어 해석기|sh, csh, bash|command.com|
|파일 내용 표시|cat|type|
|도움말, 메뉴얼|man, help|help/?|
|쉘 종료, 도스창 종료|exit|exit|
|시간 표시|date|time|
|그대로 출력|echo|echo|
|환경변수 표시|set, env|set|
|경로 보기|echo $PATH|path|
|버전 정보|uname -a|ver|
|파일 찾기|find|find|
|파일 안의 문자열 찾기|grep|findstr|
|긴 화면 페이지 단위 출력|more|more|
|2개 파일 내용 비교|diff|fc, comp|
|라인 에디터|ed|edlin|
|문자열, 라인별 정렬|sort|sort|
|하위 디렉토리까지 복사|cp -R|xcopy file|
|속성표시|lsattr<br>chmod|attrib|
|현재 경로를 저장후 이동|pushd|pushd|
|pushd로 저장한 경로로 이동|popd|pupd|
|파일 감추기|mv file .file|attrib + h or -h|
|압축|tar, zip|pkzip|
|프로세스 정보|ps, top|taskmgr|
|컴퓨터 호스트명|hostname|hostname|
|스케줄링|at, cron|at|
|프로세스 종료|kill, killall|tskill|
|시스템종료|shutdown, halt, init0|shutdown|
|ip표시, interface 표시, 설정|ifconfig|ipconfig|
|fdisk|fdisk|fdisk|
|디스크검사|fsck|chkdsk|
|free memory 보기|free, top|mem|
|scandisk|fsck, debugfs|scandisk| 
|파일인쇄|lpr|print|
|프린트 큐 보기|lpq|print|

