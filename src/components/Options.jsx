import React from 'react';

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && 
        <button onClick={onReset}>Reset</button>
      }
    </div>
  );
};

export default Options;
