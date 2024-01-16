import { useState, useEffect } from 'react';
import './App.css';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { load, save } from '../js/storage';

function App() {
  const [assessments, setAssessments] = useState(() => {
    const savedAssessments = load('saved-assessments');

    if (savedAssessments) {
      return savedAssessments;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    save('saved-assessments', assessments);
  }, [assessments]);

  return (
    <div className="container appWrapper">
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options assessments={assessments} setAssessments={setAssessments} />
      <Feedback assessments={assessments} />
    </div>
  );
}

export { App };
