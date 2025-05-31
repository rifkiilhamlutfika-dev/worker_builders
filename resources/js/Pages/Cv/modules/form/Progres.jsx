import { Button } from "@/components/ui/button";

export default function Progres({ setProgres, dataProgres }) {
    return (
        <div className="mt-5 mb-10 flex gap-3 w-full justify-between">
            <div className="flex flex-col items-center">
                <Button
                    className={`rounded-full text-sm h-8 w-8 `}
                    onClick={() => setProgres(1)}
                >
                    1
                </Button>
                <p className="text-xs text-center pt-2">Profile</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setProgres(2)}
                >
                    2
                </Button>
                <p className="text-xs text-center pt-2">About Me</p>
            </div>
            <div className="flex flex-col items-center ">
                <Button
                    className="rounded-full text-sm h-8 w-8 bg-green-500 text-black"
                    onClick={() => setProgres(3)}
                >
                    3
                </Button>
                <p className="text-xs text-center pt-2">Educational</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setProgres(4)}
                >
                    4
                </Button>
                <p className="text-xs text-center pt-2">Experience</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setProgres(5)}
                >
                    5
                </Button>
                <p className="text-xs text-center pt-2">Skill</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setProgres(6)}
                >
                    6
                </Button>
                <p className="text-xs text-center pt-2">Course & Training</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setProgres(7)}
                >
                    7
                </Button>
                <p className="text-xs text-center pt-2">Social Media</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setProgres(8)}
                >
                    8
                </Button>
                <p className="text-xs text-center pt-2">Checking</p>
            </div>
        </div>
    );
}
