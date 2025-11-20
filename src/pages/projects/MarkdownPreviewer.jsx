import { useState } from "react";
import ReactMarkdown from "react-markdown";

const INITIAL_TEXT = `# Markdown Previewer

Type some markdown on the left and see it rendered on the right.

## Examples

- **Bold text**
- _Italic text_
- [Link](https://example.com)

\`\`\`js
const hello = "world";
console.log(hello);
\`\`\`
`;

export default function MarkdownPreviewer() {
    const [value, setValue] = useState(INITIAL_TEXT);

    return (
        <section className="project">
            <h1 className="project__title">Markdown Previewer</h1>
            <p className="project__description">
                Type markdown in the editor and see a live preview.
            </p>

            <div className="markdown">
                <div className="markdown__editor">
                    <label className="markdown__label">Editor</label>
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        spellCheck="false"
                    />
                </div>

                <div className="markdown__preview">
                    <div className="markdown__label">Preview</div>
                    <div className="markdown__preview-inner">
                        <ReactMarkdown>{value}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>
    );
}
