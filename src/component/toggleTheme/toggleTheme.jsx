import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

import "../toggleTheme/toggleTheme.style.css";

// class ToggleTheme extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context;
//         return (
//             <div>
//                 <button onClick={toggleTheme}>Toggle Theme</button>
//             </div>
//         );
//     }
// }

const ToggleTheme = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ToggleTheme;