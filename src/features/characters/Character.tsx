import { useEffect, useState } from 'react';
import api from '@/api/api';
import TabBar from './ui/TabBar';
import { useLoading } from '@/components/context/LoadingProvider';


const Characters = () => {
    const { startLoading, stopLoading } = useLoading();
    const [characters, setCharacters] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        const getCharacters = async () => {
            startLoading();
            setErr("");
            try {
                const bookResponse = await api.get('/characters');
                setCharacters(bookResponse.data);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log("Unknown error", error);
                }
            } finally {
                stopLoading();
            }
        };

        getCharacters();
    }, []);

    if (err) return <h1>Something Went Wrong</h1>;
    console.log(characters);

    return (
        <section className="w-[90%] md:w-[100%] mx-auto py-10 px-6 ">
            <article className='flex flex-col items-center text-center mb-12'>
                <h1 className='text-3xl tracking-tight font-bold lg:text-4xl mb-4'>Harry Potter Characters</h1>
                <p className='tracking-wide text-lg text-muted-foreground max-w-[700px] font-[18px] '>Meet the witches, wizards, and magical creatures from the wizarding world.</p>
            </article>
            <article className='lg:w-[100%]'>
                <TabBar characters={characters} />
            </article>
        </section>
    );
};

export default Characters;
