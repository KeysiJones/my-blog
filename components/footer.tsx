import { SocialMediaIcons } from "./socialMediaIcons";

function Footer() {
  return (
    <footer className="flex flex-col w-full">
      <h3 className="mb-4 text-left text-3xl" style={{ color: "#343a40" }}>
        Contato
      </h3>
      <SocialMediaIcons />
      <p
        className={`text-gray-700 border-gray-700"
          } text-center text-xl mt-4`}
      >
        &copy; {new Date().getFullYear()} Keysi Jones. All rights reserved
      </p>
    </footer>
  );
}

export { Footer };
