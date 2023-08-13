export const getJwtFromCookie = (): string | null => {
    const cookies = document.cookie.split("; ");
    const jwtCookie = cookies.find((cookie) => cookie.startsWith("jwt="));

    if (jwtCookie) {
        return jwtCookie.split("=")[1];
    }

    return null;
};
