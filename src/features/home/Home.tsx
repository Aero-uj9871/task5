import { Button } from "@/components/ui/button"
import { BookOpen, Castle, User, WandSparkles } from "lucide-react"
import HomeCard from "./ui/HomeCard"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/books");
    };
    const handleCharNavigate = () => {
        navigate("/characters")
    }

    return (
        <div className="w-[90%] sm:w-[95%] mx-auto mb-8 h-[20%]">
            <div className="py-10 ">
                <div className="flex flex-col gap-4 justify-center items-center ">
                    <div className="rounded-full p-6 shadow-[0_0_20px_hsl(263.4,70%,50.4%)] text-4xl">⚡</div>
                    <h1 className=" mx-auto text-center text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">Potter API Explorer</h1>

                    <p className="text-xl w-[80%] lg:w-[65%] mb-6 text-center text-muted-foreground mx-auto">Discover the magical world of Harry Potter through our interactive API explorer. Browse books, characters, spells, and houses from the wizarding world.</p>


                    <article className="gap-x-2 md:gap-x-4 flex lg:w-[40%]">
                        <Button className="w-fit md:w-[40%] cursor-pointer inline-flex justify-center p-5" onClick={handleNavigate}><BookOpen size={20} className="inline" /> Explore Books</Button>
                        <Button className="w-fit md:w-[40%] cursor-pointer p-5 inline-flex justify-center" onClick={handleCharNavigate} variant={"outline"}><User size={20} className="inline" /> Meet Characters</Button>
                    </article>
                </div>
            </div>

            <div className="grid gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-x-4">
                <HomeCard title="Books"
                    description="Explore the Harry Potter book series"
                    content="Discover details about all seven books in the Harry Potter series, including summaries and publication dates."
                    footer="View Books"
                    icon={<BookOpen size={20} className="inline" />}
                    route="/books"
                />

                <HomeCard title="Characters"
                    description="Meet the wizards and witches"
                    content="Browse through the characters from the Harry Potter universe, including their backgrounds and affiliations."
                    footer="View Characters"
                    icon={<User size={20} className="inline" />}
                    route="/characters"
                />

                <HomeCard title="Spells"
                    description="Learn magical incantations"
                    content="Discover the various spells used in the wizarding world, their effects, and how they're cast."
                    footer="View Spells"
                    icon={<WandSparkles size={20} className="inline" mb-8 />}
                    route="/spells"
                />

                <HomeCard title="Houses"
                    description="Explore Hogwarts houses"
                    content="Learn about the four houses of Hogwarts School of Witchcraft and Wizardry and their unique traits."
                    footer={<span className="block">View Houses</span>}
                    icon={<Castle size={20} className="inline" />}
                    route="/houses"

                />

            </div>
        </div>
    )
}

export default Home