import React, { useState } from 'react';
import { courses, quizQuestions, Icon } from '../data';

const QuizComponent = ({ navigateTo }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({
        'cyber-security': 0,
        'cloud-computing': 0,
        'devops': 0,
        'ai': 0,
        'data-engineering': 0,
    });
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (score) => {
        const newScores = { ...scores };
        for (const course in score) {
            newScores[course] += score[course];
        }
        setScores(newScores);

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const getResult = () => {
        let maxScore = -1;
        let resultCourse = 'cyber-security'; // Default
        for (const course in scores) {
            if (scores[course] > maxScore) {
                maxScore = scores[course];
                resultCourse = course;
            }
        }
        return courses.find(c => c.id === resultCourse);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScores({
            'cyber-security': 0,
            'cloud-computing': 0,
            'devops': 0,
            'ai': 0,
            'data-engineering': 0,
        });
        setShowResult(false);
    };

    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    if (showResult) {
        const result = getResult();
        return (
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Your Recommended Course Is:</h2>
                <div className="quiz-card bg-gray-800 p-8 rounded-lg shadow-lg inline-block">
                    <div className="text-[#ff7f50] mb-4">{result.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">{result.title}</h3>
                    <p className="text-gray-400 max-w-md mx-auto">{result.description}</p>
                    <div className="mt-8 space-x-4">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo(result.id); }} className="inline-block bg-[#ff7f50] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300">Learn More</a>
                        <button onClick={resetQuiz} className="inline-block bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-500 transition-colors duration-300">Retake Quiz</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Course</h2>
            <p className="text-lg text-gray-400 mb-8">Answer a few quick questions to get a personalized recommendation.</p>
            <div className="quiz-card bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="progress-bar-container mb-8">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6">{quizQuestions[currentQuestion].question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option.score)} className="quiz-option p-4 rounded-lg text-left">
                            <span className="text-lg text-gray-200">{option.text}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuizComponent;
