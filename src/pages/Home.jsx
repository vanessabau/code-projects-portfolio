import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

export default function Home() {
    return (
        <section className="home">
            <h1 className="home__title">Code Projects</h1>
            <p className="home__subtitle">A collection of one-page React projects.</p>

            <div className="home__grid">
                {projectsData.map((project) => (
                    <Link
                        key={project.id}
                        to={project.path}
                        className="home-card"
                    >
                        <h2>{project.title}</h2>
                        <p>{project.shortDescription}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
