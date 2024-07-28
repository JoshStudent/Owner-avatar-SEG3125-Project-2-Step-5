export default function Home() {
    return (
        <>
            <div className="main">
                <h1>Artist Alley</h1>
            </div>
            <p className="header-caption">Welcome! This is a curated art board made by artists, for the community.</p>

            <div className="featured">
                <h2>Featured Image</h2>
                <img className="featured-img" src={require('./assets/JZ-img1.png')} alt="Flower VS It." width="800" height="600" />
                <p>Check out this amazing art by <a className="dir" href='/' >JZ</a>!</p>
                <a className="dir" href="#/Gallery">View the entre gallery</a>
            </div>

            <div className="featured">
                <h2>Artist Highlight: Dana N-L</h2>
                <img className="featured-img" src={require('./assets/DN-img1.jpg')} alt="Blue Person." width="340" height="370" />
                <div>
                    <a className="dir" href="#/Artists">View all artists</a>
                </div>
            </div>

            <div className="row">
                <div className="sub-section-left">
                    <h2>Latest News</h2>
                    <p>2024/07/07: Artist Alley has launched! We hope you enjoy this project.</p>
                    <a className="dir" href="#/News">View all news</a>
                </div>

                <div className="sub-section-right">
                    <h2>Submit a Request</h2>
                    <p>To request a commission or submit an artist application, <a className="dir" href="#/Request">click here.</a></p>
                </div>
            </div>
        </>
    );
}