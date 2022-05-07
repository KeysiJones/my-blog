import { useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const BASE_URL = process.env.REACT_APP_BLOG_API;
const API_KEY = process.env.API_KEY;

export async function getServerSideProps() {
  return { props: { apiKey: API_KEY, baseUrl: BASE_URL } };
}

export default function New({ apiKey, baseUrl }) {
  const editorRef = useRef(null);
  const initialContent = "<h1>Start writing your amazing post</h1>";
  const router = useRouter();
  const [postContent, setPostContent] = useState(initialContent);
  const postValidationSchema = Yup.object().shape({
    username: Yup.string().required("User is required to create new posts"),
    password: Yup.string().required("Password is required to create new posts"),
    title: Yup.string().required("Title is required"),
    subtitle: Yup.string().required("Subtitle is required"),
  });
  const isPostEmpty = postContent.length <= 0;

  useEffect(() => {
    const isValidToken = localStorage.getItem("authToken")?.length === 177;

    if (!isValidToken) {
      router.push("/login");
    }
  }, []);

  return (
    <main>
      <h1>Create a new post</h1>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={postValidationSchema}
        initialValues={{
          title: "",
          subtitle: "",
          username: "",
          password: "",
        }}
        onSubmit={(
          { title, subtitle, username, password },
          { setSubmitting }
        ) => {
          setTimeout(() => {
            const body = editorRef.current.getContent();
            const loginCredentials = JSON.stringify({
              username,
              password,
            });
            const payload = JSON.stringify({
              title,
              subtitle,
              body,
            });

            fetch(`${baseUrl}/login`, {
              method: "POST",
              body: loginCredentials,
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                if ([200].includes(response.status)) {
                  console.log("Succesfully logged in");
                }
                
                if ([400].includes(response.status)) {
                  alert("Incorrect user and/or password");
                }

                return response.json();
              })
              .then((res) => {
                fetch(`${baseUrl}/posts/new`, {
                  method: "POST",
                  body: payload,
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token": res.token,
                  },
                })
                  .then((response) => {
                    if ([200].includes(response.status)) {
                      alert("Post created succesfully");
                      router.push("/");
                    } else {
                      alert('Check your credentials')
                    }
                  })
                  .catch((err) => console.log({ err }));
              })
              .catch((err) => console.log({ err }));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mb-4">
            <div className="flex flex-col mb-2">
              <label className="text-2xl">Post title</label>
              <Field
                className="border-2 border-gray-500 rounded-md px-1"
                name="title"
                placeholder="Ex: my awesome title"
                type="text"
              />
              <ErrorMessage
                className="text-red-400"
                name="title"
                component="div"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-2xl">Post subtitle</label>
              <Field
                className="border-2 border-gray-500 rounded-md px-1"
                name="subtitle"
                type="text"
                placeholder="Ex: my awesome subtitle"
              />
              <ErrorMessage
                className="text-red-400"
                name="subtitle"
                component="div"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-2xl">Post Body</label>
              <Editor
                apiKey={apiKey}
                initialValue={initialContent}
                onInit={(evt, editor) => (editorRef.current = editor)}
                onEditorChange={(value) => {
                  setPostContent(value);
                }}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "preview",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />

              {isPostEmpty && (
                <span className="text-red-400" name="postBody" component="div">
                  Post content can't be empty
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-2xl">Username</label>
              <Field
                className="border-2 border-gray-500 rounded-md px-1"
                name="username"
                placeholder="Ex: my awesome subtitle"
                type="text"
              />
              <ErrorMessage
                className="text-red-400"
                name="username"
                component="div"
              />
              <label className="text-2xl">Password</label>
              <Field
                className="border-2 border-gray-500 rounded-md px-1"
                name="password"
                placeholder="Ex: my awesome subtitle"
                type="password"
              />
              <ErrorMessage
                className="text-red-400"
                name="password"
                component="div"
              />
            </div>
            <button
              className={`${
                isSubmitting || isPostEmpty ? "bg-green-200" : "bg-green-400"
              } px-2 rounded-sm text-white text-2xl mb-4`}
              type="submit"
              disabled={isSubmitting || isPostEmpty}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}
