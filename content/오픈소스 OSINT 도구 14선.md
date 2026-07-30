---
core: false
created: 2026-06-22
sources:
- raw/반드시 사용해봐야 할 놀라운 오픈소스 OSINT 도구 14선.md
status: evergreen
tags:
- security
- osint
- tool
type: tool
updated: 2026-07-10
aliases:
- 오픈소스-OSINT-도구-14선
---
# 오픈소스 OSINT 도구 14선

## 한 줄 정의
오픈소스 OSINT(Open Source Intelligence) 도구 14선은 보안 조사, 디지털 발자국 분석, 계정 정보 유출 조회 등을 돕는 14가지 전문화된 공개 출처 정보 수집 도구 모음이다.

## 핵심 요지
- **조사의 차별성 확보**: 대중적인 보안 도구(NMap 등)를 넘어 특정 문제를 해결하는 작고 전문화된 도구들을 통해 남들이 놓치기 쉬운 신호를 포착한다.
- **다양한 영역의 도구**: URL 안전도 및 웹사이트 분석(CyScan, Recox, DNSDumpster, Website Informer), 멀티미디어 분석(Filmot, Find Pic Location), 온라인 신원 및 발자국 추적(What's My Name, haveibeensquattəd, OSINT Investigator’s Toolkit, Antipublic, ShareTrace, Searchall), 특정 커뮤니티 정보 복원(Telegram Spoiler Decoder), 다크웹 검색(Robin) 등으로 구성된다.
- 유출 데이터 세트 계정 정보 조회 시 haveibeenpwned 사이트의 훌륭한 무료 대안으로 antipublic.net 플랫폼을 활용할 수 있다. (출처: 반드시 사용해봐야 할 놀라운 오픈소스 OSINT 도구 14선.md)
- 다크웹 검색 자동화 및 [[LLM]] 요약을 포함하는 에이전틱 OSINT 조사 도구로 robin(github.com/apurvsinghgautam/robin) 프로젝트가 존재한다.

## 상세

1. **CyScan**: 링크를 열기 전에 리다이렉트 경로, 외부 연결, 백그라운드 활동 등을 파악하는 URL 스캔 도구.
2. **Filmot**: 유튜브 영상 자막과 녹취록을 색인화하여 특정 키워드/문장이 언급된 정확한 구간으로 이동하게 돕는 검색 도구.
3. **Find Pic Location**: 랜드마크, 건축 양식, 지형 등을 AI로 분석해 GPS Exif 정보가 유실된 사진의 촬영 위치 좌표나 후보지를 추정하는 도구.
4. **What's My Name**: 다양한 소셜 미디어와 포럼 등 수백 개의 웹사이트에서 특정 사용자명(username)이 사용되고 있는지 검색하는 도구.
5. **Recox**: 대상 사이트를 직접 공격하지 않고 수동형 데이터 소스를 활용해 서브도메인과 숨겨진 엔드포인트를 수집하는 웹 정찰 도구.
6. **Telegram Spoiler Decoder**: macOS 텔레그램 클라이언트에서 의사 점자로 표시되는 스포일러 텍스트를 해독하여 숨겨진 피싱 링크나 연락처 등을 복원하는 도구.
7. **Eyedex**: FTP/웹 서버 등 인터넷에 노출된 대형 공개 저장소의 PDF, 텍스트, 설정 파일 등을 한 번에 조회할 수 있는 검색 엔진.
8. **haveibeensquattəd**: 철자가 미세하게 다른 타이포스쿼팅(typosquatting) 도메인이나 가짜 로그인 페이지 등 사기 목적의 악성 변종 도메인을 탐지하는 모니터링 도구.
9. **OSINT Investigator’s Toolkit**: 이메일, 전화번호 등의 디지털 식별자 조사와 온체인(on-chain) 암호화폐 지갑 거래 추적을 단일 워크플로로 결합한 조사 플랫폼.
10. **Antipublic**: 유출된 로그인 기록 데이터베이스를 기반으로 이메일이나 비밀번호가 유출되었는지 점검할 수 있는 검색 플랫폼.
11. **DNSDumpster**: 대상 도메인의 DNS 레코드 및 서브도메인을 조회하고 이를 시각적 맵으로 표현해 주는 패시브 DNS 정찰 도구.
12. **Website Informer**: WHOIS 정보, IP, 호스팅 서버, 트래픽 등 임의의 도메인에 대한 정보 리포트를 신속하게 제공하는 웹사이트 인텔리전스 도구.
13. **Robin**: 다크웹 검색 정제, Tor를 통한 페이지 스크래핑 및 [[LLM]] 요약을 지원하는 AI 기반 다크웹 OSINT CLI/웹 도구.
14. **ShareTrace**: 사용자명, 이메일 등의 식별자가 존재하는 공개 플랫폼을 스캔하여 개인의 디지털 발자국을 추적하는 통합 도구.
*   **Searchall**: 검색어 하나로 여러 검색 엔진, AI 챗봇, 소셜 네트워크를 동시에 검색할 수 있는 메타 검색 플랫폼.

### 주요 14대 OSINT 도구 목록 및 공식 웹 주소

1. **CyScan** ([cyscan.io](https://cyscan.io/)): 리다이렉트 경로, 외부 연결, 백그라운드 활동을 분석하는 경량 URL 스캔 도구. (출처: 반드시 사용해봐야 할 놀라운 오픈소스 OSINT 도구 14선.md)
2. **Filmot** ([filmot.com](https://filmot.com/)): 유튜브 자막과 트랜스크립트 색인 기반 키워드 영상 구간 탐색기.
3. **Find Pic Location** ([findpiclocation.com](https://findpiclocation.com/)): 시각적 요소(지형, 건축) 분석 기반 사진 촬영 위치 지오로케이션 추정 도구.
4. **What's My Name** ([whatsmyname.app](https://whatsmyname.app/)): 수백 개 소셜 플랫폼에서의 계정명 사용 여부 일괄 조회 도구.
5. **Recox**: 수동형 데이터 소스 취합 서브도메인 정찰 도구.
6. **Telegram Spoiler Decoder** ([spoiler.soxoj.com](https://spoiler.soxoj.com/)): macOS 텔레그램 스포일러 의사 점자 서식 복원 도구.
7. **Eyedex**: 공개 노출 FTP/웹 디렉토리 내 대규모 파일 통합 검색 엔진.
8. **haveibeensquattəd**: 철자 사칭 타이포스쿼팅 도메인 유효성 실시간 감지 및 상세 레코드 시각화 도구.
9. **OSINT Investigator’s Toolkit**: 온체인 지갑 트랜잭션 추적 및 웹 흔적 단일 통합 툴킷.
10. **Antipublic** ([antipublic.net](https://antipublic.net/)): 과거 수집된 유출 로그인 크리덴셜 데이터베이스 검색 사이.
11. **DNSDumpster** ([dnsdumpster.com](https://dnsdumpster.com/)): 패시브 DNS 인프라 시각적 맵 추출 도구.
12. **Website Informer** ([website.informer.com](https://website.informer.com/)): WHOIS 레코드, 트래픽, 보안 평판 대시보드 리포팅 도구.
13. **Robin** ([github.com/apurvsinghgautam/robin](https://github.com/apurvsinghgautam/robin)): 다크웹 AI 스크래핑 및 [[LLM]] 인텔리전스 요약 CLI 도구.
14. **ShareTrace**: 개인의 흩어진 디지털 발자국 프로파일 통합 스캐너.
- **Searchall** ([searchall.net](https://searchall.net/)): 하나의 키워드로 다수 검색 엔진, 소셜 미디어, AI 챗봇을 한눈에 조회하는 올인원 메타 검색 엔진.

## 예시

- **보안 사고 선제 대응**: `haveibeensquattəd`를 이용해 자사 브랜드와 유사하게 만들어진 피싱 도메인을 감시하고, `Antipublic`을 통해 임직원 계정의 외부 유출 여부를 주기적으로 모니터링함.
- **디지털 포렌식 및 지오로케이션**: 촬영 위치 메타데이터가 삭제된 조각상 이미지 파일의 배경 지형을 `Find Pic Location`에 입력하여 대략적인 촬영 장소를 찾아내어 증거를 확보함.

### 실제 OSINT 활용 시나리오
- **유출 확인**: `antipublic.net`에 조사를 희망하는 도메인이나 이메일 주소를 쿼리하여 계정 탈취 여부 점검. (출처: 반드시 사용해봐야 할 놀라운 오픈소스 OSINT 도구 14선.md)
- **다크웹 탐색**: 다크웹 환경에 수동 접근하는 리스크 없이 로컬 CLI 환경에서 `robin`을 기동하여 인텔리전스 요약 생성.

## 충돌
*등록된 충돌 정보 없음*

## 관련 노트
- [[API Key 관리 원칙]]
- [[로컬 LLM 30분 실전 가이드]]

## 출처
- [반드시 사용해봐야 할 놀라운 오픈소스 OSINT 도구 14선](file:///Users/railscraft/Obsidian/raw/%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B4%90%EC%95%BC%20%ED%95%A0%20%EB%86%80%EB%9D%BC%EC%9A%B4%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20OSINT%20%EB%8F%84%EA%B5%AC%2014%EC%84%A0.md) (Abhay Parashar, cyscan.io, filmot.com, findpiclocation.com, whatsmyname.app, spoiler.soxoj.com, antipublic.net, dnsdumpster.com, github.com/apurvsinghgautam/robin, searchall.net 참조)
