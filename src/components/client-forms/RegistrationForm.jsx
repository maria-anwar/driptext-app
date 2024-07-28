import { useState, useEffect } from "react";
import { GroupField } from "./GroupField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//http://localhost:8000/api/users/create

const RegistrationForm = () => {
  const navigate = useNavigate();
  const[roleID,setRoleID]= useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/roles/list');
        const data = response.data.data; // Adjust this line based on the actual structure
        
        if (Array.isArray(data)) {
          data.forEach((value) => {
            if (value.title === 'leads') {
              setRoleID(value)
            }
          });
        } 
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  const initialValues = {
    project: "",
    keyword: "",
    email: "",
    fname: "",
    lname: "",
  };
  const validationSchema = Yup.object().shape({
    project: Yup.string().required("Please enter your project"),
    keyword: Yup.string().required("Please enter keyword"),
    email: Yup.string().email().required("Please enter your email"),
    fname: Yup.string().required("Please enter your first name"),
    lname: Yup.string().required("Please enter your last name"),
  });
  
  const onSubmit = async (values) => {
    const registerData = {
      firstName:values.fname,
      lastName: values.lname,
      email: values.email,
      roleId: roleID._id,
      projectName : values.project,
      keywords: values.keyword,
    }
   
    const apiUrl = 'http://localhost:8000/api/users/create';

   try {
    const response = await axios.post(apiUrl, registerData);
    console.log(response.data.data._id)
    toast.success('Data submitted successfully:', response.registerData);
     navigate("/onboarding-probetext",{state:{projectName:values.project,userId:response.data.data._id}});
   } catch (error) {
    toast.error('Error submitting data:', error);
    console.log(error);
   }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
          <ToastContainer/>
            <div className="w-full bg-gradient-to-r from-custom-gray to-[#F7F7F7] flex flex-col gap-6 px-3 xs:px-8 xs:py-10  md:px-9 md:py-14 lg:px-10 mt-6 mb-8 rounded-xl">
              <div className="flex flex-col gap-6">
                <h2 className="text-custom-black text-base font-semibold">
                  1. Information About the Text
                </h2>
                <GroupField
                  label={"Your Project"}
                  placeholder={"example.com"}
                  id={"project"}
                  name={"project"}
                  value={props.values.project}
                  errors={props.errors.project}
                  onChange={props.handleChange}
                />
                <GroupField
                  label={"Desired Keyword"}
                  placeholder={"example keyword"}
                  id={"keyword"}
                  name={"keyword"}
                  value={props.values.keyword}
                  errors={props.errors.keyword}
                  onChange={props.handleChange}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-custom-black text-base font-semibold lg:mt-3.5">
                  2. Contact details of the invoice receipient
                </h2>
                <GroupField
                  label={"Email"}
                  placeholder={"Your email address"}
                  id={"email"}
                  name={"email"}
                  value={props.values.email}
                  errors={props.errors.email}
                  onChange={props.handleChange}
                />
                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-3 gap-5">
                  <GroupField
                    label={"First Name"}
                    placeholder={"Your first name"}
                    id={"fname"}
                    name={"fname"}
                    value={props.values.fname}
                    errors={props.errors.fname}
                    onChange={props.handleChange}
                  />
                  <GroupField
                    label={"Last Name"}
                    placeholder={"Your last name"}
                    id={"lname"}
                    name={"lname"}
                    value={props.values.lname}
                    errors={props.errors.lname}
                    onChange={props.handleChange}
                  />
                </div>

                <div className="w-full bg-custom-black flex justify-center py-2 xs:py-2.5 mt-1 rounded-xl">
                  <button
                    className="border-none text-white font-medium text-base cursor-pointer "
                    type="submit"
                  >
                    Submit Order
                  </button>
                </div>
              </div>
              <p className="text-custom-black text-sm font-medium">
                By submitting the order, I agree to the{" "}
                <Link className="text-[#63B4D0]">
                  general terms and conditions
                </Link>{" "}
                terms and conditions of DripText Ltd. and understand that our
                offers are aimed exclusively at commercial customers. All prices
                are exclusive of VAT. Sales only to entrepreneurs, tradespeople,
                associations, authorities or self-employed persons (§ 14 BGB).
                No sales to consumers within the meaning of § 13 BGB.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
