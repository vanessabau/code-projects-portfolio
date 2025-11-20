import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";

import projectsData from "./data/projects.json";
import { projectComponents } from "./components/projectComponents";

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />

                {projectsData.map((project) => {
                    const Component = projectComponents[project.component];

                    return (
                        <Route
                            key={project.id}
                            path={project.path}
                            element={<Component />}
                        />
                    );
                })}

                {/* Fallback */}
                <Route path="*" element={<Home />} />
            </Routes>
        </Layout>
    );
}
