import css from './Feedback.module.css';

const Feedback = ({ assessments: { bad, good, neutral } }) => {
  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div className={css.feedback}>
      {!totalFeedback ? (
        <p>No feedback yet</p>
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </ul>
      )}
    </div>
  );
};

export { Feedback };
