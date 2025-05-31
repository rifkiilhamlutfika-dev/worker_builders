import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function AboutMe() {
    return (
        <div className="pb-10">
            <h2 className="font-semibold">About You</h2>
            <Textarea placeholder="About You" className="h-28"></Textarea>
            <div className="w-full flex justify-between">
                <Button className="mt-5 w-1/3">
                    <ArrowLeft />
                    Prev Step
                </Button>
                <Button className="mt-5 w-1/3">
                    Next Step <ArrowRight />
                </Button>
            </div>
        </div>
    );
}
