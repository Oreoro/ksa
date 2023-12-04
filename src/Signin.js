
import React from 'react';

const SignIn = () => {
    // Add your sign-in and login logic here

    const handleSignIn = () => {
        // Handle sign-in logic
    };

    const handleLogin = () => {
        // Handle login logic
    };

    return (
        <div style={{ float: 'right', marginTop: '0', padding: "2rem 3rem 2rem 0" ,margin: "0px 0px 0px auto;"}}>
            <h2>Sign In</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit" onClick={handleSignIn}>Sign In</button>
            </form>

            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );

};


export default SignIn;
