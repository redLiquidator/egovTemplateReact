import React from "react";
import { Link } from "react-router-dom";

import URL from "constants/url";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAbout";

function EgovAboutHistory() {
  return (
    <div className="container">
      <div className="c_wrap">
        {/* <!-- Location --> */}
        <div className="location">
          <ul>
            <li>
              <Link to={URL.MAIN} className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to={URL.ABOUT}>연혁 안내</Link>
            </li>
            <li>연혁</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents SITE_INTRO" id="contents">
            {/* <!-- 본문 --> */}
            <h1 className="tit_3">연혁</h1>
            <p className="txt_1">
              {" "}
              ㈜브이티더블유는 수십년 간 축적된 노하우와 전문성을 바탕으로 "
              IT컨설팅과 시스템 통합을 선도하고 있습니다.
            </p>
            <h2 className="tit_4">vtw 연혁</h2>
            <h3 className="tit_5">연혁</h3>
            <p className="msg_1">
              2022 소프트웨어프로세스 품질인증서 취득 애플리케이션 플랫폼 'DnA'
              <br />
              2021 소프트웨어품질인증서 취득
              <br /> 2020 응급 상황을 위한 블록체인 기반의 cPHR 서비스 운용방법
              <br />
              특허등록 블록체인 기반의 cPHR 서비스 운용방법 특허등록 지역적
              <br />
              블록체인 기반의 cPHR 서비스 운용방법 특허등록
            </p>
            <li></li>
            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovAboutHistory;
