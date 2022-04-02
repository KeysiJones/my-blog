import { useRouter } from "next/router"

function HomePageLink() {
    const router = useRouter();

    return (
        <a>
            <p
                onClick={() => router.push("/")}
                className="text-right hover:underline hover:cursor-pointer mb-4"
            >
                Voltar à tela inicial
            </p>
        </a>
    )
}

export { HomePageLink }