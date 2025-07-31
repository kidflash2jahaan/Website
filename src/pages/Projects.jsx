import {useEffect, useState} from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_ENDPOINT + "/website/projects")
            .then(response => {
                setProjects(response.data)
            })
    }, []);

    return (
        <div>
            <div className="container my-5 p-5 text-center shadow-lg rounded-5">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1 fw-bold">Programming Projects</h1>
                        <p className="lead">These are all of the programming projects I have created or worked on, with
                            links so you can try them out yourself!</p>
                        <a href="https://github.com/kidflash2jahaan" className="btn btn-primary mt-3 me-2">Github</a>
                        <a href="/" className="btn btn-primary mt-3 me-2">Go Back</a>
                    </div>
                </div>
            </div>
            {projects.map((project) => (
                <div className="container my-5 p-5 text-start shadow-lg rounded-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3 fw-bold">{project.name}</h1>
                            <p className="lead">{project.description}</p>
                            <p className="opacity-50">{project.date}</p>
                            <p className="opacity-50">{project.grade}th grade</p>
                            {project.links.map((link) => (
                                <a href={link.url} className="btn btn-primary mt-3 me-2">{link.label}</a>
                            ))}
                        </div>
                        {project.image && (
                            <div className="col">
                                <img className="rounded-5 mw-100" src={project.image} alt="project"/>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
