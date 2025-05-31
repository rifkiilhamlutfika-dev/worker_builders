import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CourseTraining() {
    return (
        <div className="pt-20 pb-10">
            <h2 className="font-semibold pb-5">
                Certificate Course & Trainings
            </h2>

            <div>
                <div>
                    <Label htmlFor="certificateName" className="mb-2">
                        Certificate Name
                    </Label>
                    <Input
                        className=""
                        id="certificateName"
                        placeholder="Certificate Name"
                        type="text"
                    />
                </div>

                <div className="flex items-center pt-3 gap-5">
                    <div className="w-2/3">
                        <Label htmlFor="organizerName" className="mb-2">
                            Organizer Name
                        </Label>
                        <Input
                            className=""
                            id="organizerName"
                            placeholder="Organizer Name"
                            type="text"
                        />
                    </div>
                    <div className="w-1/3">
                        <div>
                            <Label htmlFor="date-certficate" className="mb-2">
                                Date
                            </Label>
                            <div className="flex items-center gap-2 w-full">
                                <Input
                                    className="w-full"
                                    id="date-certificate-valid"
                                    placeholder="Valid"
                                    type="date"
                                />
                                -
                                <Input
                                    className="w-full"
                                    id="date-certificate-expired"
                                    placeholder="Expired"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-3">
                    <Label htmlFor="description-certificate" className="mb-2">
                        Description
                    </Label>
                    <Textarea
                        className="min-h-28"
                        id="description-certificate"
                        placeholder="Tell your description when you at course or training"
                    ></Textarea>
                </div>
            </div>

            <Button className="bg-transparent mt-5 text-xs p-0 hover:bg-transparent text-black shadow-transparent">
                Add Certificate
            </Button>

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
