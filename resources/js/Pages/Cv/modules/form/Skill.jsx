import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { router } from "@inertiajs/react";
import { ArrowLeft, ArrowRight, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const dataObject = {
    skillName: "",
    level: "",
};

export default function Skill({ nextStep, position }) {
    const [dataForm, setDataForm] = useState([{ ...dataObject }]);
    const [countSkill, setCountSkill] = useState(1);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (countSkill === 1) return;
        setDataForm((prev) => [...prev, { ...dataObject }]);
    }, [countSkill]);

    const isValid = dataForm.every((data) => {
        return data.skillName.trim() !== "" && data.level.trim() !== "";
    });

    useEffect(() => {
        if (isValid) setDisabled(false);
        else setDisabled(true);
    }, [dataForm]);

    const handleFormDataSkillName = (e, index) => {
        const allData = [...dataForm];
        allData[index] = {
            ...allData[index],
            skillName: e.target.value,
        };
        setDataForm(allData);
    };

    const handleChangeSelectLevel = (index, value) => {
        const allData = [...dataForm];
        allData[index] = {
            ...allData[index],
            level: value,
        };
        setDataForm(allData);
    };

    const handleRemoveSkill = (index) => {
        const allData = dataForm.filter((_, idx) => idx !== index);
        setCountSkill((prev) => prev - 1);
        setDataForm(allData);
    };

    const handleSubmit = () => {
        setDisabled(true);
        try {
            router.post(
                "/cv-form/skill-post",
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
            <h2 className="font-semibold pb-5">Skills</h2>

            {dataForm.map((data, index) => (
                <div key={index} className={index == 0 ? "" : "mt-10"}>
                    <div className="flex gap-2">
                        <Input
                            id={`skill-${index}`}
                            placeholder="Skill"
                            type="text"
                            name="skill"
                            value={data.skillName}
                            onChange={(e) => handleFormDataSkillName(e, index)}
                        />
                        <Select
                            onValueChange={(val) =>
                                handleChangeSelectLevel(index, val)
                            }
                            value={data.level}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="basic">Basic</SelectItem>
                                <SelectItem value="advanced">
                                    Advanced
                                </SelectItem>
                                <SelectItem value="experted">
                                    Experted
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        {index > 0 ? (
                            <Button onClick={() => handleRemoveSkill(index)}>
                                <XIcon />
                            </Button>
                        ) : (
                            <Button className={"opacity-0"}>
                                <XIcon />
                            </Button>
                        )}
                    </div>
                </div>
            ))}

            <div className="w-full flex justify-end mt-5">
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
