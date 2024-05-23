import React from "react";
import { Link } from "react-router-dom";

import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAbout";

function EgovAboutSite() {
  return (
    <div className="container">
      <div className="c_wrap">
        {/* <!-- Location --> */}
        <div className="location">
          <ul>
            <li>
              <Link to="" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="">사이트 소개</Link>
            </li>
            <li>소개</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents SITE_INTRO" id="contents">
            {/* <!-- 본문 --> */}

            <h1 className="tit_3">기업 소개</h1>

            <p className="txt_1">
              Total IT Service 제공을 통하여 미래 비전을 제시하는 기업
              <br /> ㈜브이티더블유는 수십년 간 축적된 노하우와 전문성을
              바탕으로 <br /> IT컨설팅과 시스템 통합을 선도하고 있습니다.
            </p>

            <h2 className="tit_4">VTW 소개</h2>

            <h3 className="tit_5">개요</h3>

            <p className="msg_1">
              정부부처 및 공공기관들과 일반기업들을 대상으로 고객의 입장에서
              최적의 성과를 창출합니다.
              <br />
              고객과 함께 성장하는 것을 최고의 가치로 지향합니다.
            </p>

            <div className="ds_1">
              <h4 className="t_1">
                전자정부 서비스 품질향상 및 정보화투자 효율성 향상
              </h4>

              <ul className="li_1">
                <li>
                  AI/DATA
                  <br />
                  R&D
                </li>
                <li>
                  Biz/IT 컨설팅
                  <br />
                  시스템 구축
                </li>
                <li>
                  운영 / 유지보수
                  <br />
                  해외사업
                </li>
              </ul>

              <p className="t_2">
                IT컨설팅과 시스템 통합
                <br />
              </p>

              <div className="bot">
                <h4 className="t_3">
                  전자정부표준프레임워크 구축 및 적용 요구
                </h4>
                <ul>
                  <li>
                    <span>로우코드 플랫폼</span>
                  </li>
                  <li>
                    <span>CLOUD</span>
                  </li>
                  <li>
                    <span>
                      표준화된 공통 개발기반 부재로
                      <br />
                      시스템간 상호 운용성 및<br />
                      재사용성 저하
                    </span>
                  </li>
                </ul>
                <p className="t_4">
                  전자정부표준프레임워크는 응용SW의 구성기반이 되며 응용SW실행
                  시 필요한 기본 기능을 제공하는 환경으로 정보시스템 구축 시
                  특정 대기업의 프레임워크로 구축·운영되어, 사업자 종속-비용증가
                  및 중소기업의 입찰제한 등의 폐단이 발생하는 것을 방지하기 위한
                  목적과 ‘전자정부 서비스의 품질향상 및 정보화 투자 효율성
                  향상’을 위해 개발 프레임워크 표준을 정립하고, 개발 프레임워크
                  표준 적용을 통한 응용 SW의 표준화 및 품질과 재사용성 향상을
                  목표로 한다.
                </p>
              </div>

              <h3 className="tit_5">배경</h3>
              <p className="msg_1">
                현재 전자정부는 유사한 기능을 가지는 다양한 종류 및 버전의
                프레임워크를 개별 시스템 단위로 적용/관리하고 있으며, 이에 따라
                다양한 문제점들이 발생하고 있다. 전자정부에 적용된
                개발프레임워크는 Black Box 형태로 제공되어 사업자의 기술지원
                없이는 응용 SW를 유지보수하기 어렵기 때문에 사업자에 대한
                의존성이 발생한다. 복수개의 개발프레임워크가 적용된 사업의 경우,
                프레임워크에 따라 개발표준 정의, 개발자수급, 교육시행 등 별도의
                유지보수 체계를 갖추는 중복 투자가 발생하며, 개발프레임워크의
                체계적인 관리절차의 미비로 동일 개발프레임워크라 하더라도 버전
                관리에 어려움이 있다.전자정부의 프레임워크의 표준화는 사업자
                고유 개발 프레임워크에 대한 기술 종속성을 배제하고 표준화를 통해
                응용 SW의 표준화와 품질, 재사용성을 향상시키며, 개발
                프레임워크의 유지 보수 단일화를 통한 투자 효율성을 높인다.
              </p>

              <h3 className="tit_5">특징</h3>
              <p className="msg_1">
                현재 전자정부는 유사한 기능을 가지는 다양한 종류 및 버전의
                프레임워크를 개별 시스템 단위로 적용/관리하고 있으며, 이에 따라
                다양한 문제점들이 발생하고 있다. 전자정부에 적용된
                개발프레임워크는 Black Box 형태로 제공되어 사업자의 기술지원
                없이는 응용 SW를 유지보수하기 어렵기 때문에 사업자에 대한
                의존성이 발생한다. 복수개의 개발프레임워크가 적용된 사업의 경우,
                프레임워크에 따라 개발표준 정의, 개발자수급, 교육시행 등 별도의
                유지보수 체계를 갖추는 중복 투자가 발생하며, 개발프레임워크의
                체계적인 관리절차의 미비로 동일 개발프레임워크라 하더라도 버전
                관리에 어려움이 있다.전자정부의 프레임워크의 표준화는 사업자
                고유 개발 프레임워크에 대한 기술 종속성을 배제하고 표준화를 통해
                응용 SW의 표준화와 품질, 재사용성을 향상시키며, 개발
                프레임워크의 유지 보수 단일화를 통한 투자 효율성을 높인다.
              </p>
            </div>

            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovAboutSite;