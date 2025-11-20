import { NavLink } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className="sidebar__inner">
                <div className="sidebar__header">
                    <span className="sidebar__logo">CP</span>
                    <span className="sidebar__title">Code Projects</span>
                </div>

                <nav className="sidebar__nav">
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

                    <div className="sidebar__section-label">Projects</div>

                    {projectsData.map((project) => (
                        <NavLink
                            key={project.id}
                            to={project.path}
                            className={({ isActive }) =>
                                "sidebar__link" + (isActive ? " sidebar__link--active" : "")
                            }
                            onClick={onClose}
                        >
                            {project.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
