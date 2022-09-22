import React from 'react';

export const Success = ({ count, setSuccess, success }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Congrats!</h3>
      <p>All {count} users have been invited.</p>
      <button onClick={() => setSuccess(!success)} className="send-invite-btn">Go Back</button>
    </div>
  );
};
