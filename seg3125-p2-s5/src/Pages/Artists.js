import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
export default function Artists() {
    const lang = localStorage.getItem('StoredLang') || "en";

    // IT
    if (lang === "it") {
        function displayImg(pSize, pSrc, pArtist, pTitle, pAltText) {
            var size = pSize[0] + "-" + pSize[1];
            var caption = "<h4>Artista: <a href='#/Artists#" + pArtist + "' >" + pArtist + " </a></h4><p>" + pTitle + ".</p>";
            return (
                <>
                    <a
                        data-lg-size={size}
                        href="/"
                        className="gallery-item"
                        data-src={require("./assets/" + pSrc)}
                        data-sub-html={caption}
                    >
                        <img
                            alt={pAltText}
                            height="350"
                            src={require("./assets/" + pSrc)}
                        />
                    </a>
                </>
            )
        }

        return (
            <>
                <h1 className="main">Artisti</h1>
                <p className="header-caption">Se vuoi che la tua arte sia esposta nel vicolo, puoi inviare una richiesta <a className="dir" href="#/Request">qui</a>.</p>

                <div className="artist" id="Dana N-L">
                    <h2>Dana N-L</h2>
                    <p>Collegamenti: <a className="dir" href="https://www.instagram.com/youhaveseen.me?igsh=MTFlcXZ2ZGljODNtbg==">Instagram</a></p>
                    <LightGallery
                        plugins={[lgZoom, lgShare, lgHash]}
                        speed={500}
                    >
                        {displayImg([1360, 1480], 'DN-img1.jpg', "Dana N-L", "Blue Person", "Portrait of someone's face, they are looking down. It is pixel art in shades of blue.")}
                        {displayImg([1234, 1514], 'DN-img2.jpg', "Dana N-L", "Bathroom", "Colored sketch of someone looking into the mirror, over a sink full of cigarettes.")}
                        {displayImg([1194, 1516], 'DN-img3.jpg', "Dana N-L", "Character Concept", "Multiple drawings of a person in military gear who is corrupted by some sort of disease.")}

                    </LightGallery>
                </div>

                <div className="artist" id="JZ">
                    <h2>JZ</h2>
                    <LightGallery
                        plugins={[lgZoom, lgShare, lgHash]}
                        speed={500}
                    >
                        {displayImg([1600, 1200], 'JZ-img1.png', "JZ", "Flower VS It", "Abstract painting of a ominous eye in space.")}
                        {displayImg([695, 896], 'JZ-img2.png', "JZ", "Zelda", "Full-body portrait of Zelda, using some kind of red magic.")}

                    </LightGallery>
                </div>

                <div className="artist" id="Nzmpo">
                    <h2>Nzmpo</h2>
                    <p>Collegamenti: <a className="dir" href="https://www.instagram.com/nzmpo/?hl=en">Instagram</a></p>

                    <LightGallery
                        plugins={[lgZoom, lgShare, lgHash]}
                        speed={500}
                    >
                        {displayImg([1080, 1336], 'NZ-img1.jpg', "Nzmpo", "Blood", "Full-body portrait of a cut and bruised man.")}
                        {displayImg([1080, 1077], 'NZ-img2.jpg', "Nzmpo", "Mirko", "Full-body portrait of Mirko captioned 'You can do it!'")}

                    </LightGallery>
                </div>
            </>
        );
    }

    // EN
    else {
        function displayImg(pSize, pSrc, pArtist, pTitle, pAltText) {
            var size = pSize[0] + "-" + pSize[1];
            var caption = "<h4>Artist: <a href='#/Artists#" + pArtist + "' >" + pArtist + " </a></h4><p>" + pTitle + ".</p>";
            return (
                <>
                    <a
                        data-lg-size={size}
                        href="/"
                        className="gallery-item"
                        data-src={require("./assets/" + pSrc)}
                        data-sub-html={caption}
                    >
                        <img
                            alt={pAltText}
                            height="350"
                            src={require("./assets/" + pSrc)}
                        />
                    </a>
                </>
            )
        }

        return (
            <>
                <h1 className="main">Artists</h1>
                <p className="header-caption">If you want your art featured on the alley, you can submit a request <a className="dir" href="#/Request">here</a>.</p>

                <div className="artist" id="Dana N-L">
                    <h2>Dana N-L</h2>
                    <p>Links: <a className="dir" href="https://www.instagram.com/youhaveseen.me?igsh=MTFlcXZ2ZGljODNtbg==">Instagram</a></p>
                    <LightGallery
                        plugins={[lgZoom, lgShare, lgHash]}
                        speed={500}
                    >
                        {displayImg([1360, 1480], 'DN-img1.jpg', "Dana N-L", "Blue Person", "Portrait of someone's face, they are looking down. It is pixel art in shades of blue.")}
                        {displayImg([1234, 1514], 'DN-img2.jpg', "Dana N-L", "Bathroom", "Colored sketch of someone looking into the mirror, over a sink full of cigarettes.")}
                        {displayImg([1194, 1516], 'DN-img3.jpg', "Dana N-L", "Character Concept", "Multiple drawings of a person in military gear who is corrupted by some sort of disease.")}

                    </LightGallery>
                </div>

                <div className="artist" id="JZ">
                    <h2>JZ</h2>
                    <LightGallery
                        plugins={[lgZoom, lgShare, lgHash]}
                        speed={500}
                    >
                        {displayImg([1600, 1200], 'JZ-img1.png', "JZ", "Flower VS It", "Abstract painting of a ominous eye in space.")}
                        {displayImg([695, 896], 'JZ-img2.png', "JZ", "Zelda", "Full-body portrait of Zelda, using some kind of red magic.")}

                    </LightGallery>
                </div>

                <div className="artist" id="Nzmpo">
                    <h2>Nzmpo</h2>
                    <p>Links: <a className="dir" href="https://www.instagram.com/nzmpo/?hl=en">Instagram</a></p>

                    <LightGallery
                        plugins={[lgZoom, lgShare, lgHash]}
                        speed={500}
                    >
                        {displayImg([1080, 1336], 'NZ-img1.jpg', "Nzmpo", "Blood", "Full-body portrait of a cut and bruised man.")}
                        {displayImg([1080, 1077], 'NZ-img2.jpg', "Nzmpo", "Mirko", "Full-body portrait of Mirko captioned 'You can do it!'")}

                    </LightGallery>
                </div>
            </>
        );
    }
}