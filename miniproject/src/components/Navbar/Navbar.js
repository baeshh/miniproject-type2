import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar({ checkIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "menu-icon-line rotate" : "menu-icon-line"}></div>
          <div className={isOpen ? "menu-icon-line rotate" : "menu-icon-line"}></div>
          <div className={isOpen ? "menu-icon-line rotate" : "menu-icon-line"}></div>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>홈</Link>
          </li>
          <li>
            <Link to="/team" onClick={() => setIsOpen(false)}>팀 소개</Link>
          </li>
          <li>
            <Link to="/test" onClick={() => setIsOpen(false)}>테스트</Link>
          </li>
          <li hidden={checkIn ? true : false}>
            <Link to="/login" onClick={() => setIsOpen(false)}>로그인</Link>
          </li>
          <li hidden={checkIn ? false : true}>
            <Link to="/logout" onClick={() => setIsOpen(false)}>로그아웃</Link>
          </li>
          <li>
            <Link to="/MyData" onClick={() => setIsOpen(false)}>내정보</Link>
          </li>
          <li>
            <Link to="/community" onClick={() => setIsOpen(false)}>커뮤니티</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
