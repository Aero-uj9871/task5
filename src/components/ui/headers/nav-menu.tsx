import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,

} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";
import { Home, BookOpen, User, Castle, WandSparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const NavMenu = () => {
    // State to track which button was clicked
    // const [activeButton, setActiveButton] = useState<string | null>(null);

    // // Function to change the button variant
    // const changeClick = (buttonName: string) => {
    //     setActiveButton(buttonName);
    // };
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=''>
            <NavigationMenu className=''>
                <NavigationMenuList className='gap-x-5'>
                    <NavLink to="/">
                        <NavigationMenuItem className='text-xl font-bold lg:text-center pl-4 mx-auto text-left' > ⚡ Potter API Explorer
                        </NavigationMenuItem>
                    </NavLink>

                    <div className='hidden lg:flex gap-x-2'>
                        <NavLink to="/" className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><Home size={14} className="inline" /> Home</NavigationMenuItem>
                        </NavLink>

                        <NavLink
                            to="/books"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><BookOpen size={14} className="inline" /> Books</NavigationMenuItem>
                        </NavLink>

                        <NavLink
                            to="/characters"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><User size={14} className="inline" /> Characters</NavigationMenuItem>
                        </NavLink>


                        <NavLink
                            to="/spells"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><WandSparkles size={14} className="inline" /> Spells</NavigationMenuItem>
                        </NavLink>

                        <NavLink
                            to="/houses"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md transition-colors ${isActive
                                    ? "bg-primary text-white"
                                    : "text-foreground hover:bg-muted dark:hover:bg-secondary"
                                }`
                            }
                        >
                            <NavigationMenuItem className='text-sm' ><Castle size={14} className="inline" /> Houses</NavigationMenuItem>
                        </NavLink>


                    </div>

                    {/* <div className="hidden lg:flex sticky top-0 z-14 md:justify-between justify-end items-center px-4 shadow-2xl border-b h-16 bg-background/90">
                        <ThemeToggle /> Add the theme toggle button here
                    </div> */}


                    <button className="lg:hidden p-2 rounded-md sm:ml-110 ml-15" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </NavigationMenuList>
            </NavigationMenu>
        </div >
    );
};

export default NavMenu;




