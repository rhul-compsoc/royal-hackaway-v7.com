'use client';

import { useState, useEffect } from 'react'

function getTimeUntil(date: Date): number {
    console.log(date);
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

export default function CountdownTimer({ date }: { date: Date }) {
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
            <div className="w-fit">
                <span className="text-5xl md:text-8xl">{days}</span><span className="text-xl md:text-4xl"> days</span><br />
                <span className="text-5xl md:text-8xl">{hours}</span><span className="text-xl md:text-4xl"> hours</span><br />
                <span className="text-5xl md:text-8xl">{minutes}</span><span className="text-xl md:text-4xl"> minutes</span><br />
                <span className="text-5xl md:text-8xl">{seconds}</span><span className="text-xl md:text-4xl"> seconds</span>
            </div>
    )
}