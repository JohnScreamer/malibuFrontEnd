/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                orange: {
                    DEFAULT: "rgba(255, 102, 51, 1)",
                    muted: "rgba(252, 213, 186, 1)",
                },
                mainBg: {
                    DEFAULT: "#FBF8EC",
                },
                orangeMid: "rgba(255, 102, 51, 0.5)",

                myGreen: {
                    DEFAULT: "rgba(112, 192, 91, 1)",
                    muted: "rgba(229, 255, 222, 1)",
                },
                myGrey: {
                    DEFAULT: "rgba(96, 96, 96, 1)",
                    light: "rgba(243, 242, 241, 1)",
                    soft: "rgba(191, 191, 191, 1)",
                    mid: "#8F8F8F",
                },
                redError: {
                    DEFAULT: "rgba(216, 0, 0, 1)",
                    light: "rgba(255, 199, 199, 1)",
                },
                orangeShadow: {
                    DEFAULT: "rgba(255, 102, 51, 0.20)",
                },
                opacity: {
                    DEFAULT: "rgba(255, 102, 51, 0)",
                },
                pallet: {
                    success: "#008C49",
                    info: "rgba(28, 185, 252, 1)",
                    warning: "rgba(252, 162, 28, 1)",
                    error: "rgba(216, 0, 0, 1)",
                },
            },
        },
    },
    plugins: [],
};
