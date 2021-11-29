export default function Layout({ children }) {
  return (
    <div className="px-64 py-4 min-h-screen bg-gray-800 flex flex-col justify-between">
      {children}
      <footer className="flex flex-col items-center justify-center w-full">
        <h3 className="mb-4 text-center text-3xl text-white">Redes sociais</h3>
        <div className="bg-gray-700 py-3 rounded-lg text-white w-full text-center justify-between mb-2">
          <button
            onClick={() => window.open("https://linkedin.com/in/keysijones")}
            className="bg-blue-400 mx-2 px-2 rounded text-xl"
          >
            LinkedIn
          </button>
          <button
            onClick={() => window.open("https://twitter.com/keysi_jones")}
            className="bg-gray-800 mx-2 px-2 rounded text-xl"
          >
            Twitter
          </button>
          <button
            onClick={() => window.open("https://keysijones.vercel.app/")}
            className="bg-green-600 mx-2 px-2 rounded text-xl"
          >
            Portfólio
          </button>
        </div>
      </footer>
    </div>
  );
}
