import { useLocation } from "react-router";
export default function Home() {
    const lang = localStorage.getItem('StoredLang') || "en";
    console.log("Language: " + lang);

    // IT
    if (lang === "it") {
        return (
            <>
                <h1 className="main">Artist Alley</h1>
                <p className="header-caption">Benvenuto! Questa e una tavola artistica curata realizzata da artisti, per la comunita.</p>

                <div className="featured">
                    <h2>Immagine in Primo Piano</h2>
                    <img className="featured-img" src={require('./assets/JZ-img1.png')} alt="Flower VS It." />
                    <p>Dai un'occhiata a questa fantastica arte di <a className="dir" href='/Artists' >JZ</a>!</p>
                    <a className="dir" href="#/Gallery">Visualizza la gallery interna</a>
                </div>

                <div className="featured">
                    <h2>Evidenziazione Dell'Artista: Dana N-L</h2>
                    <img className="featured-artist" src={require('./assets/DN-img1.jpg')} alt="Blue Person." />
                    <div>
                        <a className="dir" href="#/Artists">Visualizza tutti gli artisti</a>
                    </div>
                </div>

                <div className="row">
                    <div className="sub-section-left">
                        <h2>Ultime Notizie</h2>
                        <p>2024/07/21: E stato rilasciato il primo importante aggiornamento per Artist Alley!</p>
                        <a className="dir" href="#/News">Visualizza tutte le notizie</a>
                    </div>

                    <div className="sub-section-right">
                        <h2>Invia una Richiesta</h2>
                        <p>Puoi scoprire di piu sulle commissioni o sulle candidature degli artisti <a className="dir" href="#/RequestHub">qui.</a></p>
                        <p><a className="dir" href="#/Request">Commissioni</a> ---- <a className="dir" href="#/News">Applicazioni degli artisti</a></p>
                    </div>
                </div>
            </>
        );
    }
        
    // EN
    else {
        return (
            <>
                <h1 className="main">Artist Alley</h1>
                <p className="header-caption">Welcome! This is a curated art board made by artists, for the community.</p>

                <div className="featured">
                    <h2>Featured Image</h2>
                    <img className="featured-img" src={require('./assets/JZ-img1.png')} alt="Flower VS It." />
                    <p>Check out this amazing art by <a className="dir" href='/' >JZ</a>!</p>
                    <a className="dir" href="#/Gallery">View the entre gallery</a>
                </div>

                <div className="featured">
                    <h2>Artist Highlight: Dana N-L</h2>
                    <img className="featured-artist" src={require('./assets/DN-img1.jpg')} alt="Blue Person." />
                    <div>
                        <a className="dir" href="#/Artists">View all artists</a>
                    </div>
                </div>

                <div className="row">
                    <div className="sub-section-left">
                        <h2>Latest News</h2>
                        <p>2024/07/21: The first major update for Artist Alley has been released!</p>
                        <a className="dir" href="#/News">View all news</a>
                    </div>

                    <div className="sub-section-right">
                        <h2>Submit a Request</h2>
                        <p>You can find out more about commissions or artist applications <a className="dir" href="#/RequestHub">here.</a></p>
                        <p><a className="dir" href="#/Request">Commissions</a> ---- <a className="dir" href="#/News">Artist Applications</a></p>
                    </div>
                </div>
            </>
        );
    }
}