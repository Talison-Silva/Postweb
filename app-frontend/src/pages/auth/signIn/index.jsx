import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "@/app/hook/backend.js";
import { useState, useRef } from "react";
import Input from "@/UI/components/formik/input/index.jsx";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import State from "@/UI/components/authorization-state/index.jsx";

import { AuthContext } from "@/app/contexts/AuthContext.tsx";
import { useContext } from "react";

const Submit = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 0 20px 0 20px;
  background-color: #084ccf; //white;
  color: white;
  font-family: "Roboto mono", monospace;
  font-weight: 500;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Roboto mono", monospace;
`;

const Title = styled.div`
  width: 100%;
  height: 64px;
  background-color: #080808;
  padding: 0 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogUp = styled.pre`
  width: 100%;
  height: 32px;
  font-size: 12px;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Badge = styled.div`
  width: 600px;
  min-height: 350px;
  background-color: #0b0d0d;
  color: white;
  border: 1px solid #2e2e2e;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const BadgeTop = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: black;
`;

export const BadgeMiddle = styled.div`
  width: 100%;
  min-height: 270px;
`;

export const BadgeBottom = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: black;
`;

const validationSchema = Yup.object({
  username: Yup.string().required("este campo é obrigatório"),
  email: Yup.string()
    .email("adicione um @exemple.com")
    .required("este campo é obrigatório"),
  password: Yup.string()
    .min(4, "o minimo são 8 carateres")
    .required("este campo é obrigatório"),
});

export default () => {
  const submit = async (fields, { setSubmitting }) => {
    /*
      try{
          await authenticate(fields);
          setStatus(200);

          setTimeout(() => navigate("/badge"),1000);
      }catch(err){
          setStatus(500)
      }
      setSubmitting(false)
      */
    console.log("fields ::", fields);
  };

  const { authenticate } = useContext(AuthContext);
  const [status, setStatus] = useState(0);
  const navigate = useNavigate();

  return (
    <Badge>
      <BadgeTop>
        <State status={status} />
      </BadgeTop>
      <BadgeMiddle>
        <Formik
          onSubmit={submit}
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
        >
          {(value, isSubmitting) => (
            <Form className="w-full flex flex-col gap-4 p-4">
              <Input name="username" required />
              <Input name="email" required />
              <Input name="password" type="password" required />
              <Submit type="submit">
                <p>SignIn</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Submit>
            </Form>
          )}
        </Formik>
      </BadgeMiddle>
      <BadgeBottom>
        <LogUp>
          Don't you have an account?{" "}
          <a href="/signUp" className="text-blue-500">
            click here
          </a>
        </LogUp>
      </BadgeBottom>
    </Badge>
  );
};
