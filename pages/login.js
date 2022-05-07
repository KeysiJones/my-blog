import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { LoadingSpinner } from "../components/loadingSpinner";

const LoginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "O usuário deve ter no mínimo 4 caracteres!")
    .max(10, "O usuário deve ter no máximo 10 caracteres!")
    .required("Informe o seu usuário"),
  password: Yup.string()
    .min(5, "A senha deve ter no mínimo 5 caracteres!")
    .max(10, "A senha não deve ter mais de 10 caracteres!")
    .required("Informe a sua senha"),
});

const BASE_URL = process.env.REACT_APP_BLOG_API;

export async function getServerSideProps() {
  return { props: { baseUrl: BASE_URL } };
}

export default function Login({ baseUrl }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Formik
          validationSchema={LoginValidationSchema}
          validateOnBlur={false}
          initialValues={{ username: "", password: "" }}
          onSubmit={({ username, password }) => {
            setLoading(true);
            fetch(`${baseUrl}/login`, {
              method: "POST",
              body: JSON.stringify({ username, password }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((response) => {
                setLoading(false);
                if (response.status === 200 && response.token) {
                  localStorage.setItem("authToken", response.token);
                  alert("Succesfully logged in");
                  router.push("/posts/new");
                }
              })
              .catch((error) => {
                setLoading(false);
                console.log({ error });
                alert("Incorrect username and/or password");
              });
          }}
        >
          {
            <div className="flex flex-col h-screen justify-center items-center">
              <Form>
                <div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Usuário"
                    className="border-2 px-2 py-2 rounded-md my-2 outline-none"
                  />
                  <ErrorMessage
                    className="text-red-400"
                    name="username"
                    component="div"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Senha"
                    className="border-2 px-2 py-2 rounded-md outline-none"
                  />
                  <ErrorMessage
                    className="text-red-400"
                    name="password"
                    component="div"
                  />
                </div>
                <button
                  className="py-2 last:mt-2 w-full rounded-md bg-blue-400 text-white"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            </div>
          }
        </Formik>
      )}
    </div>
  );
}
