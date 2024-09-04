import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Testpage.css';

const Testpage = () => {
    const navigate = useNavigate();

    const startTest = (testType) => {
        navigate(`/${testType}`);
    };

    return (
        <div className="test-page">
            <div className="test-content">
                {/* 기존 테스트 블록 */}
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
                {/* 추가된 테스트 블록 */}
                <div className="test-block">
                    <img src="/images/DISC.png" alt="DISC Test" />
                    <h2>DISC 테스트</h2>
                    <p>행동 스타일과 성격 유형을 파악하는 DISC 검사를 시작해 보세요.</p>
                    <button className="start-test-button" onClick={() => startTest('disc')}>
                        DISC 테스트 시작
                    </button>
                </div>
                <div className="test-block">
                    <img src="/images/gallup.png" alt="Gallup Test" />
                    <h2>Gallup 테스트</h2>
                    <p>자신의 강점을 발견할 수 있는 Gallup 강점 찾기 테스트입니다.</p>
                    <button className="start-test-button" onClick={() => startTest('gallup')}>
                        Gallup 테스트 시작
                    </button>
                </div>
                <div className="test-block">
                    <img src="/images/MMPI.png" alt="MMPI Test" />
                    <h2>MMPI 테스트</h2>
                    <p>심리상태와 성격의 다양한 측면을 평가하는 MMPI 검사입니다.</p>
                    <button className="start-test-button" onClick={() => startTest('mmpi')}>
                        MMPI 테스트 시작
                    </button>
                </div>
                <div className="test-block">
                    <img src="/images/eqtest.png" alt="EQ Test" />
                    <h2>EQ 테스트</h2>
                    <p>감정 지능(EQ)을 측정하는 EQ 테스트를 시작해 보세요.</p>
                    <button className="start-test-button" onClick={() => startTest('eq')}>
                        EQ 테스트 시작
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testpage;
