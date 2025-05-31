import PageLayout from "@/components/modules/PageLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CvForm() {
    return (
        <PageLayout pageName="CV Form">
            <form>
                <div className="flex items-center gap-3">
                    <div className="w-full">
                        <Label htmlFor="firstName" className="mb-2">
                            First Name
                        </Label>
                        <Input
                            className=""
                            id="firstName"
                            placeholder="First Name..."
                            type="text"
                        />
                    </div>

                    <div className="w-full">
                        <Label htmlFor="lastName" className="mb-2">
                            Last Name
                        </Label>
                        <Input
                            className=""
                            id="lastName"
                            placeholder="Last Name..."
                            type="text"
                        />
                    </div>
                </div>
            </form>
        </PageLayout>
    );
}
