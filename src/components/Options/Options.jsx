import css from './Options.module.css';
import { Button } from '../Button/Button';
import { FaFaceGrinHearts } from 'react-icons/fa6';
import { FaFaceFrown } from 'react-icons/fa6';
import { FaFaceFlushed } from 'react-icons/fa6';
import { FaFaceDizzy } from 'react-icons/fa6';

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
    <ul className={css.list}>
      <li className={css.item} key="Good">
        <Button onClick={updateGood}>
          <FaFaceGrinHearts />
          Good
        </Button>
      </li>
      <li className={css.item} key="Neutral">
        <Button onClick={updateNeutral}>
          <FaFaceFlushed />
          Neutral
        </Button>
      </li>
      <li className={css.item} key="Bad">
        <Button onClick={updateBad}>
          <FaFaceFrown />
          Bad
        </Button>
      </li>
      {Boolean(totalFeedback) && (
        <li className={css.item} key="Reset">
          <Button onClick={updateReset}>
            <FaFaceDizzy />
            Reset
          </Button>
        </li>
      )}
    </ul>
  );
};

export { Options };
