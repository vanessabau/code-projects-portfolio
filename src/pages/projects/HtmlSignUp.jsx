// src/pages/projects/HtmlPrompt.jsx
import HtmlLabLayout from "../../components/HtmlLabLayout";

const HTML_SNIPPET = `
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" required/>
  <label for="password">Password:</label>
  <input type="password" id="password" required/>
  <label for="email">Email:</label>
  <input type="email" id="email" required/>
  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone"/>
  <label for="birthday">Date of Birth:</label>
  <input type="date" id="birthday"/>
  <label for="agree">I agree to the TOS </label>
  <input type="checkbox" id="agree" required/>
  <button type="submit">Sign Up</button>
</form>
`;

const LOCAL_CSS = `
form {
    background-color: lightgrey;
    font-size: 18px;
}
`;

export default function HtmlSignUp() {
    return (
        <HtmlLabLayout
            title="HTML: Sign-Up Form"
            description="This page shows the prompt, the raw HTML, and the rendered output."
            promptIntro="Implement a sign-up form in HTML with the following input fields, each with an apropriate label:"
            promptBullets={[
                "Username, a required input field",
                "Password, a required password input field",
                "Email, a required email input field",
                "Phone Number, an optional telephone input field",
                "Date of Birth, an optional date-picker input field",
                "I agree to the TOS, a required checkbox input field"
            ]}
            promptOutro="There should also be a Sign Up button at the bottom of the form. When clicked on (and if all required fields have been filled, the button should submit the form using the default browser behavior\n NOte that submitting the form in your Browser will result in a broken page being displayed; this is normal behavior, sine these outputs are rendered in iframes.\n You only need to write the HTML that would go inside of a document's <body> tag; no need to worry about the <head>, <html>, or <!DOCTYPE> declaration."
            htmlSnippet={HTML_SNIPPET}
            css={LOCAL_CSS}
        />
    );
}
