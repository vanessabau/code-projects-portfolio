// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import projectsData from "../data/projects.json";

const CATEGORIES = ["HTML", "CSS", "JavaScript"];

export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className="sidebar__inner">
                <div className="sidebar__header">
                    <span className="sidebar__logo">CP</span>
                    <span className="sidebar__title">Code Projects</span>
                </div>

                <nav className="sidebar__nav">
                    {/* OVERVIEW */}
                    <div className="sidebar__section-label">Overview</div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            "sidebar__link" + (isActive ? " sidebar__link--active" : "")
                        }
                        onClick={onClose}
                    >
                        Home
                    </NavLink>

                    {/* CODE PROJECTS */}
                    <div className="sidebar__section-label" style={{ marginTop: 16 }}>
                        Code Projects
                    </div>

                    {CATEGORIES.map((category) => {
                        const categoryProjects = projectsData.filter(
                            (project) => project.category === category
                        );

                        return (
                            <div key={category}>
                                {/* Category label (HTML / CSS / JavaScript) */}
                                <div className="sidebar__section-label">
                                    {category}
                                </div>

                                {/* Projects in that category */}
                                {categoryProjects.map((project) => (
                                    <NavLink
                                        key={project.id}
                                        to={project.path}
                                        className={({ isActive }) =>
                                            "sidebar__link" +
                                            (isActive ? " sidebar__link--active" : "")
                                        }
                                        onClick={onClose}
                                    >
                                        {project.title}
                                    </NavLink>
                                ))}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}
