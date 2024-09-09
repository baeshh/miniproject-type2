import React, { useState } from 'react';
import './MyData.css';

const MyData = () => {
    // 사용자 정보 상태 관리
    const [userData, setUserData] = useState({
        name: '홍길동',
        email: 'honggildong@example.com',
        avatar: '/path/to/avatar.jpg',  // 예시 경로
        mbti: 'INTJ'
    });

    // 정보 수정 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    // 이미지 파일 핸들러
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                setUserData((prev) => ({ ...prev, avatar: e.target.result }));
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // 정보 저장 핸들러
    const handleSave = () => {
        // 여기에 실제 데이터 저장 로직을 구현 (예: 서버에 데이터 보내기)
        console.log(userData);  // 콘솔에 저장 데이터 출력 (디버깅 목적)
        alert('저장되었습니다.');  // 저장 완료 알림
    };

    return (
        <div className="mydata-container">
            <div className="profile">
                <img src={userData.avatar} alt="프로필 사진" className="avatar" />
                <input type="file" onChange={handleImageChange} accept="image/*" />
                <div>
                    <label htmlFor="name">이름:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="mbti">MBTI:</label>
                    <input
                        type="text"
                        id="mbti"
                        name="mbti"
                        value={userData.mbti}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleSave}>정보 저장</button>  {/* 저장 버튼 추가 */}
            </div>
        </div>
    );
};

export default MyData;
