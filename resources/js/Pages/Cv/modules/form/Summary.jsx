import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { router } from "@inertiajs/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Summary({ nextStep, position }) {
    const [summary, setSummary] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleFormSummary = () => {
        setDisabled(true);

        try {
            router.post(
                "/cv-summary-post",
                { summary: summary },
                {
                    onSuccess: () => {
                        toast("Okay Next Step");
                        nextStep(3);
                        position(3);
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

    useEffect(() => {
        if (summary != "") setDisabled(false);
        else setDisabled(true);
    }, [summary]);

    const handlePrevForm = () => {
        position(1);
    };

    return (
        <div className="pb-10">
            <h2 className="font-semibold">Summary*</h2>
            <p>Write your summary in briefly, concisely and clearly...</p>
            <form>
                <Textarea
                    placeholder="Write your summery"
                    className="mt-5 h-44"
                    name="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                ></Textarea>
                <div className="w-full flex justify-between">
                    <Button className="mt-10 w-1/3" onClick={handlePrevForm}>
                        <ArrowLeft />
                        Prev Step
                    </Button>
                    <Button
                        className="mt-10 w-1/3"
                        disabled={disabled}
                        onClick={handleFormSummary}
                    >
                        Next Step <ArrowRight />
                    </Button>
                </div>
            </form>
        </div>
    );
}
