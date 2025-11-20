import "./HtmlLabLayout.css"
export default function HtmlLabLayout({
                                          title,
                                          description,
                                          promptIntro,
                                          promptBullets = [],
                                          promptOutro,
                                          htmlSnippet,
                                          css = "",
                                      }) {
    return (
        <section className="project html-lab">
            <h1 className="project__title">{title}</h1>
            {description && <p className="project__description">{description}</p>}

            {/* MINOR ADDITION — inject CSS locally */}
            <style>{css}</style>

            <div className="html-lab__grid">
                <div className="html-lab__panel html-lab__panel--prompt">
                    <h2 className="html-lab__panel-title">Prompt</h2>
                    {promptIntro && (
                        <div className="html-lab__prompt-text">
                            {promptIntro}
                        </div>
                    )}

                    {promptBullets.length > 0 && (
                        <ul className="html-lab__prompt-list">
                            {promptBullets.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {promptOutro && <p className="html-lab__prompt-text">{promptOutro}</p>}
                </div>

                <div className="html-lab__panel">
                    <h2 className="html-lab__panel-title">HTML</h2>
                    <pre className="html-lab__code">
            <code>{htmlSnippet.trim()}</code>
          </pre>
                </div>

                <div className="html-lab__panel">
                    <h2 className="html-lab__panel-title">Output</h2>

                    {/* Render HTML with local CSS applied */}
                    <div
                        className="html-lab__preview"
                        dangerouslySetInnerHTML={{ __html: htmlSnippet }}
                    />
                </div>
            </div>
        </section>
    );
}
