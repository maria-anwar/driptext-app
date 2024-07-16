import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    reEnterPass: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(8).required("password is required"),
    reEnterPass: Yup.string().min(8).required("please re-enter your password"),
  });

  const onSubmit = (values) => {
    console.log("Im Clicked");
    // window.location.href = "https://driptext.de/danke-probetext/";
     navigate("/");
  };

  return (
    <div className="w-full flex flex-col mt-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <div className="mb-1 flex flex-col gap-6">
              

              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Password
              </Typography>
              <Input
                id="password"
                name="password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 focus:ring:none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {props.errors.password && (
                <div id="password" className="-mt-4 text-red-500 text-sm">
                  {props.errors.password}
                </div>
              )}
               <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Re-Enter Password
              </Typography>
              <Input
                id="reEnterPass"
                name="reEnterPass"
                type="password"
                value={props.values.reEnterPass}
                onChange={props.handleChange}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 focus:ring:none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {props.errors.reEnterPass && (
                <div id="password" className="-mt-4 text-red-500 text-sm">
                  {props.errors.password}
                </div>
              )}
            </div>
            <Button className="mt-6 bg-black text-white text-sm" fullWidth type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>

     

      
    </div>
  );
};

export default ForgotPasswordForm;
