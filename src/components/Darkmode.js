import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../components/ThemeContext';
// Darkmode.js
const Darkmode = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="switch" id={theme}>
            <style>
                {`
                    .switch {
                        transition: background-color 0.3s, color 0.3s;
                    }
                    .switch#light {
                        color: #000;
                    }
                    .switch#dark {
                        color: #fff;
                    }
                    .form-label {
                        font-size: 3rem;
                        padding-right: 10px;
                    }
                `}
            </style>
            <label className="form-label">
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
    );
};

export default Darkmode;
