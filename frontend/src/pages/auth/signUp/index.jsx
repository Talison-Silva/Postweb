import SignUpValidation from "@/app/config/formik-validations/sign-up-validation.ts";
import { Hook } from "@/app/hook/hook.ts";
import { Formik, Form } from "formik";
import { useState, useRef } from "react";
import Carrossel from "@/UI/components/carrossel/index.tsx";

import Finally from "@/pages/auth/signUp/steps/loading.tsx";
import Steps from "@/pages/auth/signUp/steps/index.ts";

export default () => {
  const submit = async (fields, { setSubmitting }) => {
    //setFinallystep(true);
    console.log(fields);
    /*
    defaultValuesRef.current = { ...fields };

    try {
      await Hook.push("/new-users/register").post(fields);
    } finally {
      setStatefinally(true);
      setSubmitting(false);
    }
    */
  };

  const [finallystep, setFinallystep] = useState(false);
  const [statefinally, setStatefinally] = useState(false);
  const defaultValuesRef = useRef({
    day: "14",
    month: "4",
    year: "1960",
    email: "",
    username: "",
    password: "",
    biography: "",
  });

  const poha = (e) => {
    //console.log(e, t);
    Object.keys(e).forEach((entry) => {
      switch (entry) {
        case "biography":
          break;
      }
    });
  };

  return (
    <Formik
      onSubmit={submit}
      initialValues={defaultValuesRef.current}
      validationSchema={SignUpValidation}
    >
      {({ errors, touched, isValidating }) => (
        <Form className="w-full h-full flex justify-center items-center">
          {!finallystep && <Carrossel steps={Steps} errors={errors} />}
          {finallystep && (
            <Finally back={setFinallystep} finallyprocess={statefinally} />
          )}
          {errors.email && touched.email && (
            <p className="text-white">{errors.email}</p>
          )}
          {errors.email && touched.email && poha(errors, touched)}
        </Form>
      )}
    </Formik>
  );
};
