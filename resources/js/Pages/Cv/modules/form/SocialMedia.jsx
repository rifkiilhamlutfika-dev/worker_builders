import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { router } from "@inertiajs/react";
import {
    ArrowLeft,
    ArrowRight,
    InstagramIcon,
    LinkedinIcon,
    LucideGithub,
    YoutubeIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const dataObject = {
    github: "",
    linkedin: "",
    instagram: "",
    youtube: "",
};

export default function SocialMedia({ nextStep, position }) {
    const [dataForm, setDataForm] = useState(dataObject);
    const [disabled, setDisabled] = useState(false);

    const handleFormData = (e, field) => {
        setDataForm((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        setDisabled(true);
        try {
            router.post(
                "/cv-form/social-media-post",
                { dataForm: dataForm },
                {
                    onSuccess: () => {
                        toast("next step");
                        nextStep((prev) => prev + 1);
                        position((prev) => prev + 1);
                    },
                    onError: (error) => {
                        console.log(error);
                    },
                    onFinish: () => {
                        setDisabled(false);
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handlePrev = () => {
        position((prev) => prev - 1);
    };

    return (
        <div className="pb-10">
            <h2 className="font-semibold pb-5">Social Media</h2>

            <div>
                <div>
                    <Label htmlFor="github-link" className="mb-2">
                        <LucideGithub /> Github
                    </Label>
                    <Input
                        id="github-link"
                        placeholder="Github Link"
                        type="text"
                        name="github"
                        value={dataForm.github}
                        onChange={(e) => handleFormData(e, "github")}
                    />
                </div>

                <div className="mt-5">
                    <Label htmlFor="linked-link" className="mb-2">
                        <LinkedinIcon /> Linkedin
                    </Label>
                    <Input
                        id="linked-link"
                        placeholder="Linked Link"
                        type="text"
                        name="linkedin"
                        value={dataForm.linkedin}
                        onChange={(e) => handleFormData(e, "linkedin")}
                    />
                </div>

                <div className="mt-5">
                    <Label htmlFor="instagram-link" className="mb-2">
                        <InstagramIcon /> Instagram
                    </Label>
                    <Input
                        id="instagram-link"
                        placeholder="Instagram Link"
                        type="text"
                        name="instagram"
                        value={dataForm.instagram}
                        onChange={(e) => handleFormData(e, "instagram")}
                    />
                </div>

                <div className="mt-5">
                    <Label htmlFor="youtube-link" className="mb-2">
                        <YoutubeIcon /> Youtube
                    </Label>
                    <Input
                        id="youtube-link"
                        placeholder="Youtube Link"
                        type="text"
                        name="youtube"
                        value={dataForm.youtube}
                        onChange={(e) => handleFormData(e, "youtube")}
                    />
                </div>
            </div>

            <div className="w-full flex justify-between">
                <Button className="mt-10 w-1/3" onClick={handlePrev}>
                    <ArrowLeft />
                    Prev Step
                </Button>
                <Button className="mt-10 w-1/3" onClick={handleSubmit}>
                    Next Step <ArrowRight />
                </Button>
            </div>
        </div>
    );
}
