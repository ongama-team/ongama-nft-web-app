import React from "react";
import { useEffect, useState } from "react";

const TimeLeftCard = () => {
  const [timeUp, setTimeUp] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2022 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) {
      setTimeUp(false);
    }
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds, timeUp]);
  return (
    <>
      {timeUp ? (
        <span className="text-gray-700 font-sans font-bold dark:text-white">
          Expired
        </span>
      ) : (
        <span className="text-gray-700 font-sans font-bold dark:text-white">
          {hours}:{minutes}:{seconds}
        </span>
      )}
    </>
  );
};
export default TimeLeftCard;
