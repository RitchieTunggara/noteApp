'use client';

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [openWindowNote, setOpenWindowNote] = useState(false);
    return (
        <GlobalContext.Provider value={{ openWindowNote, setOpenWindowNote }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalProvider() {
    return useContext(GlobalContext);
}