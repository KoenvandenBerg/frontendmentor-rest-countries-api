import { useEffect, useState } from "react";

enum possibleThemes {
  light = "light",
  dark = "dark",
}

export default function useThemePreference() {
  const getPreference = (): possibleThemes => {
    if (localStorage.getItem("countriesAPI.dark-theme") === "false") {
      return possibleThemes.light;
    } else if (localStorage.getItem("countriesAPI.dark-theme") === "true") {
      return possibleThemes.dark;
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      return possibleThemes.dark;
    } else {
      return possibleThemes.light;
    }
  };

  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? getPreference() : possibleThemes.light
  );

  const changeTheme = () => {
    if (theme === possibleThemes.light) {
      setTheme(possibleThemes.dark);
    } else {
      setTheme(possibleThemes.light);
    }
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      localStorage.setItem("countriesAPI.dark-theme", "false");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("countriesAPI.dark-theme", "true");
    }
  }, [theme]);

  return [theme, changeTheme];
}

export { possibleThemes };
