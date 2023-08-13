interface CookieOptions {
    expires: number;
    secure: boolean;
    sameSite: "strict" | "lax" | "none";
}
const cookieOptionsDefault: CookieOptions = {
    expires: 30, // Number of days until the cookie expires
    secure: true, // Set to true if using HTTPS
    sameSite: "strict", // Set sameSite to 'strict', 'lax', or 'none'
};
export const setJwtCookie = (
    token: string,
    options: CookieOptions = cookieOptionsDefault
) => {
    const cookieOptions = Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join("; ");

    document.cookie = `jwt=${token}; ${cookieOptions}`;
};
