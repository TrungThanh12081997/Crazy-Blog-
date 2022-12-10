module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter"],
            },
            fontSize: {
                title: ["18px", "26px"],
                description: ["14px", "16px"],
                pin: ["12px", "16px"],
                pinHide: ["10px", "14px"],
            },
            colors: {
                yellow: "#FFB62B",
                purple: "#DBD7E4",
                purpleMain: "#855CDB",
                gray: "#DCDEE1",
                black01: "rgba(0, 0, 0, 0.1)",
                black08: "rgba(0, 0, 0, 0.8)",
            },
            borderRadius: {
                circle: "50%",
                20: "20px",
            },
        },
    },
    plugins: [],
};
