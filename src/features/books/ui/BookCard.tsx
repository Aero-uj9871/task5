// import harry from "@/assets/Harry_Potter_character_poster.jpg"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  type BookType = {
    number: number;
    title: string;
    originalTitle: string;
    releaseDate: string;
    description: string;
    pages: number;
    cover: string;
    index: number;
  }
const BookCard:React.FC<{book:BookType,index:number}> = ({book,index}) => {
    const shortDescription=(description:string,limit:number)=>{
        return description.split(" ").slice(0,limit).join(" ")
    }
  return (
        <Card key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col py-0 gap-y-0  ">
            {/* Gradient header */}
            <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>

            {/* Card Header */}
            <CardHeader className="flex flex-col space-y-1.5 p-6">
                <CardTitle className="text-2xl font-inter font-semibold leading-none tracking-tight">
                {book.title}
                </CardTitle>
                <CardDescription>
                    <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                        {book.releaseDate}
                    </p>
                </CardDescription>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="flex flex-col sm:flex-row gap-4 items-center px-6 pb-4">
                <img 
                    src={book.cover} 
                    alt="Harry Potter Cover" 
                    className="rounded-md w-32 h-48 object-cover shadow-md"
                />
                <p className="text-sm text-muted-foreground text-left">
                    {shortDescription(book.description,20)}
                </p>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="flex items-center p-6 pt-0">
                <div className="text-xs text-muted-foreground">Book {book.number} in the series</div>
            </CardFooter>
        </Card>
  )
}

export default BookCard