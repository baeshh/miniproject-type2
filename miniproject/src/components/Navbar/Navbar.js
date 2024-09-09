import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar({ checkIn }) {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/team">팀 소개</Link>
          </li>
          <li>
            <Link to="/test">테스트</Link>
          </li>
          <li hidden={checkIn ? true : false}>
            <Link to="/login">로그인</Link>
          </li>
          <li hidden={checkIn ? false : true}>
            <Link to="/logout">로그아웃</Link>
          </li>
          <li>
            <Link to="/MyData">내정보</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
