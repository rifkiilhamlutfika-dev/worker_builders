import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Experience() {
    return (
        <div className="pt-20 pb-10">
            <h2 className="font-semibold pb-5">Experiences</h2>

            <Button className="bg-transparent mb-3 text-xs p-0 hover:bg-transparent text-black shadow-transparent">
                Add Experience
            </Button>
            <div>
                <div>
                    <Label htmlFor="jobTitle" className="mb-2">
                        Job Title
                    </Label>
                    <Input
                        className=""
                        id="jobTitle"
                        placeholder="Job Title"
                        type="text"
                    />
                </div>

                <div className="flex items-center pt-3 gap-5">
                    <div className="w-2/3">
                        <Label htmlFor="companyName" className="mb-2">
                            Company Name
                        </Label>
                        <Input
                            className=""
                            id="companyName"
                            placeholder="Company Name"
                            type="text"
                        />
                    </div>
                    <div className="w-1/3">
                        <div>
                            <Label htmlFor="date-experience" className="mb-2">
                                Date
                            </Label>
                            <div className="flex items-center gap-2 w-full">
                                <Input
                                    className="w-full"
                                    id="date-experience-start"
                                    placeholder="Start"
                                    type="date"
                                />
                                -
                                <Input
                                    className="w-full"
                                    id="date-experience-end"
                                    placeholder="End"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <Label htmlFor="description-education" className="mb-2">
                        Description
                    </Label>
                    <Textarea
                        className="min-h-28"
                        id="description-education"
                        placeholder="Tell your description when you in study.."
                        min="0"
                        type="number"
                    ></Textarea>
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
