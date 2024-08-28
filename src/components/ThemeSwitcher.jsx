import { useState } from 'react';

// ThemeSwitcher component
const ThemeSwitcher = ({ render }) => {
    const [theme, setTheme] = useState('light');

    // Change current theme
    const changeTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };
    
    return render({ theme, changeTheme });
};

export default ThemeSwitcher;
