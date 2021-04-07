import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("")
        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

            <h2>{name}</h2>
        </div>
    );
};

export default Contact;