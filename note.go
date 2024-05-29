egovMSA-AuthServer
egovMSA-Customer
egovMSA-Catalogs
egovMSA-ConfigClient
egovMSA-ConfigClientBus
egovMSA-ConfigServer
egovMSA-docker-compose
egovMSA-EurekaServer 
egovMSA-GatewayServer
totally9 projects: AuthServer, Catalogs, ConfigClient, ConfigClientBus, ConfigServer, Customers, docker-compose, EurekaServer,GatewayServer
 with Docker, OpenSearch, RabbitMQ

Auth 인증 토근발급
localhost:8080/auth/authenticate?username=admin&password=admin

eyJ0eXBlIjoiand0IiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxNjE4MjQ1OCwiZXhwIjoxNzE2MTgyNzU4fQ.FgqtI7TCgqoXRYBLdRK0UrPsy9uQaaSoFZFF08vmKWCgAVznjywL-lt-I3wCYBo3VDIiRKqEQsj1nz_d5aknzw

## React
# day1 2024/05/17
참고: https://codedthemes.gitbook.io/mantis/figma

workspace: C:\VueReact\mantis-material-react-3.1.0

--mentis seed 프로젝트-- 
-메뉴/화면 추가 방법
pages.jsx : 메뉴명 추가(view)
MainRoutes.jsx : 메인화면에서 클릭해서 진입하는 경로 추가

-egov template 프로젝트-

# day2
VSCODE에서 키워드로 검색: ctrl + shift + f
VSCODE에서 파일명으로 검색: ctrl + p
VSCODE에서 주석: ctrl + /

axios 사용참고: JWTContext.jsx

# project template
C:\VueReact\egovframe-template-simple-react-4.2.x
C:\eGovFrameDev-4.2.0\workspace\egovframe-template-simple-backend-main

1.동작 프로세스
  1.1 로그인
   EgovLoginContect.jsx 에서 id,pwd 입력하여 로그인클릭 -> 
   <백엔드>
   EgovLoginApiController.java 의 /auth/login-jwt 으로 이동 ->
   EgovLoginServiceImpl.java 의 actionLogin 에서 로그인처리:
			1. 입력한 비밀번호를 암호화 
			2. 아이디와 암호화된 비밀번호가 DB와 일치하는지 확인
			3. 결과를 리턴

   1.2 비밀번호변경
   EgovAdminPasswordUpdate.jsx 에서 변경버튼 클릭 ->
   EgovSiteManagerApiController.java 의 /adminPassword 으로 이동
   메소드 updateAdminPassword 에서 비밀번호변경처리

   1.3 회원등록

   1.3.1 아이디 중복확인
   EgovRegister.jsx 에서 중복확인 버튼클릭
   EgovUserRegisterController.java 의 /idCheck 으로 이동
   userRegisterService.countId 메소드로 아이디 중복 체크 
   (userRegisterServiceImpl->LoginDAO.java->EgovLoginUsr_SQL_mysql.xml)

   1.3.2 회원등록신청
   EgovRegister.jsx 에서 회원등록신청 버튼클릭
   EgovUserRegisterController.java 의 /userRegister으로 이동
   EgovUserRegisterService.java 의 userRegister 에서 회원등록

   1.3.3 알림마당>공지사항
   1.3.3.1 공지사항 목록 (case1.메인화면에서 case2.알림마당에서 )
   EgovMain.jsx에서 <ul>{noticeListTag}</ul> 가 목록을 가져온다.
   EgovNoticeList.jsx 에서 <div className="result">{listTag}</div>가 목록을 가져온다. 
  
   이 리스트는 pathname: URL.INFORM_NOTICE_DETAIL	 에서 가져온다. 
   (해당 ADMIN_NOTICE_DETAIL 에 매핑되는 element 인 EgovAdminNoticeDetail 은 index.jsx 에서 가져온다.)

   @GetMapping(value = "/board")
   EgovBBSManageApiController.selectBoardArticles>EgovBBSManageServiceImpl.selectBoardArticles>BBSManageDAO.selectBoardArticleList>EgovBoard_SQL_mysql.xml 의 쿼리 id="selectBoardArticleList" 

   1.3.3.2 상세(한건조회)
   EgovAdminNoticeDetail.jsx 에서 retrieveDetail 함수가 `/board/${bbsId}/${nttId}` 경로로 requestPatch. 해당 ADMIN_NOTICE_DETAIL
   @GetMapping(value = "/board/{bbsId}/{nttId}")
   EgovBBSManageApiController.selectBBSMasterInf>EgovBBSAttributeManageService.selectBBSMasterInf>EgovBBSAttributeManageServiceImpl.selectBBSMasterInf>EgovBoard_SQL_mysql.xml 의 쿼리 id=selectBoardArticle
   2024.05.28 해당 쿼리가 게시글 상세를 2개이상 가져오는 쿼리오류가 있어서 DISTINCT를 쿼리에 추가
   2024.05.28 id=selectBBSMasterInf 쿼리도 2개이상 가져오는 오류로 DISTINCT를 추가 
   2024.05.29 게시글목록 조회시 중복 결과가 나오는 이슈 ->
                쿼리 id = selectBoardArticleList 에 DISTINCT를 추가
   2024.05.29 조회수 2+ 이상 증가하는 이슈
   조회수 파라미터명: inqireCo
   조회수 업데이트쿼리:  updateInqireCo 
   조회수 확인쿼리:@GetMapping(value = "/board") selectBoardArticles >selectBoardArticle> BBSManageDAO >selectMaxInqireCo 
   2024.05.29 게시판 목록번호가 1,2,3... 이 아니라 45,44,43... 으로 나오는 이슈
   게시글번호 : listIdx <- util파일인 calc.js 의 itemIdxByPage함수에 의해 게시글번호가 계산된다
   -> EgovNoticeList.jsx 에서 게시글 목록번호인 const listIdx 구하는 방식을 수정함
   2024.05.29 사이트갤러리 목록번호가 1,2,3... 이 아니라 45,44,43... 으로 나오는 이슈. 위와 동일한 방법으로 해결
   2024.05.30

   
   2.frontend 
 2.1 이미지파일위치 /assets/images/
 2.2 url등록 
	url.js
	index.jsx : url.js 에서 등록한 코드화한 각 화면 진입 경로 추가
 2.3 화면개요
	메인화면 전체 프레임 index.jsx
	메인화면 중 body EgovMain.jsx 
	메인화면 중 header EgovHeader.jsx
	메인화면 중 footer EgovFooter.jsx

	왼쪽네이게이션 EgovLeftNavIntro.jsx



