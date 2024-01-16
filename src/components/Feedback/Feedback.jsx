import css from './Feedback.module.css';

const Feedback = ({ assessments: { bad, good, neutral } }) => {
  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  const FeedbackList = () => {
    return (
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {totalFeedback}</li>
        <li className={css.item}>Positive: {positiveFeedback}%</li>
      </ul>
    );
  };

  return (
    <div className={css.feedback}>
      {!totalFeedback ? <p>No feedback yet</p> : <FeedbackList />}
    </div>
  );
};

export { Feedback };
