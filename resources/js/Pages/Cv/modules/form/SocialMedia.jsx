import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    ArrowLeft,
    ArrowRight,
    InstagramIcon,
    LinkedinIcon,
    LucideGithub,
    YoutubeIcon,
} from "lucide-react";

export default function SocialMedia() {
    return (
        <div className="pt-20 pb-10">
            <h2 className="font-semibold pb-5">Social Media</h2>

            <div>
                <div>
                    <Label htmlFor="github-link" className="mb-2">
                        <LucideGithub /> Github
                    </Label>
                    <Input
                        className=""
                        id="github-link"
                        placeholder="Github Link"
                        type="text"
                    />
                </div>

                <div className="mt-5">
                    <Label htmlFor="linked-link" className="mb-2">
                        <LinkedinIcon /> Linkedin
                    </Label>
                    <Input
                        className=""
                        id="linked-link"
                        placeholder="Linked Link"
                        type="text"
                    />
                </div>

                <div className="mt-5">
                    <Label htmlFor="instagram-link" className="mb-2">
                        <InstagramIcon /> Instagram
                    </Label>
                    <Input
                        className=""
                        id="instagram-link"
                        placeholder="Instagram Link"
                        type="text"
                    />
                </div>

                <div className="mt-5">
                    <Label htmlFor="youtube-link" className="mb-2">
                        <YoutubeIcon /> Youtube
                    </Label>
                    <Input
                        className=""
                        id="youtube-link"
                        placeholder="Youtube Link"
                        type="text"
                    />
                </div>
            </div>

            <div className="w-full flex justify-between">
                <Button className="mt-10 w-1/3">
                    <ArrowLeft />
                    Prev Step
                </Button>
                <Button className="mt-10 w-1/3">
                    Next Step <ArrowRight />
                </Button>
            </div>
        </div>
    );
}