3.backend 
#hsql - local hssql 사용시에 적용 (내장 hsql은 정보 필요 없음)
Globals.hsql.DriverClassName=net.sf.log4jdbc.DriverSpy
Globals.hsql.Url=jdbc:log4jdbc:hsqldb:hsql://127.0.0.1/sampledb
Globals.hsql.UserName=sa
Globals.hsql.Password=


0.TEST 중...
eGovFrame > start > new eGovFrame MSA Template Project
MSA boot template project - service portal 기능 확인하기. React 와 연동 되는지?
gradle로 자동생성된다. JPA로 되어있음
1. 게시판서비스 BoardServiceClient.java, BoardResponseDto.java,
2. 배너지원 Banner.java
3. 공통코드 crud 지원 Code.java
4. 메뉴지원 Menu.java
5. 메뉴권한 MenuRole.java


*참고 from internet*
Board Service : 게시판관리, 게시물관리, 첨부파일관리 기능을 제공
Portal Service : 메뉴관리, 권한관리, 공통코드관리 및 컨텐츠관리 등의 기능을 제공
User Service : 로그인, 회원관리 및 관리자 기능을 제공



onClick={login} 

, {
	headers: {
	  Authorization:
	  'eyJ0eXBlIjoiand0IiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxNjE4Mjg2NiwiZXhwIjoxNzE2MTgzMTY2fQ.BcPl5sz_3GcKvZE_9azJ1bZcIcjJ26f3W6Jdmu3fR2qY9tFq4xe8r4uBdC8fIky9UK74AZAzLuxoM47y81_gaQ',
	  'Content-Type': 'application/json',
	  'Access-Control-Allow-Origin': 'http://localhost:8088/customers/1234', // cors origin (서버의 cors 설정이 동일해야 응답)
	  'Access-Control-Allow-Creadentials': true // 쿠키를 요청에 포함 (cors 설정도 동일해야 가능)
	},
	withCredentials: true}

	
//사용x
const GetCustomerid2 = () => {
	console.log('getCustomerId starts');
	const init = async () => {
	  const response = await axios.get('http://localhost:8088/customers/1234', {
		headers: {
		  'Content-Type': 'application/json'
		},
		withCredentials: true
	  });
	  console.log(response.data);
	  // const { user } = response.data;
	};
  
	init();
  };

  // 예제 코드. 이런식으로 로그인. 
axios.post( 'url', 
{  // 본문으로 보낼 데이터
  username: 'Hayeong',
  id: 'shy8957@naver.com'
},
{  // 
  headers: {
	 'Content-type': 'application/json',
	 'Accept': 'application/json'
  }
 }
) 




 