import React, { useState, useEffect, useRef } from "react";
import "./MainPage.css";

const logoUrl = "/images/logo5.png"; // 이미지 경로 설정

function MainPage() {
  const [text, setText] = useState("");
  const typingTimeoutRef = useRef(null);
  const indexRef = useRef(0);
  const fullText = '   "안녕 세계!"';
  const typingSpeed = 200; // Time in milliseconds

  useEffect(() => {
    // Ensure the ref starts at 0 when fullText changes
    indexRef.current = 0;
    setText(""); // Clear the text when fullText changes

    const typing = () => {
      if (indexRef.current < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(indexRef.current));
        indexRef.current++;
        typingTimeoutRef.current = setTimeout(typing, typingSpeed);
      }
    };

    typing();

    // Cleanup function to clear timeout if the component unmounts
    return () => {
      clearTimeout(typingTimeoutRef.current);
    };
  }, [fullText, typingSpeed]); // Empty dependency array means this effect runs only once

  return (
    <div className="main-page">
      <header className="main-header">
        {/* 천천히 나타나는 로고 이미지 */}
        <img src={logoUrl} alt="Logo" className="logo" />
        <h1 className="typing">{text}</h1>
        <h2 className="subtitle">우리는 가능성을 믿습니다.</h2>
      </header>
    </div>
  );
}

export default MainPage;
