import { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Formik } from "formik";

const BASE_URL = process.env.REACT_APP_BLOG_API;
const GRAVATAR_HASH = process.env.GRAVATAR_HASH;
const API_KEY = process.env.API_KEY;

export async function getServerSideProps() {
  const avatarImage = `https://www.gravatar.com/avatar/${GRAVATAR_HASH}`;

  return { props: { avatarImage, apiKey: API_KEY } };
}

export default function New({ apiKey }) {
  const editorRef = useRef(null);
  const initialContent = "<p>This is the initial content of the editor.</p>";
  const submitForm = () => {
    if (editorRef.current) {
      console.log(postContent);
    }
  };

  return (
    <div>
      <h1>Create a new post</h1>
      <Formik
        initialValues={{ title: "", subtitle: "", postBody: initialContent }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const postContent = editorRef.current.getContent();
            values.postBody = postContent;
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col mb-2">
              <label className="text-2xl">Post title</label>
              <input
                className="border-2 border-gray-500 rounded-md px-1"
                name="title"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Ex: my awesome title"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-2xl">Post subtitle</label>
              <input
                className="border-2 border-gray-500 rounded-md px-1"
                name="subtitle"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subtitle}
                placeholder="Ex: my awesome subtitle"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-2xl">Post Body</label>
              <Editor
                apiKey={apiKey}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={initialContent}
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
            </div>
            <button className="bg-green-400 px-2 rounded-sm text-white text-2xl mb-4" type="submit" disabled={isSubmitting}>
              Save
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
