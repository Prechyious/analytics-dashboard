import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                alerts: {
                    error: "#FF1F7D",
                    success: "#00AC56",
                    warning: "#F5BF3D",
                },
                sidebar: "#F7F8FA",
                background: "#FDFDFD",
                grayscale: {
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#E5E5E5",
                    300: "#B2ABAB",
                    400: "#A3A3A3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717",
                },
                primary: "#BB372F",
                secondary: "#3A3F51",
            },
            fontFamily: {
                jakarta: ["var(--font-jakarta)"],
            },
        },
    },
    plugins: [],
};
export default config;
