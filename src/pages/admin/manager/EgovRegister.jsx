import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as EgovNet from "api/egovFetch";
import URL from "constants/url";
import CODE from "constants/code";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAdmin";

function EgovRegister(props) {
  console.group("userRegister");
  console.log("[Start] userRegister ------------------------------");
  console.log("userRegister [props] : ", props);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const formData = new FormData();
  formData.append("id", id);

  const formValidator = (formData) => {
    console.log(formData.get("password"));
    if (formData.get("id") === null) {
      alert("id는 필수 값입니다.");
      return false;
    }
    return true;
  };
  const [rscode, setRscode] = useState("");
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
        setRscode(resp.resultCode);
        console.log(CODE.RCV_SUCCESS);
        console.log(URL.ERROR);
        console.log(resp.resultMessag);
        console.log(resp.resultCode);

        if (resp.resultCode === 800) {
          alert("해당 아이디는 이미 존재합니다. 다른 아이디를 입력하세요.");
        } else if (resp.resultCode === 200) {
          alert("해당 아이디는 사용 가능합니다.");
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
    formData.append("id", id);
    formData.append("password", password);

    const formValidator = (formData) => {
      if (formData.get("id") === null) {
        alert("id는 필수 값입니다.");
        return false;
      }
      return true;
    };

    const formValidator2 = (formData) => {
      if (formData.get("password") === null) {
        alert("password는 필수 값입니다.");
        return false;
      }
      return true;
    };

    if (formValidator(formData) && formValidator2(formData)) {
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
        console.log("requestFetch Finished ====>");
        console.log(editURL);
        console.log(resp.resultCode);
        setRscode(resp.resultCode);
        console.log(CODE.RCV_SUCCESS);
        console.log(URL.ERROR);
        console.log(resp.resultMessag);
        console.log(resp.resultCode);

        if (resp.resultCode === 800) {
          alert("회원등록 실패");
        } else if (resp.resultCode === 200) {
          alert("회원등록성공");
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
                    disabled={rscode === 200 ? false : true}
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
