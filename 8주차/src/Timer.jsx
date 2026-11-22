import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  const formattedTime = useMemo(() => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
    const ss = String(seconds % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }, [seconds]);

  const handleToggle = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false); 
    setSeconds(0);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>타이머</h1>
      <h2 style={{ fontSize: 48 }}>{formattedTime}</h2>
      <button onClick={handleToggle}>{isRunning ? '정지' : '시작'}</button>
      <button onClick={handleReset} style={{ marginLeft: 8 }}>
        리셋
      </button>
    </div>
  );
};

export default Timer;
