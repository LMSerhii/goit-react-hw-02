import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { load, save } from '../js/storage';
import { common } from '../js/common';
import './App.css';

const getInitialAssessments = () => {
  const savedAssessments = load('saved-assessments');
  return savedAssessments ? savedAssessments : common.INITAL_ASSESSMENTS;
};

function App() {
  const [assessments, setAssessments] = useState(getInitialAssessments);

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
