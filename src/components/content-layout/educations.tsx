const educations = [
    {
        course: "Software Engineering",
        university: "Politeknik Negeri Bali",
        time_start: "Sep 2022",
        time_end: "Present",
        achievements: ['Received Best Project award two times during project-based learning.']
    },
    {
        course: "AI & Software",
        university: "Coventry University",
        time_start: "Sep 2024",
        time_end: "Dec 2024",
        achievements: ['Participated in a one-semester exchange program.']
    }
]

function Educations() {
    return (
        <section id="education">
            <h1 className={"mb-2 font-bold text-xl"}>Educations</h1>

            {educations.map((education) => (
                <>
                    <div className={"flex items-end gap-5 mt-5"}>
                        <div className="bg-black size-3 rounded-full dark:bg-white"></div>
                        <div className={"w-full flex justify-between"}>
                            <h1 className={"font-semibold text-sm"}>{education.course} @ {education.university}</h1>
                            <p className={"italic text-gray-400 text-xs lg:text-sm"}>{education.time_start} – {education.time_end}</p>
                        </div>
                    </div>
                    <div className={"ml-8"}>
                        {education.achievements.map((achievement) => (
                            <p className={"text-sm"}>{achievement}</p>
                        ))}
                    </div>
                </>
            ))}

        </section>
    )
}

export default Educations;