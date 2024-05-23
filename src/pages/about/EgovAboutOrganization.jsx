import React from "react";
import { Link } from "react-router-dom";

import URL from "constants/url";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAbout";

function EgovAboutOrganization() {
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
              <Link to={URL.ABOUT}>사이트 소개</Link>
            </li>
            <li>조직소개</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents SITE_INTRO" id="contents">
            {/* <!-- 본문 --> */}

            <h1 className="tit_3">사이트 소개</h1>

            <p className="txt_1">Value through Technology & Wisdom</p>

            <h2 className="tit_4">조직소개</h2>

            <h3 className="tit_5">조직</h3>

            <p className="msg_1">
              ICT 기술에 기반하여 보다 나은 세상을 디자인하는 최고의 IT 서비스
              전문기업
              <br />
              현실에 안주하지 않고 끊임없는 도전을 통하여 변화를 선도합니다.
            </p>

            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovAboutOrganization;
