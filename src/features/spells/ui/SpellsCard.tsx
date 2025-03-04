import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WandSparkles } from "lucide-react"
type SpellsType = {
    spell: string,
    use: string,
    index: number
}
const SpellsCard: React.FC<{ spells: SpellsType }> = ({ spells }) => (

    <Card className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden py-0 pb-6">
        <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
        <CardHeader className="space-y-1.5 ">
            <div className="flex items-center justify-between">
                <CardTitle className="tracking-tight text-lg" >{spells.spell}</CardTitle>
                <WandSparkles size={24} className="text-muted-foreground" />
            </div>
            <CardDescription className="flex items-center gap-2" >

                <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  text-primary-foreground
                      ${spells.index % 2 != 0 ? "bg-primary hover:bg-primary/80" : "bg-destructive hover:bg-destructive/80"}`}>
                    {spells.index % 2 != 0 ? "Charm" : "Curse"}
                </div>
                <span>•</span>
                <span>Easy</span>
            </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
            <div className="space-y-2">
                <div>
                    <span className="text-sm font-medium">Incantation: </span>
                    <span className="text-sm italic text-muted-foreground">Expelliarmus</span>
                </div>
                <div>
                    <span className="text-sm font-medium">Effect: </span>
                    <span className="text-sm italic text-muted-foreground">Disarms your opponent</span>
                </div>
                <div>
                    <span className="text-sm font-medium">Light: </span>
                    <span className="text-sm italic text-muted-foreground">Red</span>
                </div>
            </div>
        </CardContent>
    </Card>
)

export default SpellsCard
