import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaIcons() {
  return (
    <div className="py-3 rounded-lg text-white text-left mb-2">
      <button
        onClick={() => window.open("https://linkedin.com/in/keysijones")}
        className="bg-blue-400 mr-2 p-1 px-2 rounded text-3xl"
      >
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </button>
      <button
        onClick={() => window.open("https://www.instagram.com/keysijones/")}
        className="bg-pink-500 mx-2 py-1 px-2 rounded text-3xl"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </button>
      <button
        onClick={() => window.open("https://twitter.com/keysi_jones")}
        className="bg-blue-400 mx-2 p-1 px-2 rounded text-3xl"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </button>
      <button
        onClick={() => window.open("https://github.com/KeysiJones")}
        className="bg-gray-700 mx-2 py-1 px-2 rounded text-3xl"
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </button>
    </div>
  );
}

export { SocialMediaIcons };
