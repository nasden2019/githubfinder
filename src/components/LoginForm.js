import React from 'react';


function LoginForm({ Login, error }) {

    const [details, setDetails] = React.useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        console.log('hey')
        // Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* {error} */}
                <div className="from-group">
                    <label>Nombre:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="from-group">
                    <label>Email:</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="from-group">
                    <label>Contraseña:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Login" />

            </div>
        </form>
    )
}

export default LoginForm
