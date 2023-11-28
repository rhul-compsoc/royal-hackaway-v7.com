'use client';

import { useState, useEffect } from 'react'

interface Props {
  date: Date;
};

function getTimeUntil(date: Date): number {
  return Math.max(date.getTime() - Date.now(), 0);
}

function getDays(date: number): number {
  return Math.floor(date / (1000 * 3600 * 24));
}

function getHours(date: number): number {
  return Math.floor((date - (getDays(date) * 1000 * 3600 * 24)) / (1000 * 3600));
}

function getMinutes(date: number): number {
  let days = getDays(date) * 1000 * 3600 * 24;
  let hours = getHours(date) * 1000 * 3600;
  return Math.floor((date - days - hours) / (1000 * 60));
}

function getSeconds(date: number): number {
  let days = getDays(date) * 1000 * 3600 * 24;
  let hours = getHours(date) * 1000 * 3600;
  let minutes = getMinutes(date) * 1000 * 60;
  return Math.floor((date - days - hours - minutes) / 1000);
}

export const CountdownTimer: React.FC<Props> = ({ date }): JSX.Element => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function updateTimer() {
      let timeDelta = getTimeUntil(date);
      setDays(getDays(timeDelta));
      setHours(getHours(timeDelta));
      setMinutes(getMinutes(timeDelta));
      setSeconds(getSeconds(timeDelta));
    }

    updateTimer();
    let timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="w-full lg:grid lg:grid-cols-4 px-5 lg:px-0">
      <div className="text-center mb-5 lg:mb-0">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-white font-bold">{days}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white"> days</p>
      </div>

      <div className="text-center mb-5 lg:mb-0">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-white font-bold">{hours}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white"> hours</p>
      </div>

      <div className="text-center mb-5 lg:mb-0">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-white font-bold">{minutes}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white"> minutes</p>
      </div>

      <div className="text-center">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-white font-bold">{seconds}</p>
        <p className="text-xl sm:text-2xl md:text-4xl text-white"> seconds</p>
      </div>
    </div>
  );
}
