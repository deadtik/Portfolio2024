import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefers-color-scheme: dark)";

    const [mode, setMode] = useState('');
    
    useEffect (() => {
            const mediaQuery = window.matchMedia(preferDarkQuery);
            const usePref = window.localStorage.getItem("theme");
            

    }, [] )



    return (
        <div>useThemeSwitcher</div>
    )
}

export default useThemeSwitcher;