// const configuration_auth0 = {
//     client_id: "5XF0vALgtkN6t1Z3KJTChqyaCQiQ94Tm",
//     redirect_uri: "http://localhost:3000/authentication/callback",
//     response_type: "code",
//     post_logout_redirect_uri: "http://localhost:3000/",
//     scope: "openid profile email api offline_access",
//     authority: "https://dev-8snzgxfi.auth0.com",
//     silent_redirect_uri: "http://localhost:3000/authentication/silent_callback",
//     automaticSilentRenew: false,
//     loadUserInfo: true,
// };

const configuration = {
    client_id: "chad-jnj-poc-app01-2020june",
    redirect_uri: "http://localhost:3155/authentication/callback",
    response_type: "code",
    post_logout_redirect_uri: "http://localhost:3000/",
    scope: "openid",
    authority: "https://fedlogin-dev.jnj.com",
    silent_redirect_uri: "http://localhost:3000/authentication/silent_callback",
    automaticSilentRenew: false,
    loadUserInfo: true,
};

export default configuration;
