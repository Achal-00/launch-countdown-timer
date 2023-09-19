import { useState, useEffect } from "react";
import Days from "./Days";
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

let dt = new Date();
dt.setDate(dt.getDate() + 9);
const targetTime = dt.getTime();

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 self-center mx-auto gap-4 landscape:gap-8 w-auto">
      <Days days={days} />
      <Hours hours={hours} />
      <Minutes minutes={minutes} />
      <Seconds seconds={seconds} />
    </div>
  );
}
