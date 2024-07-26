import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';

export default function Artists() {
    return (
        <>
            <div className="main">
                <h1>Artists</h1>
            </div>
            <p className="header-caption">If you want your art featured on the alley, you can submit a request <a href="#/Request">here</a>.</p>

            <div className="artist" id="DanaNL">
                <h2>Dana N-L</h2>
                <p>Links: <a href="https://www.instagram.com/youhaveseen.me?igsh=MTFlcXZ2ZGljODNtbg==">Instagram</a></p>
                <LightGallery
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    <a
                        data-lg-size="1360-1480"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img2.jpg')}
                        data-sub-html="<p>Blue Person.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Blue Person."
                            height="350"
                            src={require('./assets/img2.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="1234-1514"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img5.jpg')}
                        data-sub-html="<p>Bathroom.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Bathroom."
                            height="350"
                            src={require('./assets/img5.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="1194-1516"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img8.jpg')}
                        data-sub-html="<h4>Artist: <a href='/' >Dana N-L </a></h4><p>Character.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Character."
                            height="350"
                            src={require('./assets/img8.jpg')}
                        />
                    </a>
                </LightGallery>
            </div>

            <div className="artist" id="JZ">
                <h2>JZ</h2>
                <LightGallery
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    <a
                        data-lg-size="1600-1200"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img4.png')}
                        data-sub-html="<p>Flower VS It.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Flower VS It."
                            height="350"
                            src={require('./assets/img4.png')}
                        />
                    </a>

                    <a
                        data-lg-size="695-896"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img6.png')}
                        data-sub-html="<p>Zelda.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Zelda."
                            height="350"
                            src={require('./assets/img6.png')}
                        />
                    </a>
                </LightGallery>
            </div>

            <div className="artist" id="LeonardoDaVinci">
                <h2>Leonardo da Vinci</h2>

                <LightGallery
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    <a
                        data-lg-size="1200-1788"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img1.jpg')}
                        data-sub-html="<p>Mona Lisa.</p>"
                    >
                        <img
                            alt="Mona Lisa."
                            height="350"
                            src={require('./assets/img1.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="1600-833"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img3.jpg')}
                        data-sub-html="<p>The Last Supper.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="The Last Supper."
                            height="350"
                            src={require('./assets/img3.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="420-659"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img7.jpg')}
                        data-sub-html="<p>Self Portrait.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Self Portrait."
                            height="350"
                            src={require('./assets/img7.jpg')}
                        />
                    </a>
                </LightGallery>
            </div>
        </>
    );
}