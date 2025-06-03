import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { router, usePage } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function UserForm({ nextStep, position }) {
    const { user } = usePage().props;
    const [disabled, setDisabled] = useState(true);
    const [formData, setFormData] = useState({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        country: user.country,
        city: user.city,
        address: user.address,
        placeOfBirth: user.place_of_birth,
        dateOfBirth: user.date_of_birth,
    });

    const handleChangeForm = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleChangeSelect = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const requiredFields = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "city",
        "country",
        "dateOfBirth",
    ];

    const isValid = requiredFields.every(
        (field) => formData[field].trim() !== ""
    );

    useEffect(() => {
        if (isValid) setDisabled(false);
        else setDisabled(true);
    }, [formData]);

    const handleSubmit = () => {
        setDisabled(true);
        try {
            router.post("/cv-form/user-post", formData, {
                onSuccess: () => {
                    toast("Profile successful updated");
                    nextStep((prev) => prev + 1);
                    position((prev) => prev + 1);
                },
                onError: (error) => {
                    console.log(error);
                },
                onFinish: () => {
                    setDisabled(false);
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <div className="flex items-center gap-3">
                <div className="w-full">
                    <Label htmlFor="firstName" className="mb-2">
                        First Name*
                    </Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChangeForm}
                    />
                </div>

                <div className="w-full">
                    <Label htmlFor="lastName" className="mb-2">
                        Last Name*
                    </Label>
                    <Input
                        id="lastName"
                        placeholder="Last Name"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChangeForm}
                    />
                </div>
            </div>
            <div className="w-full mt-3">
                <Label htmlFor="email" className="mb-2">
                    Email*
                </Label>
                <Input
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChangeForm}
                />
            </div>
            <div className="w-full mt-3">
                <Label htmlFor="phone" className="mb-2">
                    Phone*
                </Label>
                <Input
                    id="phone"
                    placeholder="Phone..."
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChangeForm}
                />
            </div>

            <div className="flex items-center gap-3">
                <div className="w-full mt-3">
                    <Label htmlFor="city" className="mb-2">
                        City*
                    </Label>
                    <Input
                        id="city"
                        placeholder="City"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChangeForm}
                    />
                </div>

                <div className="w-full mt-3">
                    <Label htmlFor="country" className="mb-2">
                        Country*
                    </Label>
                    <Input
                        id="country"
                        placeholder="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChangeForm}
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="w-full mt-3">
                    <Label htmlFor="placeOfBirth" className="mb-2 capitalize">
                        Place Of Birth
                    </Label>
                    <Input
                        id="placeOfBirth"
                        placeholder="Place Of Birth"
                        name="placeOfBirth"
                        type="text"
                        value={formData.placeOfBirth}
                        onChange={handleChangeForm}
                    />
                </div>

                <div className="w-full mt-3">
                    <Label htmlFor="dateOfBirth" className="mb-2">
                        Date Of Birth*
                    </Label>
                    <Input
                        id="dateOfBirth"
                        placeholder="Date Of Birth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChangeForm}
                    />
                </div>
            </div>

            <div className="w-full mt-3">
                <Label htmlFor="address" className="mb-2">
                    Address
                </Label>
                <Textarea
                    id="address"
                    placeholder="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChangeForm}
                ></Textarea>
            </div>

            <div className="w-full mt-3">
                <Label htmlFor="gender" className="mb-2">
                    Gender
                </Label>
                <Select
                    onValueChange={(val) => handleChangeSelect("gender", val)}
                    value={formData.gender}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-full pb-5">
                <Button
                    className="mt-12 w-full"
                    onClick={() => {
                        handleSubmit();
                    }}
                    type="submit"
                    disabled={disabled}
                >
                    Next Step <ArrowRight />
                </Button>
            </div>
            {/* </form> */}
        </>
    );
}
