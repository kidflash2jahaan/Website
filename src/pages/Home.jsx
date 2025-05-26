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
                        <img className="rounded-5 mw-100" src="../../public/assets/profile1.jpg" alt="profile1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
