import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Educational() {
    return (
        <div className="pt-20 pb-10">
            <h2 className="font-semibold pb-5">Educational</h2>

            <Button className="bg-transparent mb-3 text-xs p-0 hover:bg-transparent text-black shadow-transparent">
                Add School
            </Button>
            <div>
                <div>
                    <Label htmlFor="schoolName" className="mb-2">
                        School Name
                    </Label>
                    <Input
                        className=""
                        id="schoolName"
                        placeholder="School Name"
                        type="text"
                    />
                </div>

                <div className="flex items-center pt-3 gap-5">
                    <div className="w-2/3">
                        <Label htmlFor="major" className="mb-2">
                            Major
                        </Label>
                        <Input
                            className=""
                            id="major"
                            placeholder="Major"
                            type="text"
                        />
                    </div>
                    <div className="w-1/3">
                        <div>
                            <Label htmlFor="years-educational" className="mb-2">
                                Years
                            </Label>
                            <div className="flex items-center gap-2 w-full">
                                <Input
                                    className="w-full"
                                    id="years-educational-start"
                                    placeholder="Start"
                                    min="1900"
                                    max="2099"
                                    type="number"
                                />
                                -
                                <Input
                                    className="w-full"
                                    id="years-educational-end"
                                    placeholder="End"
                                    min="1900"
                                    max="2099"
                                    type="number"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <Label htmlFor="finalScore" className="mb-2">
                        Final Score
                    </Label>
                    <Input
                        className=""
                        id="finalScore"
                        placeholder="Final Score"
                        min="0"
                        type="number"
                    />
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
