export default function RequestHub() {
    const lang = localStorage.getItem('StoredLang') || "en";

    // IT
    if (lang === "it") {
        return (
            <>
                <h1 className="main">Richieste</h1>
                <p className="header-caption">Restiamo in attesa della vostra risposta!</p>

                <div className="row">
                    <div className="sub-section-left">
                        <h2>Commissiona un Artista</h2>
                        <p>Crea arte secondo la tua richiesta!</p>
                        <a className="dir" href="#/Request">Modulo di commissione</a>
                    </div>

                    <div className="sub-section-right">
                        <h2>Applicazione dell'artista</h2>
                        <p>Unisciti al vicolo oggi!</p>
                        <a className="dir" href="#/Request2">Modulo di domanda</a>
                    </div>
                </div>
            </>
        );
    }

    // EN
    else {
        return (
            <>
                <h1 className="main">Requests</h1>
                <p className="header-caption">We look forward to hearing from you!</p>

                <div className="row">
                    <div className="sub-section-left">
                        <h2>Commission an Artist</h2>
                        <p>Have art created by your request!</p>
                        <a className="dir" href="#/Request">Commission form</a>
                    </div>

                    <div className="sub-section-right">
                        <h2>Artist Application</h2>
                        <p>Join the alley today!</p>
                        <a className="dir" href="#/Request2">Application form</a>
                    </div>
                </div>
            </>
        );
    }

    
}