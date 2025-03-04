import { Button } from "@/components/ui/button"
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom";

interface HomeCardProps {
  title: string;
  description: string;
  content: string;
  footer: string | React.ReactNode;
  icon?: ReactNode;
  route: string
}

const HomeCard: React.FC<HomeCardProps> = ({ title, description, content, footer, icon, route }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(route);
  };
  return (

    <Card className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden py-0 pb-6">
      <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          {icon && <span className="mr-2">{icon}</span>}
          {title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="py-4 w-[90%] text-left text-base" >{content}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleNavigate} variant={"ghost"} className="w-full mt-4 cursor-pointer  hover:bg-foreground dark:hover:text-foreground hover:text-accent dark:hover:bg-muted">{footer}</Button>
      </CardFooter>
    </Card>

  )
}

export default HomeCard