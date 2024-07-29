import { useState } from 'react';

export default function Request2() {
    const lang = localStorage.getItem('StoredLang') || "en";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        desc: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // IT
    if (lang === "it") {
        const handleSubmit = (e) => {
            e.preventDefault();
            const newErrors = validateForm(formData);
            setErrors(newErrors);

            if (Object.keys(newErrors).length === 0) {
                console.log('Form submitted successfully!');
                alert("Successo! Dovresti sentire presto una risposta dall'artista.")
            } else {
                console.log(`Form submission failed
             due to validation errors.`);
            }
        };

        const validateForm = (data) => {
            const errors = {};

            if (!data.name.trim()) {
                errors.name = 'Il nome e obbligatorio';
            }

            if (!data.email.trim()) {
                errors.email = "L'e - mail e obbligatoria";
            } else if (!/\S+@\S+\.\S+/.test(data.email)) {
                errors.email = "L'email non e valida";
            }

            if (!data.desc.trim()) {
                errors.desc = 'La descrizione e obbligatoria';
            }

            return errors;
        };

        return (
            <>
                <h1 className="main">Commissioni</h1>

                <div className="req-form">
                    <h2 className="sub-header">Richiedi Commissione</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-section">
                            <label>Nome: </label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Inserisci il nome..." />
                            {errors.name && <span className="error-message"> {errors.name} </span>}
                        </div>

                        <div className="input-section">
                            <label>E-mail: </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Inserisci l'email..." />
                            {errors.email && <span className="error-message"> {errors.email} </span>}
                        </div>

                        <div className="input-section">
                            <textarea name="desc" value={formData.desc} onChange={handleChange} rows="5" cols="35" placeholder="Descrivi te stesso (includi qui i link ai social media)" />
                            {errors.desc && <span className="error-message"> {errors.desc} </span>}
                        </div>

                        <div className="input-section">
                            <button type="submit">Invia Commissione</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }

    // EN
    else {
        const handleSubmit = (e) => {
            e.preventDefault();
            const newErrors = validateForm(formData);
            setErrors(newErrors);

            if (Object.keys(newErrors).length === 0) {
                console.log('Form submitted successfully!');
                alert("Success!")
            } else {
                console.log(`Form submission failed
             due to validation errors.`);
            }
        };

        const validateForm = (data) => {
            const errors = {};

            if (!data.name.trim()) {
                errors.name = 'Name is required';
            }

            if (!data.email.trim()) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(data.email)) {
                errors.email = 'Email is invalid';
            }

            if (!data.desc.trim()) {
                errors.desc = 'Description is required';
            }

            return errors;
        };

        return (
            <>
                <h1 className="main">Artist Application</h1>

                <div className="req-form">
                    <h2 className="sub-header">Join the Alley today!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-section">
                            <label>Name: </label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name..." />
                            {errors.name && <span className="error-message"> {errors.name} </span>}
                        </div>

                        <div className="input-section">
                            <label>Email: </label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email..." />
                            {errors.email && <span className="error-message"> {errors.email} </span>}
                        </div>

                        <div className="input-section">
                            <textarea name="desc" value={formData.desc} onChange={handleChange} rows="5" cols="35" placeholder="Describe yourself (include links to social media here)" />
                            {errors.desc && <span className="error-message"> {errors.desc} </span>}
                        </div>

                        <div className="input-section">
                            <button type="submit">Submit Application</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}