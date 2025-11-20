import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
    const [elapsed, setElapsed] = useState(0); // ms
    const [running, setRunning] = useState(false);
    const startRef = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        if (!running) return;

        startRef.current = performance.now() - elapsed;

        const loop = (now) => {
            setElapsed(now - startRef.current);
            frameRef.current = requestAnimationFrame(loop);
        };

        frameRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameRef.current);
    }, [running]);

    function handleStartStop() {
        setRunning((prev) => !prev);
    }

    function handleReset() {
        setRunning(false);
        setElapsed(0);
    }

    const seconds = (elapsed / 1000).toFixed(2);

    return (
        <section className="project">
            <h1 className="project__title">Stopwatch</h1>
            <p className="project__description">
                Uses <code>requestAnimationFrame</code> for smooth timing.
            </p>

            <div className="stopwatch">
                <div className="stopwatch__time">{seconds}s</div>
                <div className="stopwatch__buttons">
                    <button onClick={handleStartStop}>
                        {running ? "Pause" : "Start"}
                    </button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </section>
    );
}
