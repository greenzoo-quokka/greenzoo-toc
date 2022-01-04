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
# Server(AWS 기준)
## 1. 서버선택
- 리눅스 > CentOS : 아직 국내자료가 리눅스가 더 많음

## 2. 보안그룹(방화벽설정)
- 보안그룹 : 방화벽설정, IP와 PORT 를 설정하여 허용
- 80 포트 : 일반 웹서비스 포트
- 8080 포트 : 일반적인 프로젝트 서비스 포트
- 22 포트 : 터미널 or  FTP 연결
- pem 키 파일 다운로드

## 3. 고정 IP 할당(Elastic IP)
- 고정IP 할당 후 VM 서버에 연결

## 4. VM 접속
### Mac & Linux
- ssh -i pem [키위치] [IP주소]
- cp pem [키받은위치] ~/.ssh/
- chmod 600 ~/.ssh/pem키이름
- vim ~/.ssh/config
- config 파일 수정
```
Host 본인이 원하는 서비스명
HostName IP주소
User 유저이름
IdentityFile ~/.ssh/pem키이름
```
- chmod 700 ~/.ssh/config

### Windows
- puttygen.exe : pem키를 ppk파일로 변환(Save private key)
- Connection - SSH - Auth - Browse

## 5. 설정
### git 설치
- sudo yum install git

### Java 8 설치
- sudo yum install -y java-1.8.0-openjdk-devel.x86_64
- sudo /usr/sbin/alternatives --config java
- 사용하지않는 자바 삭제 : sudo yum remove java-1.7.0-openjdk
- java -version

### 타임존 변경
- sudo rm /etc/localtime
- sudo ln -s /usr/share/zoneinfo/Asia/Seoul /etc/localtime
- 타임존 확인 : date

### Hostname 변경
- sudo vim /etc/sysconfig/network
- HOSTNAME 수정
- 서버 재부팅 : sudo reboot
- sudo vim /etc/hosts
- 127.0.0.1 호스트네임 등록
- curl 등록한호스트이름 -> 80 : Connection refused 메시지 확인