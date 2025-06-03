import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { router } from "@inertiajs/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const dataObject = {
    schoolName: "asd",
    major: "asd",
    start: "2002",
    end: "",
    finalScore: 0.0,
    description: "",
};

export default function Educational({ nextStep, position }) {
    const [dataForm, setDataForm] = useState([{ ...dataObject }]);
    const [countDataSchool, setCountDataSchool] = useState(1);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (countDataSchool === 1) return;
        setDataForm((prev) => [...prev, { ...dataObject }]);
    }, [countDataSchool]);

    const handleFormData = (e, index, input) => {
        const allData = [...dataForm];
        allData[index] = {
            ...allData[index],
            [input]: e.target.value,
        };
        setDataForm(allData);
    };

    const isValid = dataForm.every((data) => {
        return (
            data.schoolName.trim() !== "" &&
            data.major.trim() !== "" &&
            data.start.trim() !== ""
        );
    });

    useEffect(() => {
        if (isValid) setDisabled(false);
        else setDisabled(true);
    }, [dataForm]);

    const handleSubmit = () => {
        setDisabled(true);
        try {
            router.post(
                "/cv-form/education-post",
                { dataForm: dataForm },
                {
                    onSuccess: () => {
                        toast("next step");
                        nextStep(4);
                        position(4);
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
            <h2 className="font-semibold pb-5">Educational</h2>

            {dataForm.map((data, index) => (
                <div key={index} className="mt-5">
                    <div>
                        <Label htmlFor="schoolName" className="mb-2">
                            School Name
                        </Label>
                        <Input
                            className=""
                            id="schoolName"
                            placeholder="School Name"
                            name="schoolName"
                            value={data.schoolName}
                            onChange={(e) =>
                                handleFormData(e, index, "schoolName")
                            }
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
                                name="major"
                                value={data.major}
                                onChange={(e) =>
                                    handleFormData(e, index, "major")
                                }
                                type="text"
                            />
                        </div>
                        <div className="w-1/3">
                            <div>
                                <Label
                                    htmlFor="years-educational"
                                    className="mb-2"
                                >
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
                                        name="start"
                                        value={data.start}
                                        onChange={(e) =>
                                            handleFormData(e, index, "start")
                                        }
                                    />
                                    -
                                    <Input
                                        className="w-full"
                                        id="years-educational-end"
                                        placeholder="End"
                                        min="1900"
                                        max="2099"
                                        type="number"
                                        name="start"
                                        value={data.end}
                                        onChange={(e) =>
                                            handleFormData(e, index, "end")
                                        }
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
                            min="0.0"
                            type="number"
                            name="finalScore"
                            value={data.finalScore}
                            onChange={(e) =>
                                handleFormData(e, index, "finalScore")
                            }
                        />
                    </div>

                    <div className="pt-3">
                        <Label htmlFor="description-education" className="mb-2">
                            Description
                        </Label>
                        <Textarea
                            className="min-h-28 w-full"
                            id="description-education"
                            placeholder="Tell your description when you in study.."
                            min="0"
                            type="number"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                handleFormData(e, index, "description")
                            }
                        ></Textarea>
                    </div>
                </div>
            ))}

            <div className="w-full flex justify-end">
                <Button
                    className="bg-transparent mb-3 text-xs p-0 hover:bg-transparent text-black shadow-transparent hover:text-blue-400 duration-300"
                    onClick={() => setCountDataSchool((prev) => prev + 1)}
                >
                    Add School +
                </Button>
            </div>

            <div className="w-full flex justify-between">
                <Button className="mt-10 w-1/3" onClick={handlePrev}>
                    <ArrowLeft />
                    Prev Step
                </Button>
                <Button
                    className="mt-10 w-1/3"
                    disabled={disabled}
                    type="submit"
                    onClick={handleSubmit}
                >
                    Next Step <ArrowRight />
                </Button>
            </div>
        </div>
    );
}
