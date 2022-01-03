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
# Spring Boot 관련
## 출처 : 스프링부트와 AWS로 혼자 구현하는 웹 서비스
```
├── src/main/java/com/~~
│   ├── config : @Configuration
│   ├── domain : 개발 대상을 모든 사람이 동일한 관점에서
│   │   ├── posts
│   │   │   ├── @Entity, @Getter, @NoArgsConstructor
│   │   │   └── extends JpaRepository
│   │   ├── user
│   │   │   ├── @Entity, @Getter, @NoArgsConstructor
│   │   │   └── extends JpaRepository
│   ├── service : @Service, @RequiredArgsConstructor
│   │   ...
│   ├── web
│   │   ├── dto
│   │   │   └── ~Dto : 계층간 데이터 교환을위한 객체(화면으로 넘겨줄 객체)
│   ├── Application.java
│
│
│
...


.
├── src/main/java/com/~~
│   ├── .vuepress (Optional)
│   │   ├── components (Optional)
│   │   ├── theme (Optional)
│   │   │   └── Layout.vue
│   │   ├── public (Optional)
│   │   ├── styles (Optional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (Optional, Danger Zone)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (Optional)
│   │   └── enhanceApp.js (Optional)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

```

## 출처 : 도메인 주도 설계로 시작하는 마이크로서비스 개발
### 도메인 모델 중심의 마이크로서비스 패키지 명명 규칙
| 구분 | 패키지명 | 유형 | 명명 규칙 | 명칭 및 역할 | 작성 기능 | 
| - | - | - | - | - | - | 
| 내부 영역 | domain | 클래스 | 도메인 개념을 명확히 표현할 수 있는 명사형 | 도메인 모델: 비지니스 개념 및 로직 표현 (애그리거트, 엔티티, VO, 표준 타입 패턴으로 구현) | 애그리거트 단위 | 
| 내부 영역 | service | 인터페이스 | ~Service | 서비스 인터페이스: 서비스 퍼사드 역할 | 애그리거트당 1개 | 
| 내부 영역 | service | 클레스 | ~ServiceImpl | 서비스 구현체: 업무 처리 흐름 구현 | 서비스 인터페이스당 1개 | 
| 내부 영역 | respoitory | 인터페이스 | ~Repository | 리포지토리: 저장소 처리 | 엔티티당 1개 | 
| 외부 영역 | web.rest | 클래스 | ~Resource | REST 컨트롤러: REST API 발행, 인바운드 요청 처리 | | 
| 외부 영역 | adaptor | 클래스 | ~Client | REST 클라이언트: 동기 아웃바운드 처리, 다른 서비스를 동기 방식으로 호출 | 호출할 타 서비스당 1개 | 
| 외부 영역 | adaptor | 클래스 | ~Consumer | 컨슈머 어댑터: 비동기 메시지 인바운드 수신처리 | | 
| 외부 영역 | adaptor | 인터페이스 | ~Producer | 비동기 메시지 인터페이스 : 비동기 아웃바운드 메시지 전송을 정의하는 인터페이스 | 호출할 타 서비스당 1개 | 
| 외부 영역 | adaptor | 클래스 | ~ProducerImpl | 비동기 메시지 구현체: 비동기 아웃바운드 메시지 전송을 구현 | Producer에 의존 | 
| 외부 영역 | dto | 클래스 | ~DTO | 데이터 전송 객체: 동기 호출 시 데이터 전송 객체로 사용 | API에 의존 |

### 트랜잭션 스크립트 패턴의 마이크로서비스 패키지 명명 규칙
| 구분 | 패키지명 | 유형 | 명명 규칙 | 명칭 및 역할 | 작성 기능 |
| - | - | - | - | - | - |
| 내부 영역 | domain | 클래스 | 명사형 | 마이바티스 쿼리로 매핑되는 데이터 묶음(Holder) | 테이블 엔티티 단위 | 
| 내부 영역 | service | 인터페이스 | ~Service | 서비스 인터페이스: 서비스 퍼사드 역할 | 서비스 인터페이스는 특정 업무의 CRUD를 묶어 표현한다. | 
| 내부 영역 | service | 클레스 | ~ServiceImpl | 서비스 구현체: 업무 처리 흐름 구현 | 서비스 인터페이스당 1개 | 
| 내부 영역 | respoitory | 인터페이스 | ~Mapper | 리포지토리: 저장소 처리 | 도메인 패키지의 데이터 묶음당 1개 | 
| 외부 영역 | web.rest | 클래스 | ~Resource | REST 컨트롤러: REST API 발행, 인바운드 요청 처리 | 서비스 인터페이스당 1개 | 
| 외부 영역 | adaptor | 클래스 | ~Client | REST 클라이언트: 동기 아웃바운드 처리, 다른 서비스를 동기 방식으로 호출 | 호출할 타 서비스당 1개 | 
| 외부 영역 | adaptor | 클래스 | ~Consumer | 컨슈머 어댑터: 비동기 메시지 인바운드 수신처리 | | | 외부 영역 | adaptor | 인터페이스 | ~Producer | 비동기 메시지 인터페이스 : 비동기 아웃바운드 메시지 전송을 정의하는 인터페이스 | 호출할 타 서비스당 1개 | 
| 외부 영역 | adaptor | 클래스 | ~ProducerImpl | 비동기 메시지 구현체: 비동기 아웃바운드 메시지 전송을 구현 | Producer에 의존 | 
| 외부 영역 | dto | 클래스 | ~DTO | 데이터 전송 객체: 동기 호출 시 데이터 전송 객체로 사용 | API에 의존 | 
| 외부 영역 | mybatis-mapper | XML 파일 | ~Mapper.xml | SQL 구문 작성 | 레포지토리당 1개 |


## @ 관련 모음
### @Entity
- 테이블과 링크될 클래스
- ex) SalesManager.java -> sales_manager table
- Entity 클래스에서는 절대 Setter 메소드를 만들지 않는다.

### @Id
- 해당 테이블의 PK 필드값

### @Column
- 테이블의 컬럼, 굳이 선언하지않더라도 필드는 모두 컬럼이됨
- 기본값 이외에 추가로 변경일 필요한 옵션이 있으면 사용

### @NoArgsConstructor
- 기본생성자 자동 추가, public 생성자(){} 같은 효과

### @Getter
- 클래스 내 모들 필드의 Getter 메소드 자동 생성

### @Builder
- 생상자 상단에 선언 시 생성자에 포함된 필드만 빌더에 포함