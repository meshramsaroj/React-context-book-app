import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

import "../toggleTheme/toggleTheme.style.css";

const ToggleTheme = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ToggleTheme;