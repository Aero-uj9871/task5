import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
type HouseType={
    "house": string,
    "emoji": string,
    "founder": string,
    "colors": string[],
    "animal": string,
    "index": number
}
const HousesCard:React.FC<{houses:HouseType[]}> = ({houses}) => {
  return (
    <div>
        {
            houses.map((house)=>(
                <Card className="overflow-hidden py-0 my-6 h-[25%]">
                <CardHeader className={` p-6 text-white house-${house.house.toLowerCase()}`}>
                    <CardTitle className="text-3xl font-bold">{house.house}</CardTitle>
                    <CardDescription className="dark:text-foreground text-accent text-lg opacity-90">{house.founder}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">About</h3>
                        <p className="text-muted-foreground">Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colors are scarlet and gold. Minerva McGonagall is the most recent Head of Gryffindor</p>
                        <div className="mt-4">
                        <h4 className="font-medium mb-1 ">House Traits</h4>
                        <div className="flex flex-wrap gap-2">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Bravery</div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Courage</div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Nerve</div>
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">Chilvary</div>
                        </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium mb-1">House Details</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>
                                    <span className="font-medium">Colors: </span>
                                    {house.colors}
                                </li>
                                <li>
                                    <span className="font-medium">Mascot: </span>
                                    {house.animal}
                                </li>
                                <li>
                                    <span className="font-medium">Element:  </span>
                                    Fire
                                </li>
                                <li>
                                    <span className="font-medium">Common Room: </span>
                                    Gryffindor Tower
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-1">Notable Members</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>
                                    Scarlet and gold
                                </li>
                                <li>
                                    Lion
                                </li>
                                <li>
                                    Fire
                                </li>
                                <li>
                                    Gryffindor Tower
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
            ))
        }
    </div>
  )
}

export default HousesCard