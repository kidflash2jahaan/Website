import {useEffect, useState} from "react";
import axios from "axios";

function Performances() {
    const [performances, setPerformances] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_ENDPOINT + "/website/performances")
            .then(response => {
                setPerformances(response.data)
            })
    }, []);

    return (
        <div>
            <div className="container my-5 p-5 text-center shadow-lg rounded-5">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1 fw-bold">Music Performances</h1>
                        <p className="lead">These are some of the music performances I have done over the years!</p>
                        <a href="https://www.youtube.com/playlist?list=PLWOHimwior8zoevM0phmF-g6-re1ZUie9" className="btn btn-primary mt-3 me-2">All Performances</a>
                        <a href="/" className="btn btn-primary mt-3 me-2">Go Back</a>
                    </div>
                </div>
            </div>
            {performances.map((performance) => (
                <div className="container my-5 p-5 text-start shadow-lg rounded-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3 fw-bold">{performance.title}</h1>
                            <p className="opacity-50">{performance.date}</p>
                            <a href={performance.link} className="btn btn-primary mt-3 me-2">Watch Now</a>
                        </div>
                        <div className="col">
                            <img className="rounded-5 mw-100" src={performance.thumbnail} alt="project"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Performances
