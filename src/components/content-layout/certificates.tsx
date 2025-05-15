import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Dialog, DialogContent, DialogTrigger, DialogHeader} from "@/components/ui/dialog.tsx";

const certificates = [
    {
        title: "Junior Web Programming",
        issuer: "LSP TIK Indonesia",
        time_start: "Oct 2024",
        time_end: "Oct 2027",
        file: "/certificates/junior_web_programming.pdf",
        description: "Certificate of Competence with qualification/competency of Junior Web Programmer.",
    },
    {
        title: "TOEIC",
        issuer: "ETS",
        time_start: "Aug 2024",
        time_end: "Aug 2026",
        file: "/certificates/toeic.pdf",
        description: "Test of English for International Communication, achieving an overall score of 925."
    }
]

function Certificates() {
    return (
        <section id="certificates">
            <h1 className={"mb-2 font-bold text-xl"}>Certificates</h1>

            <div className={"space-y-3"}>
                {certificates.map((certificate) => (
                    <Card>
                        <CardHeader className={""}>
                            <div className={"flex justify-between items-end"}>
                                <CardTitle>{certificate.title}</CardTitle>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant={"link"} size={"nopadding"} className={"text-blue-500 italic hover:cursor-pointer"}>view certificate</Button>
                                    </DialogTrigger>
                                    <DialogContent className="">
                                        <DialogHeader><em>{certificate.title}</em></DialogHeader>
                                        <object data={certificate.file} type="application/pdf" height={"500px"} width={""} className={"w-full"}></object>
                                    </DialogContent>
                                </Dialog>
                            </div>
                            <CardDescription className={"underline"}>
                                <span className={"italic text-sm"}>issued by:</span> {certificate.issuer}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                {certificate.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Certificates;