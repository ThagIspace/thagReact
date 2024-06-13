import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Lấy giá trị từ local storage nếu có, nếu không thì mặc định là "light"
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    const toggleTheme = () => {
        setTheme((curr) => {
            const newTheme = curr === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme); // Lưu trạng thái mới vào local storage
            return newTheme;
        });
    };

    useEffect(() => {
        // Đặt giá trị theme vào local storage khi component được mount
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
