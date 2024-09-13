import React, { useState } from "react";
import "./TeamPage.css";
import Navbar from "../Navbar/Navbar";

const logoUrl = "/images/logo2.png";

const teamMembers = [
  {
    name: "배승환",
    role: "팀장",
    image: "/images/bae.jpg",
    position: "left",
    description:
      "리더십: 팀을 이끄는 핵심 역할을 하며, 프로젝트의 방향과 목표를 설정합니다.\n" +
      "기획: 프로젝트의 전반적인 기획과 전략을 수립합니다.\n" +
      "프론트 개발: 사용자 인터페이스를 개발하고 개선합니다.",
    keywords: ["운영 ", "기획 ", "프론트"],
    email: "baesh6778@gmail.com",
    blog: "https://baesh.tistory.com/"
  },
  {
    name: "박지훈",
    role: "팀원",
    image: "/images/ji.jpg",
    position: "right",
    description:
      "프론트 개발: 웹사이트의 사용자 인터페이스를 디자인하고 개발합니다.\n" +
      "백엔드 개발: 서버와 데이터베이스를 관리하고 개발합니다.",
    keywords: ["프론트 ", "백엔드"],
    email: "20201168@kiu.kr",
    blog: "https://github.com/jihoon-68"
  },
  {
    name: "이창준",
    role: "팀원",
    image: "/images/chang.jpg",
    position: "left",
    description:
      "프론트 개발: 웹 애플리케이션의 사용자 인터페이스를 구축합니다.",
    keywords: ["프론트"],
    email: "dlckdwns7196@naver.com",
    blog: "https://github.com/Leecj0402"
  },
  {
    name: "명현재",
    role: "팀원",
    image: "/images/hyun.jpg",
    position: "right",
    description: "백엔드 개발: 서버 측의 로직과 데이터베이스를 관리합니다.",
    keywords: ["백엔드"],
    email: "endjoy0@naver.com",
    blog: "https://lightnow1205.tistory.com/"
    
  },
  {
    name: "송민규",
    role: "팀원",
    image: "/images/song.jpg",
    position: "left",
    description: "백엔드 개발: 데이터베이스 설계와 서버 로직을 개발합니다.",
    keywords: ["백엔드"],
    email: "ji@example.com",
    blog: "https://example.com/ji"
  },
  // 다른 팀원 데이터 추가 가능
];

function TeamPage() {
  const [activeMember, setActiveMember] = useState(null);

  const handleClick = (index) => {
    // 클릭된 팀원이 이미 활성화된 상태라면 비활성화 (null 설정)
    if (activeMember === index) {
      setActiveMember(null);
    } else {
      // 새로운 팀원 클릭 시 해당 팀원을 활성화
      setActiveMember(index);
    }
  };

  return (
    <div className="team-page">
      <Navbar />
      
      {/* 팀 소개 섹터 */}
      <section className="team-introduction">
  <div className="team-header">
    <img src={logoUrl} alt="Logo" className="logo" />
    <h2>TEAM BAESH</h2>
    <p className="subtitle">"우리는 가능성을 믿습니다."</p>
  </div>
  <div className="team-description">
    <p className="intro-title">About Us</p>
    <p className="intro-text">
      <span className="highlight">TEAM BAESH</span>는 두려움 없이 재미있는 프로젝트에 도전하며</p>
      <p><span className="highlight">창의적인 솔루션</span>을 찾아내는 능력을 갖춘 개발 팀입니다.</p>
  </div>
</section>


      {/* 팀원 소개 섹터 */}
      <section className="team-members-section">
  <h2>팀원 소개</h2>
  <p>팀원을 클릭하시면 정보가 뜹니다.</p>
  <div className="team-content">
    <div className="team-members">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`team-member ${member.position} ${activeMember === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <img src={member.image} alt={member.name} />
          <div className="team-info">
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            
            {/* 팀원 핵심 키워드 강조 */}
            <p className="keywords">
              {member.keywords.map((keyword, i) => (
                <span key={i} className="keyword">
                  {keyword}
                </span>
              ))}
            </p>
            
            {/* 짧은 설명 추가 */}
            <p className="description-short">
              {member.keywords.join(", ")} 능력을 갖추고 있으며, 팀의 성공을 위해 기여하고 있습니다.
            </p>

            {activeMember === index && (
              <div className="additional-info">
                <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
                <p>Blog: <a href={member.blog} target="_blank" rel="noopener noreferrer">{member.blog}</a></p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default TeamPage;
