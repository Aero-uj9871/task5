import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '@/features/houses/houseSlice';
import { RootState, AppDispatch } from '@/redux/store';
import HouseCard from '@/features/houses/ui/HousesCard';
import { useLoading } from '@/components/context/LoadingProvider';

const Houses = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { houses, error } = useSelector((state: RootState) => state.houses);
    const { startLoading, stopLoading } = useLoading();

    useEffect(() => {
        startLoading();
        dispatch(fetchHouses()).finally(stopLoading);
    }, [dispatch]);

    if (error) return <h1>Something Went Wrong</h1>;

    return (
        <section className="w-[95%] mx-auto py-10 px-8 mb-25">
            <article className='flex flex-col items-center text-center mb-2'>
                <h1 className='text-3xl tracking-tight font-bold lg:text-4xl mb-4'>Hogwarts Houses</h1>
                <p className='tracking-wide text-lg text-muted-foreground max-w-[700px] mb-8'>
                    Learn about the four houses of Hogwarts School of Witchcraft and Wizardry.
                </p>
            </article>
            <article className='grid gap-8'>
                <HouseCard houses={houses} />
            </article>
        </section>
    );
};

export default Houses;
