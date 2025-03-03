import api from "@/api/api";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import SpellsTabBar from "./ui/SpellsTabBar";
import { useLoading } from '@/components/context/LoadingProvider';


type SpellType = {
    spell: string;
    use: string;
    index: number;
};

const Spells = () => {
    const { startLoading, stopLoading } = useLoading();
    const [spells, setSpells] = useState<SpellType[]>([]);
    const [err, setErr] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getSpells = async () => {
            startLoading();
            setErr("");
            try {
                const response = await api.get("/spells");
                setSpells(response.data);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                    setErr(error.message);
                } else {
                    console.log("Unknown error", error);
                    setErr("Something went wrong");
                }
            } finally {
                stopLoading();
            }
        };

        getSpells();
    }, []);

    if (err) return <h1 className="text-red-500 text-center">Something Went Wrong</h1>;

    // Filter spells based on search input
    const filteredSpells = spells.filter((spells) =>
        spells.spell.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="w-[100%] mx-auto py-10 px-8">
            <article className="flex flex-col items-center text-center mb-12">
                <h1 className="text-3xl tracking-tight font-bold lg:text-4xl mb-4">
                    Magical Spells
                </h1>
                <p className="tracking-wide text-lg text-muted-foreground max-w-[700px] mb-8">
                    Discover the incantations and effects of spells from the wizarding world.
                </p>
                <div className="w-full max-w-md">
                    <Input
                        placeholder="Search spells..."
                        className="h-[40px] border border-gray-300 rounded-md px-3"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </article>

            <article className="w-full">
                <SpellsTabBar spells={filteredSpells} />
            </article>
        </section>
    );
};

export default Spells;
