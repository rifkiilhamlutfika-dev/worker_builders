import PageLayout from "@/components/modules/PageLayout";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Inertia } from "@inertiajs/inertia";
import { XIcon } from "lucide-react";

export default function Dashboard() {
    return (
        <PageLayout pageName={"Dashbord"}>
            <div className="px-4">
                <AlertDialog className="w-full">
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" className="h-28 w-48">
                            New Project
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className={"w-full"}>
                        <AlertDialogHeader>
                            <div className="flex items-center justify-between">
                                <div className="bg-transparent h-20 w-12"></div>
                                <AlertDialogTitle>
                                    Choice Your Build
                                </AlertDialogTitle>
                                <AlertDialogCancel className="w-max border-0 bg-transparent shadow-transparent">
                                    <XIcon />
                                </AlertDialogCancel>
                            </div>
                        </AlertDialogHeader>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-5 m-auto w-full">
                            <Button
                                variant="outline"
                                className="h-28 w-full sm:w-48"
                                onClick={() => Inertia.visit("cv-form")}
                            >
                                CV
                            </Button>
                            <Button
                                variant="outline"
                                className="h-28 w-full sm:w-48"
                                disabled
                            >
                                Resume
                            </Button>
                            <Button
                                variant="outline"
                                className="h-28 w-full sm:w-48"
                                disabled
                            >
                                Portfolio
                            </Button>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </PageLayout>
    );
}
