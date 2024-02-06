import { useState } from "react";
import before_image from "../../assets/before_image.png"
import MemberTypeSelect from "./MemberTypeSelect";
import Prefix from "./Prefix";
import Unit from "./Unit";
import Upazila from "./Upazila";
import Blood from "./Blood";
import Religion from "./Religion";
import * as Yup from 'yup';
import { useFormik } from "formik";



const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    memberIdCard: Yup.string().required('Member ID Card is required'),
    enrollmentDate: Yup.date().nullable().required('Enrollment Date is required'),
    birthDate: Yup.date().nullable().required('Birth Date is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    motherName: Yup.string().required('Mother\'s Name is required'),
    spouseName: Yup.string(),
    permanentAddress: Yup.string().required('Permanent Address is required'),
    Occupation: Yup.string(),
    birthCertificateNo: Yup.string(),
    passportNo: Yup.string(),
    memberFormSerial: Yup.string(),
    moneyReceiptNo: Yup.string(),
    emergencyContactNo: Yup.string(),
    contactNo: Yup.string(),
    fatherName: Yup.string().required('Father\'s Name is required'),
    presentAddress: Yup.string(),
    nationalId: Yup.string(),
    education: Yup.string(),
    projectActivities: Yup.string(),
});

const HumanAsset = () => {



    //all selected input value
    const [selectedMemberType, setSelectedMemberType] = useState(null);
    const [selectedPrefixType, setSelectedPrefixType] = useState(null);
    const [selectedUnitType, setSelectedUnitType] = useState(null);
    const [selectedUpazilaType, setSelectedUpazilaType] = useState(null);
    const [selectedBloodType, setSelectedBloodType] = useState(null);
    const [selectedReligionType, setSelectedReligionType] = useState(null);


    //checked related  state:


    //all selected input functions
    const handleMemberTypeChange = (selectedOption) => {
        setSelectedMemberType(selectedOption);
    };
    const handlePrefixTypeChange = (selectedOption) => {
        setSelectedPrefixType(selectedOption)
    }
    const handleUnitTypeChange = (selectedOption) => {
        setSelectedUnitType(selectedOption)
    }
    const handleUpazilaChange = (selectedOption) => {
        setSelectedUpazilaType(selectedOption)
    }
    const handleBloodChange = (selectedOption) => {
        setSelectedBloodType(selectedOption)
    }
    const handleReligionChange = (selectedOption) => {
        setSelectedReligionType(selectedOption)
    }


    // Checked state variables
    const [isAlive, setIsAlive] = useState(false);
    const [isManagingBoardMember, setIsManagingBoardMember] = useState(false);
    const [isUnitExecutiveCommitteeMember, setIsUnitExecutiveCommitteeMember] = useState(false);
    const [isChairman, setIsChairman] = useState(false);
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            // ... other form fields
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("form data", values);
            // Additional logic or API calls can be done here
        }
    });

    const { values, handleBlur, handleChange, handleSubmit, errors } = formik;
