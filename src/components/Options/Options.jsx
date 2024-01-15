import css from './Options.module.css';
import { Button } from '../Button/Button';

const Options = ({ assessments, setAssessments }) => {
  const { bad, good, neutral } = assessments;
  const totalFeedback = good + neutral + bad;

  const updateGood = () => {
    setAssessments({
      ...assessments,
      good: assessments.good + 1,
    });
  };
  const updateNeutral = () => {
    setAssessments({
      ...assessments,
      neutral: assessments.neutral + 1,
    });
  };
  const updateBad = () => {
    setAssessments({
      ...assessments,
      bad: assessments.bad + 1,
    });
  };

  const updateReset = () => {
    setAssessments({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <ul className={css.options}>
      <li key="Good">
        <Button onClick={updateGood}>Good</Button>
      </li>
      <li key="Neutral">
        <Button onClick={updateNeutral}>Neutral</Button>
      </li>
      <li key="Bad">
        <Button onClick={updateBad}>Bad</Button>
      </li>
      {Boolean(totalFeedback) && (
        <li key="Reset">
          <Button onClick={updateReset}>Reset</Button>
        </li>
      )}
    </ul>
  );
};

export { Options };
