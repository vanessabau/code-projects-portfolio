// src/components/projectComponents.js
import Counter from "../pages/projects/Counter";
import Todo from "../pages/projects/Todo";
import Stopwatch from "../pages/projects/Stopwatch";
import ColorPlayground from "../pages/projects/ColorPlayground";
import MarkdownPreviewer from "../pages/projects/MarkdownPreviewer";
import HtmlSignUp from "../pages/projects/HtmlSignUp.jsx";
import HtmlPricing from "../pages/projects/HtmlPricing";

export const projectComponents = {
    Counter,
    Todo,
    Stopwatch,
    ColorPlayground,
    MarkdownPreviewer,
    HtmlPrompt: HtmlSignUp,
    HtmlPricing,
};
