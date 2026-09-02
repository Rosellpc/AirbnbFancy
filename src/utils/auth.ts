export function isAuthenticated() {
    return localStorage.getItem("airbnb_host_user") === "true";
}