import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {useState} from "react";

export function ModeToggle() {
    const { setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("dark") ;

    return (
        <Button onClick={()=> {
            const changes = getChanges(currentTheme)
            
            setCurrentTheme(changes)
            setTheme(changes)
        }}>
            {currentTheme === "dark" ? (
                <Moon />
            ) : (
                <Sun />
            )}
        </Button>
    )
}

function getChanges(currentTheme: string) {
    return currentTheme === 'dark' ? 'light' : 'dark';
}

