import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { router } from "@inertiajs/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const dataObject = {
    certificateName: "200",
    organizerName: "asd",
    start: "2005-09-14",
    end: "",
    description: "",
};

export default function CourseTraining({ nextStep, position }) {
    const [dataForm, setDataForm] = useState([{ ...dataObject }]);
    const [countSkill, setCountSkill] = useState(1);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (countSkill === 1) return;
        setDataForm((prev) => [...prev, { ...dataObject }]);
    }, [countSkill]);

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
            data.certificateName.trim() !== "" &&
            data.organizerName.trim() !== "" &&
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
                "/cv-form/course-training-post",
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
            <h2 className="font-semibold pb-5">
                Certificate Course & Trainings
            </h2>

            {dataForm.map((data, index) => (
                <div key={index} className={index > 0 ? "mt-10" : ""}>
                    <div>
                        <Label htmlFor="certificateName" className="mb-2">
                            Certificate Name
                        </Label>
                        <Input
                            id="certificateName"
                            placeholder="Certificate Name"
                            type="text"
                            name="certificateName"
                            value={data.certificateName}
                            onChange={(e) =>
                                handleFormData(e, index, "certificateName")
                            }
                        />
                    </div>

                    <div className="flex items-center pt-3 gap-5">
                        <div className="w-2/3">
                            <Label htmlFor="organizerName" className="mb-2">
                                Organizer Name
                            </Label>
                            <Input
                                id="organizerName"
                                placeholder="Organizer Name"
                                type="text"
                                name="organizerName"
                                value={data.organizerName}
                                onChange={(e) =>
                                    handleFormData(e, index, "organizerName")
                                }
                            />
                        </div>
                        <div className="w-1/3">
                            <div>
                                <Label
                                    htmlFor={`certficate-valid-${index}`}
                                    className="mb-2"
                                >
                                    Date
                                </Label>
                                <div className="flex items-center gap-2 w-full">
                                    <Input
                                        className="w-full"
                                        id={`certficate-valid-${index}`}
                                        placeholder="Valid"
                                        type="date"
                                        name={`certficate-valid-${index}`}
                                        value={data.start}
                                        onChange={(e) =>
                                            handleFormData(e, index, "start")
                                        }
                                    />
                                    -
                                    <Input
                                        className="w-full"
                                        id={`certficate-expired-${index}`}
                                        placeholder="Expired"
                                        type="date"
                                        name={`certficate-expired-${index}`}
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
                        <Label
                            htmlFor="description-certificate"
                            className="mb-2"
                        >
                            Description
                        </Label>
                        <Textarea
                            className="min-h-28"
                            id="description-certificate"
                            placeholder="Tell your description when you at course or training"
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
                    onClick={() => setCountSkill((prev) => prev + 1)}
                >
                    Add Skill +
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
                    onClick={handleSubmit}
                >
                    Next Step <ArrowRight />
                </Button>
            </div>
        </div>
    );
}
