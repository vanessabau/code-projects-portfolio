import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <section className="project">
            <h1 className="project__title">Counter</h1>
            <p className="project__description">
                A simple counter built with React state.
            </p>

            <div className="counter">
                <div className="counter__value">{count}</div>
                <div className="counter__buttons">
                    <button onClick={() => setCount(count - 1)}>-1</button>
                    <button onClick={() => setCount(count + 1)}>+1</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </section>
    );
}
