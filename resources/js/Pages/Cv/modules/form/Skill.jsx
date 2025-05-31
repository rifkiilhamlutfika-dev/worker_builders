import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, XIcon } from "lucide-react";

export default function Skill() {
    return (
        <div className="pt-20 pb-10">
            <h2 className="font-semibold pb-5">Skills</h2>

            <div>
                <div className="flex gap-2">
                    <Input
                        className=""
                        id="skill"
                        placeholder="Skill"
                        type="text"
                    />

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="experted">Experted</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button>
                        <XIcon />
                    </Button>
                </div>
            </div>

            <Button className="bg-transparent mt-5 text-xs p-0 hover:bg-transparent text-black shadow-transparent">
                Add Skill
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
