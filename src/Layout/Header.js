import React from "react";
import { AuthenticationContext } from "@axa-fr/react-oidc-context";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const headerStyle = {
    // display: "flex",
    // backgroundColor: "#26c6da",
    // justifyContent: "space-between",
    // padding: 10,
};

const linkStyle = {
    // color: "white",
    // textDecoration: "underline",
};

export default () => (
    <header>
        <AuthenticationContext.Consumer>
            {(props) => {
                return (
                    <div style={headerStyle}>
                        <h3>
                            <Link style={linkStyle} to="/home">
                                HOME
                            </Link>
                        </h3>

                        {props.oidcUser || !props.isEnabled ? (
                            <div>
                                <ButtonToolbar>
                                    <Link style={linkStyle} to="/dashboard">
                                        <Button>Dashboard</Button>
                                    </Link>
                                    <Link style={linkStyle} to="/admin">
                                        <Button>Admin</Button>;
                                    </Link>
                                    <Link style={linkStyle} to="/protected1">
                                        <Button>Direct Protected</Button>
                                    </Link>
                                    <Link style={linkStyle} to="/protected2">
                                        <Button>HOC Protected</Button>
                                    </Link>
                                    <Button onClick={props.logout}>logout</Button>
                                </ButtonToolbar>
                            </div>
                        ) : (
                            <button onClick={props.login}>login</button>
                        )}
                    </div>
                );
            }}
        </AuthenticationContext.Consumer>
    </header>
);
