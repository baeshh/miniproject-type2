import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Testpage.css';

const Testpage = () => {
    const navigate = useNavigate();

    const startTest = (testType) => {
        // /test/mbti 또는 /test/iq 경로로 이동
        navigate(`/test/${testType}`);
    };

    return (
        <div className="test-page">
            <div className="test-content">
                <div className="test-block">
                    <img src="/images/mbtitest.png" alt="MBTI Test" />
                    <h2>MBTI 테스트</h2>
                    <p>자신의 성격 유형을 알아보는 MBTI 검사를 진행하세요.</p>
                    <button className="start-test-button" onClick={() => startTest('mbti')}>
                        MBTI 테스트 시작
                    </button>
                </div>
                <div className="test-block">
                    <img src="/images/iqtest.png" alt="IQ Test" />
                    <h2>IQ 테스트</h2>
                    <p>지능지수(IQ)를 측정하는 IQ 테스트를 시작해 보세요.</p>
                    <button className="start-test-button" onClick={() => startTest('iq')}>
                        IQ 테스트 시작
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testpage;
