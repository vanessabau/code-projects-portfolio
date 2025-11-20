import { useState } from "react";

export default function ColorPlayground() {
    const [hue, setHue] = useState(220);
    const [saturation, setSaturation] = useState(90);
    const [lightness, setLightness] = useState(55);

    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    return (
        <section className="project">
            <h1 className="project__title">Color Playground</h1>
            <p className="project__description">
                Adjust the sliders to explore different colors.
            </p>

            <div className="color-playground">
                <div className="color-playground__preview" style={{ background: hsl }}>
                    <span>{hsl}</span>
                </div>

                <div className="color-playground__controls">
                    <label>
                        Hue
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={hue}
                            onChange={(e) => setHue(Number(e.target.value))}
                        />
                    </label>

                    <label>
                        Saturation
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={saturation}
                            onChange={(e) => setSaturation(Number(e.target.value))}
                        />
                    </label>

                    <label>
                        Lightness
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={lightness}
                            onChange={(e) => setLightness(Number(e.target.value))}
                        />
                    </label>
                </div>
            </div>
        </section>
    );
}
