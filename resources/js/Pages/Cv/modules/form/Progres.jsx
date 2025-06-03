import { Button } from "@/components/ui/button";

const datas = [
    {
        number: 1,
        name: "Profile",
    },
    {
        number: 2,
        name: "Summary",
    },
    {
        number: 3,
        name: "Educational",
    },
    {
        number: 4,
        name: "Experience",
    },
    {
        number: 5,
        name: "Skill",
    },
    {
        number: 6,
        name: "Course & Training",
    },
    {
        number: 7,
        name: "Social Media",
    },
    {
        number: 8,
        name: "Checking",
    },
];

export default function Progres({ setPosition, dataProgres, position }) {
    return (
        <div className="mt-5 mb-10 flex gap-3 w-full justify-between">
            {datas.map((data, index) => (
                <div className="flex flex-col items-center" key={index}>
                    <Button
                        className={`rounded-full text-sm h-8 w-8 ${
                            position != data.number
                                ? dataProgres > data.number
                                    ? "bg-green-500 text-black"
                                    : ""
                                : ""
                        }`}
                        onClick={() => setPosition(index + 1)}
                        disabled={dataProgres < data.number}
                    >
                        {data.number}
                    </Button>
                    <p className="text-xs text-center pt-2">{data.name}</p>
                </div>
            ))}
        </div>
    );
}
