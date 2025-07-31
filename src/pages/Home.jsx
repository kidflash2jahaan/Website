function Home() {
    return (
        <div>
            <div className="container my-5 p-5 text-center shadow-lg rounded-5">
                <div className="row">
                    <div className="col">
                        <h1 className="display-1 fw-bold">Jahaan Pardhanani</h1>
                        <p className="lead">Welcome to my portfolio! Here you'll find all my projects, performances, and much more.</p>
                    </div>
                </div>
            </div>
            <div className="container my-5 p-5 text-start shadow-lg rounded-5">
                <div className="row">
                    <div className="col">
                        <h1 className="display-3 fw-bold">About Me</h1>
                        <p className="lead">Ambitious teenager with a passion for technology, music, and personal growth. Aspiring to become a tech entrepreneur and CEO, driven by his growth mindset and enthusiasm for new opportunities. With accomplishments in academics, music, technology, digital art, and leadership, Jahaan embodies a well-rounded and determined individual eager to contribute and thrive in Sage Hill High's dynamic environment.</p>
                        <a href="/about" className="btn btn-primary mt-3">Learn More</a>
                    </div>
                    <div className="col">
                        <img className="rounded-5 mw-100" src="/assets/profile1.jpg" alt="profile1"/>
                    </div>
                </div>
            </div>
            <div className="container my-5 p-5 text-start shadow-lg rounded-5">
                <div className="row">
                    <div className="col">
                        <h1 className="display-3 fw-bold">Programming Projects</h1>
                        <p className="lead">These are all of the programming projects I have created or worked on, with links so you can try them out yourself!</p>
                        <a href="/projects" className="btn btn-primary mt-3">Learn More</a>
                    </div>
                    <div className="col">
                        <img className="rounded-5 mw-100" src="https://www.siteuptime.com/blog/wp-content/uploads/2021/07/a70e911d1e1f00197ebaa00b51c8519d.jpg" alt="profile1"/>
                    </div>
                </div>
            </div>
            <div className="container my-5 p-5 text-start shadow-lg rounded-5">
                <div className="row">
                    <div className="col col-8">
                        <h1 className="display-3 fw-bold">Music Performances</h1>
                        <p className="lead">These are some of the music performances I have done over the years!</p>
                        <a href="/performances" className="btn btn-primary mt-3">Learn More</a>
                    </div>
                    <div className="col">
                        <img className="rounded-5 mw-100" src="https://i0.wp.com/www.songstuff.com/wp-content/uploads/2014/01/380_sudio_spectrum_2.webp" alt="profile1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
