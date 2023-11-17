"use client";
import { usePathname } from "next/navigation";
import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const pathname = usePathname();

  const [sidebar, setSidebar] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(pathname);
  const [drawerWidth, setDrawerWidth] = useState(280);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleSelectedUrl = (link) => {
    setSelectedUrl(link);
  };

  return (
    <ThemeContext.Provider
      value={{
        sidebar,
        handleSidebar,
        drawerWidth,
        selectedUrl,
        handleSelectedUrl,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
