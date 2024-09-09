import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "./MBTIPage.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const tips = {

  ENFJ: "사람들과의 협력을 중요시하며, 리더십 역할을 맡는 것을 즐깁니다.",
  INFJ: "직관과 깊은 사고력을 바탕으로 사람들에게 영감을 주는 경향이 있습니다.",
  // 다른 MBTI 유형별 조언 추가 가능
};

const MBTIPage = ({ questions }) => {
  const [answers, setAnswers] = useState({ EI: 0, SN: 0, TF: 0, JP: 0 });
  const [selected, setSelected] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (questionIndex, type, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [type]: prevAnswers[type] + value,
    }));

    setSelected((prevSelected) => ({
      ...prevSelected,
      [questionIndex]: value,
    }));
  };

  const calculateResult = () => {
    const { EI, SN, TF, JP } = answers;
    const mbti = `${EI >= 0 ? "E" : "I"}${SN > 0 ? "S" : "N"}${TF > 0 ? "T" : "F"}${JP > 0 ? "J" : "P"}`;
    setResult(mbti);
  };

  const resetQuiz = () => {
    setAnswers({ EI: 0, SN: 0, TF: 0, JP: 0 });
    setSelected({});
    setResult(null);
  };

  const chartData = {
    labels: ['EI (외향/내향)', 'SN (감각/직관)', 'TF (사고/감정)', 'JP (판단/인식)'],
    datasets: [
      {
        label: 'MBTI 성향',
        data: [answers.EI, answers.SN, answers.TF, answers.JP],
        backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'],
        borderColor: ['#2980b9', '#c0392b', '#27ae60', '#f39c12'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="mbti-page">
      <Navbar />
      <div className="mbti-content">
        <h1>MBTI 검사</h1>
        <div className="questions">
          {questions.map((question, index) => (
            <div key={index} className="question">
              <p>{question.text}</p>
              <button
                className={`answer-button ${
                  selected[index] === 2 ? "selected" : ""
                }`}
                onClick={() => handleAnswer(index, question.type, 2)}
              >
                매우 그런편
              </button>
              <button
                className={`answer-button ${
                  selected[index] === 1 ? "selected" : ""
                }`}
                onClick={() => handleAnswer(index, question.type, 1)}
              >
                그런편
              </button>
              <button
                className={`answer-button ${
                  selected[index] === -1 ? "selected" : ""
                }`}
                onClick={() => handleAnswer(index, question.type, -1)}
              >
                아닌편
              </button>
              <button
                className={`answer-button ${
                  selected[index] === -2 ? "selected" : ""
                }`}
                onClick={() => handleAnswer(index, question.type, -2)}
              >
                매우 아닌편
              </button>
            </div>
          ))}
        </div>
        <button className="submit-btn" onClick={calculateResult}>
          결과 보기
        </button>
        {result && (
          <div className="result">
            <h2>당신의 MBTI 유형은:</h2>
            <p>{result}</p>
            <div className="chart-container">
              <Bar data={chartData} options={chartOptions} />
            </div>
            <div className="tips">
              <h3>유용한 팁:</h3>
              <p>{tips[result] || "해당 유형에 대한 팁이 준비되어 있지 않습니다."}</p>
            </div>
            <button className="reset-btn" onClick={resetQuiz}>
              다시 검사하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MBTIPage;
