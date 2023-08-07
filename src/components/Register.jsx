import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

export default function Register(props) {

    const [email, setEmail] = useState(localStorage.getItem("email") ? localStorage.getItem("email") : ""),
        [pass, setPass] = useState(localStorage.getItem("password") ? localStorage.getItem("password") : ""),
        [name, setName] = useState(localStorage.getItem("fullName") ? localStorage.getItem("fullName") : "");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const saveName = (e) => {
        setName(e.target.value);
        localStorage.setItem("fullName", e.target.value)
    }

    const saveEmail = (e) => {
        setEmail(e.target.value);
        localStorage.setItem("email", e.target.value)
    }

    const savePass = (e) => {
        setPass(e.target.value);
        localStorage.setItem("password", e.target.value)
    }

    const clearForm = () => {
        setEmail("");
        setName("");
        setPass("");
    }

    // useEffect(() => {
    //     return () => {
    //         setEmail("");
    //         setName("");
    //         setPass("");
    //     }
    // })

    // const sendData = () => {
    //     setName()
    // }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="name">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" id="fullName" value={name} placeholder='Full Name' onChange={saveName} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" value={email} placeholder='youremail@gmail.com' onChange={saveEmail} />
                    </div>
                    <div className="password">
                        <label htmlFor="pass">password</label>
                        <input type="password" name="pass" id="pass" value={pass} onChange={savePass} />
                    </div>
                    <div className="submit">
                        <input type="submit" value="Register" onClick={clearForm} />
                    </div>
                </form>
                <button onClick={() => props.onFormSwitch("login")}>already have an account? login here</button>
            </div>
        </>
    )
}
