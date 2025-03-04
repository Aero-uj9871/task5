import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpells } from "@/features/spells/spellSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { Input } from "@/components/ui/input";
import SpellsTabBar from "./ui/SpellsTabBar";
import { useLoading } from '@/components/context/LoadingProvider';

const Spells = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { spells, error } = useSelector((state: RootState) => state.spells);
    const { startLoading, stopLoading } = useLoading();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        startLoading();
        dispatch(fetchSpells()).finally(stopLoading);
    }, [dispatch]);

    if (error) return <h1 className="text-red-500 text-center">Something Went Wrong</h1>;

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
