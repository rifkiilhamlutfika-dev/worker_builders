import PageLayout from "@/components/modules/PageLayout";
import UserForm from "./modules/form/UserForm";
import Progres from "./modules/form/Progres";
import { useState } from "react";
import AboutMe from "./modules/form/Summary";
import Educational from "./modules/form/EducationalForm";
import Experience from "./modules/form/Experience";
import Skill from "./modules/form/Skill";
import SocialMedia from "./modules/form/SocialMedia";
import CourseTraining from "./modules/form/CourseTraining";
import Summary from "./modules/form/Summary";

export default function CvForm() {
    const [progres, setProgres] = useState(1);
    const [position, setPosition] = useState(1);

    return (
        <PageLayout pageName="CV Form">
            <Progres
                setPosition={setPosition}
                dataProgres={progres}
                position={position}
            />

            {position == 1 && (
                <UserForm nextStep={setProgres} position={setPosition} />
            )}
            {position == 2 && (
                <Summary nextStep={setProgres} position={setPosition} />
            )}
            {position == 3 && (
                <Educational nextStep={setProgres} position={setPosition} />
            )}
            {position == 4 && <Experience />}
            {position == 5 && <Skill />}
            {position == 6 && <CourseTraining />}
            {position == 7 && <SocialMedia />}
            {position == 8 && <UserForm />}
        </PageLayout>
    );
}
