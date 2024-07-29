export default function Home() {
    const lang = localStorage.getItem('StoredLang') || "en";

    // IT
    if (lang === "it") {
        return (
            <div>
                <h1 className="main">Pagina non trovata!</h1>
                <p>Siamo spiacenti, non siamo riusciti a trovare la pagina che stavi chiedendo.</p>
            </div>
        );
    }

    // EN
    else {
        return (
            <div>
                <h1 className="main">Page Not Found!</h1>
                <p>Sorry, we couldn't find the page you were asking for.</p>
            </div>
        );
    }

    
}