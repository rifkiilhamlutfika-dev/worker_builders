import PageLayout from "@/components/modules/PageLayout";
import UserForm from "./modules/form/UserForm";
import Progres from "./modules/form/Progres";
import { useState } from "react";
import AboutMe from "./modules/form/AboutMe";
import Educational from "./modules/form/EducationalForm";
import Experience from "./modules/form/Experience";
import Skill from "./modules/form/Skill";
import SocialMedia from "./modules/form/SocialMedia";
import CourseTraining from "./modules/form/CourseTraining";

export default function CvForm() {
    const [progres, setProgres] = useState(1);
    const [dataForm, setDataForm] = useState([
        {
            progres: 1,
            completed: false,
        },
        {
            progres: 2,
            completed: false,
        },
        {
            progres: 3,
            completed: false,
        },
        {
            progres: 4,
            completed: false,
        },
        {
            progres: 5,
            completed: false,
        },
        {
            progres: 6,
            completed: false,
        },
        {
            progres: 7,
            completed: false,
        },
        {
            progres: 8,
            completed: false,
        },
    ]);

    const handleChangeStatus = (index) => {
        setDataForm((prev) => (prev[index].completed = true));
    };

    return (
        <PageLayout pageName="CV Form">
            <Progres setProgres={setProgres} />

            {progres == 1 && (
                <UserForm
                    nextStep={setProgres}
                    completed={handleChangeStatus}
                />
            )}
            {progres == 2 && <AboutMe />}
            {progres == 3 && <Educational />}
            {progres == 4 && <Experience />}
            {progres == 5 && <Skill />}
            {progres == 6 && <CourseTraining />}
            {progres == 7 && <SocialMedia />}
            {progres == 8 && <UserForm />}
        </PageLayout>
    );
}
