import { useState } from "react";

export default function Todo() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    function addItem(e) {
        e.preventDefault();
        if (!text.trim()) return;
        setItems([...items, { id: Date.now(), text }]);
        setText("");
    }

    function removeItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    return (
        <section className="project">
            <h1 className="project__title">Todo List</h1>
            <p className="project__description">
                Quick scratchpad for todos using basic React state.
            </p>

            <form className="todo-form" onSubmit={addItem}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a todo..."
                />
                <button type="submit">Add</button>
            </form>

            <ul className="todo-list">
                {items.map((item) => (
                    <li key={item.id}>
                        <span>{item.text}</span>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
