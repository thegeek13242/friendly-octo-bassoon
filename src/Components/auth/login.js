import React from "react";
import {GoogleLogin} from 'react-google-login';

function Login(props){
    const onSuccess = (response) => {
        console.log(response);
        console.log(process.env.REACT_APP_DOMAIN+props.redirectUri);
    }
    const onFailure = (response) => {
        console.log(response);
        console.log(process.env.REACT_APP_DOMAIN+props.redirectUri);
    }
    return(
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{"border-radius":"1rem"}}
                isSignedIn={true}
                uxMode="redirect"
                redirectUri={process.env.REACT_APP_DOMAIN+props.redirectUri}
            />
            
        </div>
    );
}

export default Login;
