
export default function News() {
    const lang = localStorage.getItem('StoredLang') || "en";

    // IT
    if (lang === "it") {
        return (
            <>
                <h1 className="main">Notifiche</h1>

                <div className="news-section">
                    <h2 className="sub-header">- Aggiornamento 2024/07/21 -</h2>
                    <p>E stato rilasciato il primo importante aggiornamento per Artist Alley!</p>
                    <p>Questo aggiornamento include miglioramenti all'aspetto del sito Web, diverse correzioni di bug e un ultimo livello di rifinitura.</p>
                </div>

                <div className="news-section">
                    <h2 className="sub-header">- Aggiornamento 2024/07/07 -</h2>
                    <p>Artist Alley e stato lanciato! Ci auguriamo che questo progetto vi piaccia.</p>
                </div>
            </>
        );
    }

    // EN
    else {
        return (
            <>
                <h1 className="main">Notifications</h1>

                <div className="news-section">
                    <h2 className="sub-header">- Update 2024/07/21 -</h2>
                    <p>The first major update for Artist Alley has been released!</p>
                    <p>This update includes improvements to the look of the website, several bugfixes, and a final layer of polish.</p>
                </div>

                <div className="news-section">
                    <h2 className="sub-header">- Update 2024/07/07 -</h2>
                    <p>Artist Alley has launched! We hope you enjoy this project.</p>
                </div>
            </>
        );
    }
}