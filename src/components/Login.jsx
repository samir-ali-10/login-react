import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

export default function Login(props) {

    const [email, setEmail] = useState(""),
        [pass, setPass] = useState(""),
        [invalidEmail, setInvalidEmail] = useState("check"),
        [invalidPass, setInvalidPass] = useState("check");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleEmail = (e) => {

        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const checkEmail = () => {
        email === localStorage.getItem("email") ? setInvalidEmail("check") : setInvalidEmail('check invalid');
        if (email === "") {
            setInvalidEmail("check")
        }
    }

    const checkPass = () => {
        pass === localStorage.getItem("password") ? setInvalidPass("check") : setInvalidPass('check invalid');
        if (pass === "") {
            setInvalidPass("check")
        }
    }


    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="email">
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" value={email} placeholder='youremail@gmail.com' onChange={handleEmail} onKeyUp={checkEmail} />
                        <p className={invalidEmail}>Invalid Entry</p>
                    </div>
                    <div className="password">
                        <label htmlFor="pass">password</label>
                        <input type="password" name="pass" id="pass" value={pass} onChange={handlePass} onKeyUp={checkPass} />
                        <p className={invalidPass}>Invalid Entry</p>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Log In" />
                    </div>
                </form>
                <button onClick={() => props.onFormSwitch("register")}>don't have an account? register here</button>
            </div>
        </>
    )
}
