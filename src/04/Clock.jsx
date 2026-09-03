import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="stadium">

            <div className="scoreboard">

                <div className="top-title">
                    <span>⚽ PREMIER LEAGUE</span>
                    <span>|</span>
                    <span>TOTTENHAM HOTSPUR ⚽</span>
                </div>

                <h1>인공지능소프트웨어과</h1>

                <div className="current-title">
                    CURRENT TIME
                </div>

                <div className="digital-clock">
                    {time.toLocaleTimeString()}
                </div>

                <div className="current-text">
                    ⚽ 현재 시각입니다. ⚽
                </div>

                <div className="spurs-text">
                    COME ON YOU SPURS!
                </div>

            </div>

        </div>
    );
}

export default Clock;