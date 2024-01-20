import css from './Options.module.css';
import { Button } from '../Button/Button';
import { FaFaceGrinHearts } from 'react-icons/fa6';
import { FaFaceFrown } from 'react-icons/fa6';
import { FaFaceFlushed } from 'react-icons/fa6';
import { FaFaceDizzy } from 'react-icons/fa6';
import { common } from '../../js/common';

const Options = ({ assessments, setAssessments }) => {
  const { bad, good, neutral } = assessments;
  const totalFeedback = good + neutral + bad;

  const onUpdate = option => {
    setAssessments({
      ...assessments,
      [option]: assessments[option] + 1,
    });
  };

  const updateReset = () => {
    setAssessments(common.INITAL_ASSESSMENTS);
  };

  return (
    <ul className={css.list}>
      <li className={css.item} key="good">
        <Button onClick={() => onUpdate('good')}>
          <FaFaceGrinHearts />
          Good
        </Button>
      </li>
      <li className={css.item} key="neutral">
        <Button onClick={() => onUpdate('neutral')}>
          <FaFaceFlushed />
          Neutral
        </Button>
      </li>
      <li className={css.item} key="bad">
        <Button onClick={() => onUpdate('bad')}>
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
