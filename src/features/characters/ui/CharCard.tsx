import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  type CharacterType = {
    fullName: string;
    nickname: string;
    hogwartsHouse: string;
    interpretedBy: string;
    children: string[];
    image: string;
    birthdate: string;
    index: number;
  };
const CharacterCard:React.FC<{character:CharacterType ,index:number}> = ({character,index}) => {


  function getFirstAndLastName(nickname:string,fullName?: string): string {
    if (!fullName || typeof fullName !== "string") {
        return nickname; 
    }

    const parts = fullName.trim().split(/\s+/);

    if (parts.length > 2) {
        return `${parts[0]} ${parts[parts.length - 1]}`;
    }
    return fullName;
}

const getInitials = (name: string) => {
    const parts = name.split(" "); // Split the name into an array of words
  
    // If there are more than two words, take the first and last word for initials
    if (parts.length > 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
  
    // Otherwise, just take the first letter of each word (for single or two-word names)
    return parts.map(word => word[0]).join("").toUpperCase().slice(0, 2);
  };
  

  return (
    <Card key={index} className="rounded-xl border shadow-sm overflow-hidden py-0 gap-6">
      <div className={`h-2 house-${character.hogwartsHouse.toLowerCase()}`}></div>
      <CardHeader className="flex flex-row items-center gap-4 px-2">
        <div className={`relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 house-${character.hogwartsHouse.toLowerCase()} text-foreground`}>
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">{getInitials(character.fullName)}</div>
        </div>
        <div>
          <CardTitle className="text-lg">{getFirstAndLastName(character.nickname,character.fullName)}</CardTitle>
          <CardDescription className="flex items-center gap-2 lg:gap-1">
            <span className="inline-flex items-center rounded-full border px-1.5 text-xs font-semibold text-foreground">{character.hogwartsHouse}</span>
            <li className="disc text-nowrap"><span className="text-sm  lg:mr-0">Student</span></li>
            {/* <span>Student</span> */}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm text-muted-foreground">The Boy Who Lived, known for his lightning scar and being the chosen one to defeat Lord Voldemort.</p>
      </CardContent>
      <CardFooter className="flex items-center pb-4">
        <div className="text-xs text-muted-foreground">Blood status: Half-blood</div>
      </CardFooter>
    </Card>
  )
}

export default CharacterCard