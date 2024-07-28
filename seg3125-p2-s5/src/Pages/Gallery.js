import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
//import lgThumbnail from 'lightgallery/plugins/thumbnail';
//import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';

export default function Gallery() {
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
            <div className="main">
                <h1>Gallery</h1>
            </div>
            <p className="header-caption">This is all the art we have collected. Click on an image for more information.</p>

            <div className="gallery">
                <LightGallery
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    {displayImg([1360, 1480], 'DN-img1.jpg', "Dana N-L", "Blue Person", "alt txt")}
                    {displayImg([1600, 1200], 'JZ-img1.png', "JZ", "Flower VS It", "alt txt")}
                    {displayImg([1080, 1336], 'NZ-img1.jpg', "Nzmpo", "Blood", "alt txt")}
                    {displayImg([1234, 1514], 'DN-img2.jpg', "Dana N-L", "Bathroom", "alt txt")}
                    {displayImg([695, 896], 'JZ-img2.png', "JZ", "Zelda", "alt txt")}
                    {displayImg([1194, 1516], 'DN-img3.jpg', "Dana N-L", "Character Concept", "alt txt")}
                    {displayImg([1080, 1077], 'NZ-img2.jpg', "Nzmpo", "Mirko", "alt txt")}

                </LightGallery>
            </div>
        </>
    );
}