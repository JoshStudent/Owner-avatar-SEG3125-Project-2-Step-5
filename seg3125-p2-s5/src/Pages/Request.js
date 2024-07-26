import { useState } from 'react';

export default function Request() {
    function submit(formData) {
        const query = formData.get("artist");
        alert(`You requested a commission from ${query}`);
    }

    function submit2(formData) {
        const query = formData.get("name");
        alert(`Thank you for submitting your request, ${query}!`);
    }

    return (
        <>
            <div className="main">
                <h1>Request</h1>
            </div>

            <div className="req-form">
                <h2>Request Commssion</h2>
                <form action={submit}>
                    <div>
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label for="email">Email: </label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label for="artist">Choose an Artist:</label>
                        <select id="artist" name="artist">
                            <option value="Dana N-L">Dana N-L</option>
                            <option value="JZ">JZ</option>
                            <option value="Leonardo da Vinci">Leonardo da Vinci</option>
                        </select> 
                    </div>
                    <div>
                        <textarea name="desc" rows="5" cols="35">
                            Description of the commission.
                        </textarea> 
                    </div>
                    <div>
                        <button type="submit">Submit Request</button>
                    </div>
                </form>
            </div>

            <div className="req-form">
                <h2>Request to Join the Alley</h2>
                <form action={submit2}>
                    <div>
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label for="email">Email: </label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <textarea name="desc" rows="5" cols="35">
                            Description (include links to your accounts here).
                        </textarea>
                    </div>
                    <div>
                        <button type="submit">Submit Request</button>
                    </div>
                </form>
            </div>
        </>
    );
}