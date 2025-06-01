import { Button } from "@/components/ui/button";

export default function Progres({ setPosition, dataProgres, position }) {
    return (
        <div className="mt-5 mb-10 flex gap-3 w-full justify-between">
            <div className="flex flex-col items-center">
                <Button
                    className={`rounded-full text-sm h-8 w-8 ${
                        position != 1
                            ? dataProgres > 1
                                ? "bg-green-500 text-black"
                                : ""
                            : ""
                    }`}
                    onClick={() => setPosition(1)}
                >
                    1
                </Button>
                <p className="text-xs text-center pt-2">Profile</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setPosition(2)}
                    disabled={dataProgres < 2 ? true : false}
                >
                    2
                </Button>
                <p className="text-xs text-center pt-2">About Me</p>
            </div>
            <div className="flex flex-col items-center ">
                <Button
                    className="rounded-full text-sm h-8 w-8 "
                    // bg-green-500 text-black
                    onClick={() => setPosition(3)}
                    disabled={dataProgres < 3 ? true : false}
                >
                    3
                </Button>
                <p className="text-xs text-center pt-2">Educational</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setPosition(4)}
                    disabled={dataProgres < 4 ? true : false}
                >
                    4
                </Button>
                <p className="text-xs text-center pt-2">Experience</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setPosition(5)}
                    disabled={dataProgres < 5 ? true : false}
                >
                    5
                </Button>
                <p className="text-xs text-center pt-2">Skill</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setPosition(6)}
                    disabled={dataProgres < 6 ? true : false}
                >
                    6
                </Button>
                <p className="text-xs text-center pt-2">Course & Training</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setPosition(7)}
                    disabled={dataProgres < 7 ? true : false}
                >
                    7
                </Button>
                <p className="text-xs text-center pt-2">Social Media</p>
            </div>
            <div className="flex flex-col items-center">
                <Button
                    className="rounded-full text-sm h-8 w-8"
                    onClick={() => setPosition(8)}
                    disabled={dataProgres < 8 ? true : false}
                >
                    8
                </Button>
                <p className="text-xs text-center pt-2">Checking</p>
            </div>
        </div>
    );
}
