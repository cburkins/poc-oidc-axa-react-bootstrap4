import React from "react";
import "./ie.polyfills";

import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider, oidcLog, InMemoryWebStorage } from "@axa-fr/react-oidc-context";
import CustomCallback from "./Pages/CustomCallback";
import Header from "./Layout/Header";
import Routes from "./Router";
import oidcConfiguration from "./configuration";

const App = () => (
    <div>
        <AuthenticationProvider
            configuration={oidcConfiguration}
            // Can be either INFO or DEBUG
            loggerLevel={oidcLog.INFO}
            isEnabled={true}
            callbackComponentOverride={CustomCallback}
            UserStore={InMemoryWebStorage}
        >
            <Router>
                <Header />
                <Routes />
            </Router>
        </AuthenticationProvider>
    </div>
);

render(<App />, document.getElementById("root"));
