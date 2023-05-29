import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [countdown, setCountdown] = useState({ minutes: 2, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown.minutes === 0 && prevCountdown.seconds === 0) {
          clearInterval(interval);
          return prevCountdown;
        } else if (prevCountdown.seconds === 0) {
          return {
            minutes: prevCountdown.minutes - 1,
            seconds: 59
          };
        } else {
          return {
            minutes: prevCountdown.minutes,
            seconds: prevCountdown.seconds - 1
          };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-row'>
   
                    <span className="timer-box px-6 py-6"> {countdown.minutes.toString().padStart(2, '0')}</span>
                    <span className="timer-divider mx-2">:</span>
                    <span className="timer-box px-6 py-6">   {countdown.seconds.toString().padStart(2, '0')}</span>
                   
    </div>
  );
};

export default CountDown;
