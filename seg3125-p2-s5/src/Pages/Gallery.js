import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
//import lgThumbnail from 'lightgallery/plugins/thumbnail';
//import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';

export default function Gallery() {
    return (
        <>
            <div className="main">
                <h1>Gallery</h1>
            </div>
            <p className="header-caption">This is all the art we have collected. Click on an image for more information.</p>

            <div className="App">
                <LightGallery
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    <a
                        data-lg-size="1200-1788"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img1.jpg')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#LeonardoDaVinci' >Leonardo da Vinci </a></h4><p>Mona Lisa.</p>"
                    >
                        <img
                            alt="Mona Lisa."
                            height="350"
                            src={require('./assets/img1.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="1360-1480"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img2.jpg')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#DanaNL' >Dana N-L </a></h4><p>Blue Person.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Blue Person."
                            height="350"
                            src={require('./assets/img2.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="1600-833"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img3.jpg')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#LeonardoDaVinci' >Leonardo da Vinci</a></h4><p>The Last Supper.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="The Last Supper."
                            height="350"
                            src={require('./assets/img3.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="1600-1200"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img4.png')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#JZ' >JZ</a></h4><p>Flower VS It.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Flower VS It."
                            height="350"
                            src={require('./assets/img4.png')}
                        />
                    </a>

                    <a
                        data-lg-size="1234-1514"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img5.jpg')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#DanaNL' >Dana N-L </a></h4><p>Bathroom.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Bathroom."
                            height="350"
                            src={require('./assets/img5.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="695-896"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img6.png')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#JZ' >JZ</a></h4><p>Zelda.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Zelda."
                            height="350"
                            src={require('./assets/img6.png')}
                        />
                    </a>

                    <a
                        data-lg-size="420-659"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img7.jpg')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#LeonardoDaVinci' >Leonardo da Vinci</a></h4><p>Self Portrait.</p>"
                    >
                        <img
                            className="img-responsive"
                            alt="Self Portrait."
                            height="350"
                            src={require('./assets/img7.jpg')}
                        />
                    </a>

                    <a
                        data-lg-size="1194-1516"
                        href="/"
                        className="gallery-item"
                        data-src={require('./assets/img8.jpg')}
                        data-sub-html="<h4>Artist: <a href='#/Artists#DanaNL' >Dana N-L </a></h4><p>Character.</p>"
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
        </>
    );
}