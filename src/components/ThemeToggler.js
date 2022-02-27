import { ThemeContext, themes } from '../ThemeContext';
import { useState } from 'react';

const ToggleTheme = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = (changeTheme) => {
        setDarkMode(!darkMode);
        changeTheme(darkMode ? themes.dark : themes.light);
    }

    return(
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
            <div className="toggle-wrapper is-flex is-spaced-between">
                <div>Light</div>
                <div class="toggle_checkbox">
                <label class="switch"><input type="checkbox" onChange={() => toggleTheme(changeTheme)}/>    <div></div>
                </label>
                </div>
                <div>Dark</div>
            </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default ToggleTheme