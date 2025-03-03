import NavMenu from "./nav-menu"
import { useTheme } from "../../context/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const cycleTheme = () => {
        if (theme === "light") setTheme("dark");
        else if (theme === "dark") setTheme("light");
        else setTheme("light");
    };
    return (
        <header className='w-[100%] space-x-2 mx-auto py-4 justify-center flex gap-2 sticky top-0 z-40 lg:justify-center shadow-2xl border-b h-16 lg:space-x-5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/6'>
            <NavMenu />
            <button
                onClick={cycleTheme}
                className="hidden lg:block p-1 mr-10 rounded-full bg-background dark:bg-background hover:bg-gray-300 dark:hover:bg-secondary transition"
            >
                {theme === "light" ? <Sun className="w-6 h-6 text-foreground" /> : <Moon className="w-6 h-6 text-foreground" />}
            </button>
        </header>
    )
}

export default Header