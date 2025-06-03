import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
    InstagramIcon,
    LinkedinIcon,
    LucideGithub,
    YoutubeIcon,
} from "lucide-react";

export default function CheckForm() {
    return (
        <>
            <h3 className="font-semibold text-xl">Profile</h3>
            <div className="mt-5">
                <div className="flex items-center gap-3">
                    <div className="w-full">
                        <Label htmlFor="firstName" className="mb-2">
                            First Name
                        </Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            value={"halo"}
                            disabled
                        />
                    </div>

                    <div className="w-full">
                        <Label htmlFor="lastName" className="mb-2">
                            Last Name
                        </Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={""}
                            disabled
                        />
                    </div>
                </div>
                <div className="w-full mt-3">
                    <Label htmlFor="email" className="mb-2">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={""}
                        disabled
                    />
                </div>
                <div className="w-full mt-3">
                    <Label htmlFor="phone" className="mb-2">
                        Phone
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="text"
                        value={""}
                        disabled
                    />
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-full mt-3">
                        <Label htmlFor="city" className="mb-2">
                            City
                        </Label>
                        <Input
                            id="city"
                            name="city"
                            type="text"
                            value={""}
                            disabled
                        />
                    </div>

                    <div className="w-full mt-3">
                        <Label htmlFor="country" className="mb-2">
                            Country*
                        </Label>
                        <Input
                            id="country"
                            name="country"
                            type="text"
                            value={""}
                            disabled
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-full mt-3">
                        <Label
                            htmlFor="placeOfBirth"
                            className="mb-2 capitalize"
                        >
                            Place Of Birth
                        </Label>
                        <Input
                            id="placeOfBirth"
                            name="placeOfBirth"
                            type="text"
                            value={""}
                            disabled
                        />
                    </div>

                    <div className="w-full mt-3">
                        <Label htmlFor="dateOfBirth" className="mb-2">
                            Date Of Birth*
                        </Label>
                        <Input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={""}
                            disabled
                        />
                    </div>
                </div>

                <div className="w-full mt-3">
                    <Label htmlFor="address" className="mb-2">
                        Address
                    </Label>
                    <Textarea
                        id="address"
                        name="address"
                        type="text"
                        value={""}
                        disabled
                    ></Textarea>
                </div>

                <div className="w-full mt-3">
                    <Label htmlFor="gender" className="mb-2">
                        Gender
                    </Label>
                    <Input
                        id="gender"
                        name="gender"
                        type="text"
                        value={""}
                        disabled
                    />
                </div>
            </div>

            <Separator orientation="horizontal" className="my-6" />

            <div>
                <h3 className="font-semibold text-xl">Summary</h3>

                <Textarea
                    className="mt-5 h-44 w-full"
                    name="summary"
                    value={""}
                    disabled
                ></Textarea>
            </div>

            <Separator orientation="horizontal" className="my-6" />

            <section>
                <h3 className="font-semibold text-xl">Educational</h3>

                <div className="mt-5">
                    <div>
                        <Label htmlFor="schoolName" className="mb-2">
                            School Name
                        </Label>
                        <Input
                            id="schoolName"
                            name="schoolName"
                            value={"-"}
                            type="text"
                            disabled
                        />
                    </div>

                    <div className="flex items-center pt-3 gap-5">
                        <div className="w-2/3">
                            <Label htmlFor="major" className="mb-2">
                                Major
                            </Label>
                            <Input
                                id="major"
                                name="major"
                                value={""}
                                type="text"
                                disabled
                            />
                        </div>
                        <div className="w-1/3">
                            <div>
                                <Label
                                    htmlFor="years-educational"
                                    className="mb-2"
                                >
                                    Years
                                </Label>
                                <div className="flex items-center gap-2 w-full">
                                    <Input
                                        className="w-full"
                                        id="years-educational-start"
                                        name="start"
                                        value={""}
                                        disabled
                                    />
                                    -
                                    <Input
                                        className="w-full"
                                        id="years-educational-end"
                                        name="start"
                                        value={""}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3">
                        <Label htmlFor="finalScore" className="mb-2">
                            Final Score
                        </Label>
                        <Input
                            id="finalScore"
                            placeholder="Final Score"
                            name="finalScore"
                            value={"-"}
                            disabled
                        />
                    </div>

                    <div className="pt-3">
                        <Label htmlFor="description-education" className="mb-2">
                            Description
                        </Label>
                        <Textarea
                            className="min-h-28 w-full"
                            id="description-education"
                            name="description"
                            value={"-"}
                            disabled
                        ></Textarea>
                    </div>
                </div>
            </section>

            <Separator orientation="horizontal" className="my-6" />

            <section>
                <h3 className="font-semibold text-xl">Experience</h3>

                <div>
                    <div>
                        <Label htmlFor="jobTitle" className="mb-2">
                            Job Title
                        </Label>
                        <Input
                            id="jobTitle"
                            type="text"
                            name="jobTitle"
                            value={""}
                            disabled
                        />
                    </div>

                    <div className="flex items-center pt-3 gap-5">
                        <div className="w-2/3">
                            <Label htmlFor="companyName" className="mb-2">
                                Company Name
                            </Label>
                            <Input
                                id="companyName"
                                type="text"
                                name="companyName"
                                value={""}
                                disabled
                            />
                        </div>
                        <div className="w-1/3">
                            <div>
                                <Label
                                    htmlFor={`date-experience-start `}
                                    className="mb-2"
                                >
                                    Date
                                </Label>
                                <div className="flex items-center gap-2 w-full">
                                    <Input
                                        className="w-full"
                                        id={`date-experience-start `}
                                        name={`date-experience-start `}
                                        value={"-"}
                                        disabled
                                    />
                                    -
                                    <Input
                                        className="w-full"
                                        id="date-experience-end"
                                        name="end"
                                        value={"-"}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3">
                        <Label htmlFor="description-education" className="mb-2">
                            Description
                        </Label>
                        <Textarea
                            className="min-h-28"
                            id="description-education"
                            name="description"
                            value={"-"}
                            disabled
                        ></Textarea>
                    </div>
                </div>
            </section>

            <Separator orientation="horizontal" className="my-6" />

            <section>
                <h3 className="font-semibold text-xl">Skills</h3>

                <div className={""}>
                    <div className="flex gap-2">
                        <Input
                            id={`skill`}
                            type="text"
                            name="skill"
                            value={""}
                            disabled
                        />
                        <Input
                            id={`skill`}
                            type="text"
                            name="skill"
                            value={""}
                            disabled
                        />
                    </div>
                </div>
            </section>

            <Separator orientation="horizontal" className="my-6" />

            <section>
                <h3 className="font-semibold text-xl">Course & Training</h3>

                <div>
                    <div>
                        <Label htmlFor="certificateName" className="mb-2">
                            Certificate Name
                        </Label>
                        <Input
                            id="certificateName"
                            name="certificateName"
                            value={""}
                            disabled
                        />
                    </div>

                    <div className="flex items-center pt-3 gap-5">
                        <div className="w-2/3">
                            <Label htmlFor="organizerName" className="mb-2">
                                Organizer Name
                            </Label>
                            <Input
                                id="organizerName"
                                type="text"
                                name="organizerName"
                                value={"-"}
                                disabled
                            />
                        </div>
                        <div className="w-1/3">
                            <div>
                                <Label
                                    htmlFor={`certficate-valid`}
                                    className="mb-2"
                                >
                                    Date
                                </Label>
                                <div className="flex items-center gap-2 w-full">
                                    <Input
                                        className="w-full"
                                        id={`certficate-valid`}
                                        type="date"
                                        name={`certficate-valid`}
                                        value={"-"}
                                        disabled
                                    />
                                    -
                                    <Input
                                        className="w-full"
                                        id={`certficate-expired`}
                                        type="date"
                                        name={`certficate-expired`}
                                        value={""}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-3">
                        <Label
                            htmlFor="description-certificate"
                            className="mb-2"
                        >
                            Description
                        </Label>
                        <Textarea
                            className="min-h-28"
                            id="description-certificate"
                            name="description"
                            value={"-"}
                            disabled
                        ></Textarea>
                    </div>
                </div>
            </section>

            <Separator orientation="horizontal" className="my-6" />

            <section className="pb-3">
                <div>
                    <div>
                        <Label htmlFor="github-link" className="mb-2">
                            <LucideGithub /> Github
                        </Label>
                        <Input
                            id="github-link"
                            type="text"
                            name="github"
                            value={""}
                            disabled
                        />
                    </div>

                    <div className="mt-5">
                        <Label htmlFor="linked-link" className="mb-2">
                            <LinkedinIcon /> Linkedin
                        </Label>
                        <Input
                            id="linked-link"
                            type="text"
                            name="linkedin"
                            value={""}
                            disabled
                        />
                    </div>

                    <div className="mt-5">
                        <Label htmlFor="instagram-link" className="mb-2">
                            <InstagramIcon /> Instagram
                        </Label>
                        <Input
                            id="instagram-link"
                            type="text"
                            name="instagram"
                            value={""}
                            disabled
                        />
                    </div>

                    <div className="mt-5">
                        <Label htmlFor="youtube-link" className="mb-2">
                            <YoutubeIcon /> Youtube
                        </Label>
                        <Input
                            id="youtube-link"
                            type="text"
                            name="youtube"
                            value={""}
                            disabled
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

// firstName: user.first_name, lastName: user.last_name, email:
// user.email, phone: user.phone, gender: user.gender, country:
// user.country, city: user.city, address: user.address, placeOfBirth:
// user.place_of_birth, dateOfBirth: user.date_of_birth,
