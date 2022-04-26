import { HomePageLink } from "./";

type AboutAvatarProps = {
    avatarImage: string,
    avatarName: string,
    avatarUrl: string
}

function AboutAvatar({ avatarImage, avatarName, avatarUrl }: AboutAvatarProps) {

    return (
        <div className="flex flex-row items-center">
            <img
                src={avatarImage}
                className="rounded-full mr-4"
            />
            <div className="flex flex-col">
                <strong>{avatarName}</strong>
                <p>
                    <a href={avatarUrl} className="hover:underline">
                        About the author
                    </a>
                </p>
                <HomePageLink />
            </div>
        </div>
    )
}

export { AboutAvatar }