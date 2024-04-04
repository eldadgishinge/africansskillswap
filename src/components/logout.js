import React from 'react';

import { GoogleLogout } from "react-google-login";

const clientId = "307041883946-vsfbo0p3ovu0hf05v0fip465heb9mq8e.apps.googleusercontent.com";

function Logout() {
    const onLogoutSuccess = (response) => {
        console.log(response);
    };
    return (
        <div id="signoutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        />
        </div>
    );
    }

export default Logout;