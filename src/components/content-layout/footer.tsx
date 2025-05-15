import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";

function Footer() {
    return (
        <section id={"footer"}>
            <Separator className={"mt-10"} />

            <div className={"py-10 text-sm w-full text-center"}>
                <h1>&copy; 2025. Built with love by <Button variant={"link"} size={"nopadding"}>Made Budhi</Button></h1>
            </div>
        </section>
    )
}

export default Footer;