console.log(errors);

    return (
        <div>
            <div>
                <h4 className="text-xl font-bold">Add New Member</h4>
            </div>
            <div className="bg-white p-5">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2 grid md:grid-cols-7 grid-cols-1 gap-2 items-center justify-between">
                        <Prefix onPrefixChange={handlePrefixTypeChange} />
                        <div className="col-span-3">
                            <label>Name<span className="text-red-500">*</span></label><br />
                            <input name="name" onBlur={handleBlur} onChange={handleChange} type="text" className="border-2 w-full" id="" />
                            {errors.name && <small className="text-red-600">{errors?.name}</small>}
                        </div>
                        <div className="md:ml-3">
                            <label></label><br />
                            <div className="flex gap-2 items-center text-center">
                                <input
                                    type="checkbox"
                                    name="isAlive"
                                    className="w-5 h-5"
                                    id="isAlive"
                                    checked={isAlive}
                                    onChange={() => setIsAlive(!isAlive)}
                                />
                                <label>Is Alive</label>
                            </div>
                        </div>
                        <Unit onUnitChange={handleUnitTypeChange} />
                        <Upazila onUpazilaChange={handleUpazilaChange} />


                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1">
                            <div className="col-span-3">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" onBlur={handleBlur} onChange={handleChange} name="isManagingBoardMember" id="isManagingBoardMember" checked={isManagingBoardMember} onChange={() => setIsManagingBoardMember(!isManagingBoardMember)} className="w-5 h-5" />
                                    <label>Managing Board Member</label>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" onBlur={handleBlur} onChange={handleChange} name="isUnitExecutiveCommitteeMember" checked={isUnitExecutiveCommitteeMember} onChange={() => setIsUnitExecutiveCommitteeMember(!isUnitExecutiveCommitteeMember)} className="w-5 h-5" id="isUnitExecutiveCommitteeMember" />
                                    <label>Unit Executive Committee Member</label>
                                </div>
                            </div>
                            <div>
                                <label></label><br />
                                <div className="flex gap-2 items-center text-center">
                                    <input type="checkbox" onBlur={handleBlur} onChange={handleChange} name="isChairman" checked={isChairman} onChange={() => setIsChairman(!isChairman)} className="w-5 h-5" id="isChairman" />
                                    <label>Chairman</label>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-7 grid items-center justify-between md:grid-cols-8 grid-cols-1 gap-4">
                            <div className="col-span-4">
                                <label>Member Id Card<span className="text-red-500">*</span></label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="memberIdCard" id="" />
                                {errors.memberIdCard && <small className="text-red-600">{errors?.memberIdCard}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Enrollment Date</label><br />
                                <input type="date" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="enrollmentDate" id="" />
                                {errors.enrollmentDate && <small className="text-red-600">{errors?.enrollmentDate}</small>}

                            </div>

                            <div className="col-span-4">
                                <label>Birth Date</label><br />
                                <input type="date" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="birthDate" id="" />
                                {errors.birthDate && <small className="text-red-600">{errors?.birthDate}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Email</label><br />
                                <input type="email" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="email" id="" />
                                {errors.email && <small className="text-red-600">{errors?.email}</small>}

                            </div>
                            <Blood onBloodChange={handleBloodChange} />
                            <Religion onReligionChange={handleReligionChange} />
                            <div className="col-span-4">
                                <label>Mother's Name</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="motherName" id="" />
                                {errors.motherName && <small className="text-red-600">{errors?.motherName}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Spouse's Name</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="spouseName" id="" />
                                {errors.spouseName && <small className="text-red-600">{errors?.spouseName}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Permanent Address<span className="text-red-500">*</span></label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="permanentAddress" id="" />
                                {errors.permanentAddress && <small className="text-red-600">{errors?.permanentAddress}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Occupation</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="Occupation" id="" />
                                {errors.Occupation && <small className="text-red-600">{errors?.Occupation}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Birth Certificate No</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="birthCertificateNo" id="" />
                                {errors.birthCertificateNo && <small className="text-red-600">{errors?.birthCertificateNo}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Passport No </label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="passportNo" id="" />
                                {errors.passportNo && <small className="text-red-600">{errors?.passportNo}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Member Form Serial </label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="memberFormSerial" id="" />
                                {errors.memberFormSerial && <small className="text-red-600">{errors?.memberFormSerial}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Money Receipt No.</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="moneyReceiptNo" id="" />
                                {errors.moneyReceiptNo && <small className="text-red-600">{errors?.moneyReceiptNo}</small>}

                            </div>
                            <div className="col-span-4">
                                <label>Emergency Contact No</label><br />
                                <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="emergencyContactNo" id="" />
                                {errors.emergencyContactNo && <small className="text-red-600">{errors?.emergencyContactNo}</small>}

                            </div>
                        </div>




                    </div>
                    <div className="gap-2">
                        <MemberTypeSelect onMemberTypeChange={handleMemberTypeChange} />

                        <div className="mb-4">
                            <label>Photo</label><br />
                            <div className=" border-2 grid md:grid-cols-2 grid-cols-1 md:gap-20 items-center justify-center p-2">
                                <div>
                                    <input type="file" name="" id="" />
                                    <p>*Maximum allowed image size is 2 MB</p>
                                </div>
                                <div className="w-32 h-32">
                                    <img src={before_image} className="rounded-full border-2 w-full h-full" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label>Contact No</label><br />
                            <input type="text" className="border-2 w-full" name="contactNo" id="" />
                        </div>
                        <div className="mb-4">
                            <label>Gender<span className="text-red-500">*</span></label>
                            <div className=" grid items-center justify-between md:grid-cols-8 grid-cols-1">

                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="isMale" checked={isMale} onChange={() => setIsMale(!isMale)} className="w-5 h-5" id="isMale" />
                                        <label>Male</label>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <label></label><br />
                                    <div className="flex gap-2 items-center text-center">
                                        <input type="checkbox" name="isFemale" checked={isFemale} onChange={() => setIsFemale(!isFemale)} className="w-5 h-5" id="isFemale" />
                                        <label>Female</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mb-6">
                            <label>Father's Name</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="fatherName" id="" />
                            {errors.fatherName && <small className="text-red-600">{errors?.fatherName}</small>}

                        </div>
                        <div className="mb-6">
                            <label>Present Address</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="presentAddress" id="" />
                            {errors.presentAddress && <small className="text-red-600">{errors?.presentAddress}</small>}

                        </div>
                        <div className="mb-6">
                            <label>National ID</label><br />
                            <input type="text"  onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="nationalId" id="" />
                            {errors.nationalId && <small className="text-red-600">{errors?.nationalId}</small>}

                        </div>
                        <div className="mb-6">
                            <label>Education</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="education" id="" />
                            {errors.education && <small className="text-red-600">{errors?.education}</small>}

                        </div>
                        <div className="mb-6">
                            <label>Project Activities in Last 10 years</label><br />
                            <input type="text" onBlur={handleBlur} onChange={handleChange} className="border-2 w-full" name="projectActivities" id="" />
                            {errors.projectActivities && <small className="text-red-600">{errors?.projectActivities}</small>}

                        </div>
                        <div className="grid md:grid-cols-2 gap-2">
                            <button type="submit" className="px-1 py-4 bg-green-400">Save</button>
                            <button className="px-1 py-4 bg-slate-500">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HumanAsset;