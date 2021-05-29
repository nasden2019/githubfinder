import React from 'react';
import LoginForm from './LoginForm'

const Register = () => {

    const adminUser = {
        email: "nasden@nuwe.com",
        password: "nasden"
    }

    const [user, setUser] = React.useState({ name: "", email: "" });
    const [error, setError] = React.useState("");

    const Login = details => {
        console.log(details)
    }

    const LogOut = () => {
        console.log("Logout")
    }

    return (
        <div>
            {
                (user.email != "") ? (
                    <div className="welcome">
                        <h2>Bienvenido, <span>{user.name}</span></h2>
                        <button>LogOut</button>
                    </div>
                ) : (
                    <LoginForm LogIn={Login} error={error} />
                )}
        </div>
    )
}

export default Register
