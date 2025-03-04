import { useEffect } from 'react'
// import api from "@/api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from '@/features/books/bookSlice';
import { RootState, AppDispatch } from "@/redux/store";
import BookCard from '@/features/books/ui/BookCard';
import { useLoading } from '@/components/context/LoadingProvider';


const Books = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { books, error } = useSelector((state: RootState) => state.books);
    const { startLoading, stopLoading } = useLoading();

    useEffect(() => {
        startLoading();
        dispatch(fetchBooks()).finally(stopLoading);
    }, [dispatch]);


    if (error) return <h1>Something Went Wrong</h1>
    console.log(books)
    return (
        <section className="w-[95%] mx-auto py-10 px-8 " >
            <article className='flex flex-col items-center text-center mb-12'>
                <h1 className=' font-inter text-3xl tracking-tight font-bold lg:text-4xl mb-4'>Harry Potter Books</h1>
                <p className='text-lg text-muted-foreground max-w-[700px] font-[18px] '>Explore the complete Harry Potter book series by J.K. Rowling.</p>
            </article>
            <article className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {books.map((book, index) => (
                    <BookCard book={book} index={index} />
                ))}
            </article>
        </section>
    )
}

export default Books
