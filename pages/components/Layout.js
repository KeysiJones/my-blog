import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Layout({ children }) {
  return (
    <div className="px-64 py-4 min-h-screen flex flex-col justify-between">
      {children}
      <footer className="flex flex-col w-full">
        <h3 className="mb-4 text-left text-3xl" style={{ color: "#343a40" }}>
          Contato
        </h3>
        <div className="py-3 rounded-lg text-white text-left mb-2">
          <button
            onClick={() => window.open("https://linkedin.com/in/keysijones")}
            className="bg-blue-400 mr-2 p-1 px-2 rounded text-3xl"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </button>
          <button
            onClick={() => window.open("https://twitter.com/keysi_jones")}
            className="bg-gray-800 mx-2 p-1 px-2 rounded text-3xl"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </button>
          <button
            onClick={() => window.open("https://keysijones.vercel.app/")}
            className="bg-green-600 mx-2 py-1 px-2 rounded text-3xl"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </button>
        </div>
        <p
          className={`text-gray-700 border-gray-700"
          } text-center text-xl mt-4`}
        >
          &copy; {new Date().getFullYear()} Keysi Jones. All rights reserved
        </p>
      </footer>
    </div>
  );
}
