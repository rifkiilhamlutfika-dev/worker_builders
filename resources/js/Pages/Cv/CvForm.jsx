import { useState } from "react";
import PageLayout from "@/components/modules/PageLayout";
import UserForm from "./modules/form/UserForm";
import Progres from "./modules/form/Progres";
import Educational from "./modules/form/Educational";
import Experience from "./modules/form/Experience";
import Skill from "./modules/form/Skill";
import SocialMedia from "./modules/form/SocialMedia";
import CourseTraining from "./modules/form/CourseTraining";
import Summary from "./modules/form/Summary";
import CheckForm from "./modules/form/CheckForm";

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
            {position == 4 && (
                <Experience nextStep={setProgres} position={setPosition} />
            )}
            {position == 5 && (
                <Skill nextStep={setProgres} position={setPosition} />
            )}
            {position == 6 && (
                <CourseTraining nextStep={setProgres} position={setPosition} />
            )}
            {position == 7 && (
                <SocialMedia nextStep={setProgres} position={setPosition} />
            )}
            {position == 8 && <CheckForm />}
        </PageLayout>
    );
}
