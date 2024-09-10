import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TeamPage from "./components/TeamPage/TeamPage";
import TestPage from "./components/TestPage/Testpage";
import MBTIPage from "./components/TestPage/MBTIPage/MBTIPage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/LoginPaage/Login";
import Signup from "./components/SignupPaage/Signup";
import Logout from "./components/Logoutpage/Logout";
import MyData from "./components/MyData/MyData";
import community from "./components/community/community";

import "./App.css";
import axios from "axios";
import Community from "./components/community/community";

function App() {
  const serverUrl = "http://localhost:5000/";
  const user = [
    { id: "1", password: "1", email: "123@naver.com", name: "박지훈" },
  ];
  const [questions, setquestions] = useState([{ 
    text: "당신은 새로운 아이디어를 실험하는 것을 좋아하나요?", type: "EI" },
    { text: "당신은 사람들과의 대화에서 에너지를 얻나요?", type: "EI" },
    { text: "당신은 주어진 사실과 정보에 기반해 결정을 내리나요?", type: "SN" },
    { text: "당신은 전체적인 그림보다는 세부 사항에 중점을 두나요?", type: "SN" },
    { text: "당신은 감정에 기반하여 결정을 내리나요?", type: "TF" },
    { text: "당신은 논리적이고 분석적인 접근을 선호하나요?", type: "TF" },
    { text: "당신은 즉흥적으로 행동하는 것을 좋아하나요?", type: "JP" },
    { text: "당신은 계획적이고 체계적인 접근을 선호하나요?", type: "JP" },
  ]);
  
  const [checkIn, setcheckIn] = useState(false);

  const login = async (id, password) => {
    try {
      var idx = user.findIndex(item => item.id === id);
      if (id === user[idx].id) {
        setcheckIn(true);
        return true;
      } else {
        alert("아이디/비밀번호가 틀렸습니다.");
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("로그인 중 오류가 발생했습니다.");
      return false;
    }
  };

  const signup = async (id, password, name, email) => {
    try {
      const response = await axios.post(serverUrl + "signupBtn", {
        id,
        password,
        name,
        email,
      });
      const isAuthenticated = response.data;
      if (isAuthenticated) {
        return isAuthenticated;
      } else {
        alert("회원가입 중 오류가 발생했습니다.");
        return isAuthenticated;
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("회원가입 중 오류가 발생했습니다.");
      return false;
    }
  };

  const logout = () => {
    try {
      if (checkIn) {
        setcheckIn(!checkIn);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar checkIn={checkIn} />}>
          <Route index element={<MainPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="mbti" element={<MBTIPage questions={questions} />} />
          <Route path="login" element={<Login login={login} />} />
          <Route path="signup" element={<Signup signup={signup} />} />
          <Route path="logout" element={<Logout logout={logout} />} />
          <Route path="MyData" element={<MyData />} /> 
          <Route path="community" element={<Community />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
