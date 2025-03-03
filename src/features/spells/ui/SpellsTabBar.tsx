import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useTheme } from "@/components/context/theme-provider";
import SpellsCard from "./SpellsCard";

type SpellsType = {
  spell: string;
  use: string;
  index: number;
};

const SpellsTabBar: React.FC<{ spells: SpellsType[] }> = ({ spells }) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const { theme } = useTheme();

  return (
    <Tabs defaultValue="All" onValueChange={setSelectedTab} className="">
      <TabsList
        className={`w-full h-[40px] mb-4 py-1.5 ${theme === "light" ? "bg-gray-800" : ""}`}
      >
        <div className="flex flex-wrap w-full">
          <TabsTrigger
            className="w-1/3 cursor-pointer mx-auto px-3"
            value="All"
          >
            All Spells
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3 cursor-pointer mx-auto px-3"
            value="Charms"
          >
            Charms
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3 cursor-pointer mx-auto px-3"
            value="Curses"
          >
            Curses
          </TabsTrigger>
        </div>
      </TabsList>

      {/* Tab Content */}
      <TabsContent value={selectedTab}>
        {selectedTab === "All" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {spells.map((spell) => (
              <SpellsCard spells={spell} key={spell.index} />
            ))}
          </div>
        )}
        {selectedTab === "Charms" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {spells
              .filter((f) => f.index % 2 !== 0)
              .map((spell) => (
                <SpellsCard spells={spell} key={spell.index} />
              ))}
          </div>
        )}
        {selectedTab === "Curses" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {spells
              .filter((f) => f.index % 2 === 0)
              .map((spell) => (
                <SpellsCard spells={spell} key={spell.index} />
              ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default SpellsTabBar;
