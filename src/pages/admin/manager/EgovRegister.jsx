import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as EgovNet from "api/egovFetch";
import URL from "constants/url";
import CODE from "constants/code";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAdmin";

function EgovRegister(props) {
  console.group("userRegister");
  console.log("[Start] userRegister ------------------------------");
  console.log("EgovAdminPasswordUpdate [props] : ", props);

  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const formValidator = (formData) => {
    if (formData.get("id") === null || formData.get("id") === "") {
      alert("id는 필수 값입니다.");
      return false;
    }

    //필수체크 완료된 경우만 적용되어야 함. 아이디중복확인 작업을 위해 주석처리
    // if (formData.get("password") === null || formData.get("password") === "") {
    //   alert("password는 필수 값입니다.");
    //   return false;
    // }

    return true;
  };

  /* 아이디중복확인 start */
  const idCheck = () => {
    console.log("idCheck starts. parameter id : " + id);
    const editURL = "/idCheck";

    let requestOptions = {};
    const formData = new FormData();
    formData.append("id", id);

    if (formValidator(formData)) {
      requestOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      };
      EgovNet.requestFetch(editURL, requestOptions, (resp) => {
        console.log("requestFetch Finished ====>");
        console.log(editURL);
        console.log(resp.resultCode);
        console.log(CODE.RCV_SUCCESS);
        console.log(URL.ERROR);
        console.log(resp.resultMessag);
        if (Number(resp.resultCode) === Number(CODE.RCV_SUCCESS)) {
          alert("OK 다음 로그인 시 신규 암호를 사용하세요.");
          navigate({ pathname: URL.MAIN }, { replace: true });
        } else {
          alert("Fail 변경되지 않았습니다. 다시 시도해 주세요.");
          navigate(
            { pathname: URL.ERROR },
            { state: { msg: resp.resultMessage } }
          ); //에러메세지 변수명 변경
        }
      });
    }
  };
  /* 아이디중복확인 end */

  /* 회원등록 start */
  const userRegister = () => {
    console.log("userRegister starts");
    const editURL = "/userRegister";

    let requestOptions = {};
    const formData = new FormData();
    formData.append("password", password);
    if (formValidator(formData)) {
      requestOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          password: password,
        }),
      };
      EgovNet.requestFetch(editURL, requestOptions, (resp) => {
        if (Number(resp.resultCode) === Number(CODE.RCV_SUCCESS)) {
          alert("OK 다음 로그인 시 신규 암호를 사용하세요.");
          navigate({ pathname: URL.MAIN }, { replace: true });
        } else {
          alert("Fail 변경되지 않았습니다. 다시 시도해 주세요.");
          navigate(
            { pathname: URL.ERROR },
            { state: { msg: resp.resultMessage } }
          ); //에러메세지 변수명 변경
        }
      });
    }
  };
  /* 회원등록 end */

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("------------------------------EgovAdminPasswordUpdate [End]");
  console.groupEnd("EgovAdminPasswordUpdate");

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
              <Link to={URL.ADMIN}>회원등록</Link>
            </li>
            <li>사이트관리자 암호변경</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}
          <div className="contents BOARD_CREATE_REG" id="contents">
            {/* <!-- 본문 --> */}

            <div className="top_tit">
              <h1 className="tit_1">회원등록</h1>
            </div>
            <h2 className="tit_2">회원등록</h2>
            <div className="board_view2">
              <dl>
                <dt>
                  <label htmlFor="id">아이디</label>{" "}
                  <span className="req">필수</span>
                </dt>

                <dd>
                  <input
                    className="f_input2 w_full"
                    type="id"
                    name="id"
                    title=""
                    id="id"
                    placeholder=""
                    defaultValue={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </dd>
                <dd>
                  <button
                    className="btn btn_skyblue_h46 w_100"
                    onClick={() => idCheck()}
                  >
                    중복확인
                  </button>
                </dd>
              </dl>
              <dl>
                <dt>
                  <label htmlFor="password">비밀번호</label>
                  <span className="req">필수</span>
                </dt>
                <dd>
                  <input
                    className="f_input2 w_full"
                    type="password"
                    name="password"
                    title=""
                    id="password"
                    placeholder=""
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </dd>
              </dl>
              {/* <!-- 버튼영역 --> */}
              <div className="board_btn_area">
                <div className="left_col btn1">
                  <button
                    className="btn btn_skyblue_h46 w_100"
                    onClick={() => userRegister()}
                  >
                    신청
                  </button>
                </div>
              </div>
              {/* <!--// 버튼영역 --> */}
            </div>
            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovRegister;
