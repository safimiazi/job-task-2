import { Controller, useForm } from "react-hook-form";
import "../../../../CustomCSS/HumanAssets.css";
import Select, { components } from "react-select";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const Volunteer = () => {


  const [gender, setGender] = useState(null);
  const[married,setMarried] = useState(null)
  // const [isImageSelected, setIsImageSelected] = useState(false);




// Form data valedetio
const schema = yup.object().shape({
  Registration: yup.string(),
  Name: yup.string().required('Name Address is required'),
  // volunteerType: yup.string().required('volunteerType  is required'),
  // Unit: yup.string().required('Unit is required'),
  // Upazila: yup.string(),
  // VolunteerPosition :yup.string().required('VolunteerPosition  is required'), 
  VolunteerID: yup.string().required('Volunteer ID is required'),
  joinDate: yup.date().nullable(),
  contactNumber: yup.string(),
  emergencyNumber : yup.string(),
  birthDate: yup.date().nullable(),
  email: yup.string().email('Invalid email address'),
  // BloodGroup: yup.string(),
  // Religion: yup.string().required('Religion is required'),
  FatherName: yup.string(),
  MotherName: yup.string(),
  SpouseName: yup.string(),
  Present_Occupation: yup.string(),
  address: yup.string(),
  // resource : yup.string(),
  NID: yup.string(),
  Birth_Certificate_No: yup.string(),
  Passport: yup.string(),
  insurance: yup.string(),
  twitter: yup.string(),
  facebook: yup.string(),
  Education : yup.string(),
  
});






  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema)});

 
  
  const onSubmit = (data) => {
    const volunteer = {
      name: data.Name,
      joinDate: data.joinDate,
      birthDate: data.birthDate,
      email: data.email,
      motherName:data.MotherName,
      spouseName: data.SpouseName,
      Present_Occupation: data.Present_Occupation,
      
      birthCertificateNo: data.Birth_Certificate_No,
      passportNo: data.Passport,
      Registration: data.Registration,
      address: data.address,
      twitter: data.twitter,
      facebook: data.facebook,
      insurance : data.insurance,
      emergencyContactNo: data.emergencyNumber,
      contactNo:data.contactNumber,
      fatherName:  data.FatherName,
      nationalId: data.NID,
      education: data.Education,
      isMale: gender === "male" ? true : false,
      isFemale: gender === "female" ? true : false,
      ismarried: married === "married" ? true : false,
      isunmarried: married === "unmarried" ? true : false,
      upazilaTable: {
          id: data.Upazila,
      },

 
      unit: {
          id: data.Unit
      },
      religion: {
          id: data.Religion
      },
      bloodGroupTable: {
          id: data.BloodGroup
      },
      resourceOption: {
        id: data.resource
    },

    };

    console.log(volunteer);
  };
  console.log(errors);

  // Select field arrow svg replacement style
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          className="dropSVG"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 8L0.937823 0.5L13.0622 0.499999L7 8Z" fill="#D9D9D9" />
        </svg>
      </components.DropdownIndicator>
    );
  };
  // React select customization styles
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // height: '40px',
      // width: '369px',
      // border: '1px solid #E6E6E6',
      border: "none",
      boxShadow: state.isFocused ? null : null, // Remove the box shadow on focus
      outline: state.isFocused ? "1px solid #2AA778" : null, // Change the color here
      "&:hover": {
        outline: "1px solid #2AA778", // Change the color on hover
      },
      "&:hover .dropSVG path": {
        fill: "#2AA778",
      },
    }),
    menu: (provided) => ({
      ...provided,
      padding: "5px",
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#2AA778" : "inherit",
      color: state.isSelected ? "white" : "#777777E5",
      fontSize: "13px",
      fontWeight: state.isSelected ? "700" : "600",
      borderRadius: "5px",
      marginTop: "2px",
      "&:hover": {
        backgroundColor: state.isSelected ? "#2AA778" : "#2AA778",
        color: "white",
      },
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: "13px",
      color: "rgba(119, 119, 119, 0.63)",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#777777A1",
      fontSize: "14px",
    }),
  };

  const prefixOption = [
    { value: "Prefix Demo 1", label: "Prefix Demo 1" },
    { value: "Prefix Demo 2", label: "Prefix Demo 2" },
    { value: "Prefix Demo 3", label: "Prefix Demo 3" },
  ];



  const unitOption = [
    { value: "National Headquarters", label: "National Headquarters" },
    { value: "Narayanganj RC Unit", label: "Narayanganj RC Unit" },
    { value: "Narsingdi RC Unit", label: "Narsingdi RC Unit" },
    { value: "Madaripur RC Unit", label: "Madaripur RC Unit" },
  ];

  const upazilaOption = [
    { value: "O+", label: "Upazila Demo 1" },
    { value: "Upazila Demo 2", label: "Upazila Demo 2" },
  ];

  const resourceOption = [
    { value: "Internal ", label: "Internal " },
    { value: "External", label: "External" },
    
  ]

  const BloodGroupOption = [
    { value: "O positive", label: "O positive" },
    { value: "O negative", label: "O negative" },
    { value: "A positive", label: "A positive" },
    { value: "A negative", label: "A negative" },
    { value: "B positive", label: "B positive" },
    { value: "B negative", label: "B negative" },
    { value: "AB positive", label: "AB positive" },
    { value: "AB negative", label: "AB negative" },
  ];

  const ReligionOption = [
    { value: "Islam", label: "Islam" },
    { value: "Hindu", label: "Hindu" },
    { value: "Christian", label: "Christian" },
    { value: "Buddhism", label: "Buddhism" },
  ];
  const imgInp = useRef(null);

  // For getting the value of the file input
  useEffect(() => {
    if (imgInp.current) {
      imgInp.current.onchange = (evt) => {
        const [file] = imgInp.current.files;
        if (file) {
          inputImgPreview.src = URL.createObjectURL(file);
          setValue("image", file); // Register and set the value of "image" field in React Hook Form
        }
      };
    }
  }, [setValue]);

  // form data

  
  const handleGenderChange = (gender) => {
    setGender(gender);
  };

  const handlemariedChange = (married) => {
    setMarried(married);
  };


  return (
    <>
      <div>
        <Helmet>
          <title>BDRCS | Volunteer</title>
        </Helmet>
        <div>
          <p className="text-[20px] text-[#5C5C5C] ml-[24px] md:ml-3 pb-4">
            Add New Volunteer
          </p>
        </div>
        <div>
          <form
            className="bg-white max-w-screen-2xl xl:mx-auto p-8 pb-24 mb-8 rounded-[5px] ml-5 mr-5 "
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* First row of desktop view */}
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 items-center justify-between">
              {/* Name field */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  1. Name
                </p>
                <input
                  className="w-full xl  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("Name")}
                />
              </div>

              {/* Unit select field */}
              <div className="w-full ">
                <div className="relative w-fit">
                  <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                    2. Unit
                  </p>
                  <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                    *
                  </span>
                </div>
                <Controller
                  name="Unit"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      className="custom-select w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                      components={{ DropdownIndicator }}
                      options={unitOption}
                      {...register("Unit")}
                      placeholder="Select Unit"
                      styles={customStyles}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
                    <p className="text-red-500 text-sm">{errors.unit?.message}</p>
              </div>

              <div className="w-full mt-2">
                <h3 className="text-[#444444] text-[14px]">
                  Affiliated Upazila
                </h3>
                <Controller
                  name="Upazila"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      className="custom-select w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                      components={{ DropdownIndicator }}
                      options={upazilaOption}
                      {...register("Upazila")}
                      placeholder="Select Upazila"
                      styles={customStyles}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
              </div>
            </div>
            {/* Second Row */}
            <div className="mt-5  gap-6  grid xl:grid-cols-3 grid-cols-1 items-center justify-between">
              {/* First column according to the desktop view */}
              <div>
                <div className="flex items-end gap-4 mb-3 flex-col xl:flex-row">
                  {/*vIc */}

                  {/* Affiliated Upazila select field */}
                </div>

                {/* 3. Volunteer Type< */}
                <div>
                <div className="relative w-fit">
                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                      3. Volunteer Type
                    </p>
                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                      *
                    </span>
                  </div>
                  <Controller
                    name="volunteerType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        className="custom-select w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                        components={{ DropdownIndicator }}
                        options={prefixOption}
                        {...register("volunteerType")}
                        placeholder="Select Prefix"
                        styles={customStyles}
                        onChange={(selectedOption) => {
                          field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                        }}
                      />
                    )}
                  />
                   <p className="text-red-500 text-sm">{errors.volunteer_Type?.message}</p>
                </div>
              </div>

              {/* 4. Volunteer ID*/}
              <div className="mt-3">
              <div className="relative w-fit">
                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                      4. Volunteer_ID
                    </p>
                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                      *
                    </span>
                  </div>
                <input
                  className="w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("VolunteerID")}
                />
                 <p className="text-red-500 text-sm">{errors.Volunteer_ID?.message}</p>
              </div>

              {/* second column according to the desktop view */}
              {/*5. Registration No.*/}
              <div className="mt-3">
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  5. Registration No.
                </p>
                <input
                  className="w-full xl  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("Registration")}
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 mt-4">
              <div className="">
                <div className="w-full">
                  <div className="relative w-fit">
                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                      6. Volunteer Position
                    </p>
                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                      *
                    </span>
                  </div>
                  <Controller
                    name="VolunteerPosition"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        className="custom-select w-full  h-[40px] border border-[#E6E6E6] rounded-[3px]"
                        components={{ DropdownIndicator }}
                        options={unitOption}
                        {...register("VolunteerPosition")}
                        placeholder="Select Volunteer_Position"
                        styles={customStyles}
                        onChange={(selectedOption) => {
                          field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                        }}
                      />
                    )}
                  />
                   <p className="text-red-500 text-sm">{errors.Volunteer_Position?.message}</p>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="relative w-fit">
                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                      7. Gender
                    </p>
                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                      *
                    </span>
                  </div>
                  <div className="flex gap-16 justify-start">
                    <div className="flex items-center h-[41px]">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            {...register("male")}
                            type="radio"
                            name="radio-10"
                            onChange={() => handleGenderChange('male')}
                            className="radio checked:bg-[#2AA778]  checked:min-w-[26.93px] rounded-lg bg-slate-200 min-h-[24.96px]"
                            checked
                          />
                          <span className="text-[#777777] text-[16px] ml-2">
                            Male
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center h-[41px]">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            {...register("female")}
                            type="radio"
                            name="radio-10"
                            onChange={() => handleGenderChange('female')}
                            className="radio checked:bg-[#2AA778]  checked:min-w-[26.93px] rounded-lg bg-slate-200 min-h-[24.96px]"
                            checked
                          />
                          <span className="text-[#777777] text-[16px] ml-2">
                          Female
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" row-span-2">
                <div className="w-full">
                  <div className="relative">
                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                      8. Photo{" "}
                      
                    </p>
                  </div>
                  <div className="p-2 border border-[#E6E6E6] rounded-[3px] flex flex-col xl:flex-row items-center justify-center">
                    <div>
                      <input
                        accept="image/*"
                        type="file"
                        {...register("image")} // Pass only the name of the input field
                        ref={(e) => {
                          imgInp.current = e; // Assign the input element to imgInp ref
                        }}
                        className="file-input w-full  pl-0 mb-4"
                      />
                          <p className="text-red-500 text-sm">{errors.image?.message}</p>
                      {/* <input accept="image/*" type='file' ref={imgInp} className="file-input w-full max-w-xs pl-0 mb-4" /> */}
                      <p className="text-[#BFBFBF] text-[13px]">
                        *Maximum allowed image size is 2 MB
                      </p>
                    </div>
                    <div className="w-24 h-20 rounded-full bg-[#EFEFEF] mt-3 xl:mt-0">
                      {/* Preview image */}
                      <img
                        className="min-w-full min-h-full rounded-full"
                        id="inputImgPreview"
                        src="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div>
                  <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                    9. Birth Date
                  </p>
                  <input
                    className="w-full pl-8 h-[40px] border border-[#E6E6E6] rounded-[3px]"
                    type="date"
                    {...register("birthDate")}
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="relative w-fit">
                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                      10. Marital Status{" "}
                    </p>
                
                  </div>
                  <div className="flex gap-16 justify-start">
                    <div className="flex items-center h-[41px]">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            {...register("marreid")}
                            type="radio"
                            name="radio-11"
                            onChange={() => handlemarreidChange('marreid')}
                            className="radio checked:bg-[#2AA778]  checked:min-w-[26.93px] rounded-lg bg-slate-200 min-h-[24.96px]"
                            checked
                          />
                          <span className="text-[#777777] text-[16px] ml-2">
                            Married
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center h-[41px]">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            {...register("unmarreid")}
                            type="radio"
                            name="radio-11"
                            onChange={() => handlemarreidChange('unmarreid')}
                            className="radio checked:bg-[#2AA778]  checked:min-w-[26.93px] rounded-lg bg-slate-200 min-h-[24.96px]"
                            checked
                          />
                          <span className="text-[#777777] text-[16px] ml-2">
                            Unmarried
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* grid section starts here */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 gap-x-5 mt-5">
              {/* 11. Religion */}
              <div>
              <div className="relative w-fit">
                    <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                      11. Religion
                    </p>
                    <span className="text-[20px] text-[#FF000A] absolute -top-1 -right-3">
                      *
                    </span>
                  </div>
                <Controller
                  name="Religion"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      className="custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                      components={{ DropdownIndicator }}
                      options={ReligionOption}
                      placeholder="Select Religion"
                      styles={customStyles}
                         {...register("Religion")}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
                  <p className="text-red-500 text-sm">{errors.Religion?.message}</p>
              </div>
              {/* 12.BloodGroupOption */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  12. BloodGroup
                </p>
                <Controller
                  name="BloodGroup"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      className="custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                      components={{ DropdownIndicator }}
                      options={BloodGroupOption}
                      placeholder="Select Blood Group"
                      {...register("BloodGroup")}
                      styles={customStyles}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
              </div>

              {/*8. Birth date */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  13. Joining Date
                </p>
                <input
                  className="w-full pl-8 h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="date"
                  {...register("birthDate")}
                />
              </div>

              {/* 12. Mobile Number */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  14. Mobile No
                </p>

                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("contactNumber")}
                />
              </div>

              {/* 7. Contact Number */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  15. Emergency Contact No.
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("emergencyNumber")}
                />
                   <p className="text-red-500 text-sm">{errors.emergencyNumber?.message}</p>
              </div>

              {/*9. Email Address */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  16. Email
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="email"
                  {...register("email")}
                />
              </div>

              {/* 17. Father's Name */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  17. Father's Name
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("FatherName")}
                />
              </div>
              {/* 18. Mother's Name */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  18. Mother's Name
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("MotherName")}
                />
              </div>
              {/* 19. SpouseName */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  19. Education
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("SpouseName")}
                />
              </div>
              {/* 20. National ID */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  20. National ID
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("NID")}
                />
                    <p className="text-red-500 text-sm">{errors.NID?.message}</p>
              </div>
              {/* 21. Birth Certificate No*/}
              <div>
                <div className="relative w-fit">
                  <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                    21. Birth Certificate No
                  </p>
                 
                </div>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("Birth_Certificate_No")}
                />
                    <p className="text-red-500 text-sm">{errors.Birth_Certificate_No?.message}</p>
              </div>
              {/* 22. Passport No*/}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  22. Passport No
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("Passport")}
                />
                <p className="text-red-500 text-sm">{errors.Passport?.message}</p>
              </div>
              {/* 23. Present Occupation*/}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  23. Present Occupation
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("Present_Occupation")}
                />
              </div>
              {/* 24. Address*/}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  24. Address
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("address")}
                />
              </div>
              {/* 25. Insurance */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  25. Insurance
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("insurance")}
                />
              </div>
              {/* 226. Twitter */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  26. Twitter
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("twitter")}
                />
              </div>
              {/* 27. Facebook */}
              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  27. Facebook
                </p>
                <input
                  className="w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                  type="text"
                  {...register("facebook")}
                />
              </div>
              {/* Resource Type*/}

              <div>
                <p className="text-[15px] text-[#777777] mb-1 ml-[2px]">
                  28. Resource Type
                </p>
                <Controller
                  name="resource"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      className="custom-select  w-full h-[40px] border border-[#E6E6E6] rounded-[3px]"
                      components={{ DropdownIndicator }}
                      {...register("resource")}
                      options={resourceOption}
                      placeholder="Resource Type"
                      styles={customStyles}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption.value); // Pass only the value to react-hook-form
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col mr-3 float-end xl:flex-row justify-between mt-6">
              <div className="flex gap-6 mt-8 xl:mt-3">
                <button className="bg-[#2AA778] w-[132px] h-[36px] rounded-[3px]">
                  <input
                    className="px-0 text-[15px] font-bold text-white"
                    value="Save"
                    type="submit"
                  />
                </button>
                <button className="bg-[#878FA7] w-[132px] h-[36px] rounded-[3px]">
                  <input
                    className="px-0 text-[15px] font-bold text-white"
                    value="Cancel"
                    type="reset"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
