import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
        variant={"ghost"}
        size={"nopadding"}
        className={"hover:cursor-pointer p-1"}>

            {theme === "dark" ? <Moon /> : <Sun /> }

        </Button>
    )
}

