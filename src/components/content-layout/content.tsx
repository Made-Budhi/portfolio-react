import Profile from "@/components/content-layout/profile.tsx";
import Projects from "@/components/content-layout/projects.tsx";
import Skills from "@/components/content-layout/skills.tsx";
import Educations from "@/components/content-layout/educations.tsx";
import Certificates from "@/components/content-layout/certificates.tsx";
import Footer from "@/components/content-layout/footer.tsx";

function Content() {
    return (
        <section className={"flex flex-col gap-8 lg:w-2/3"}>
            <Profile />
            <Projects />
            <Skills />
            <Educations />
            <Certificates />
            <Footer />
        </section>
    )
}

export default Content;