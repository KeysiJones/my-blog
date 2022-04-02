type AvatarProps = {
    image: string,
    link: string
}

function Avatar({ image, link }: AvatarProps) {
    return (
        <div id="avatar-title">
            <img
                src={image}
                width="120"
                height="120"
                className="rounded-full mb-2"
            />
            <a
                className="text-4xl font-bold"
                href={link}
            >
                Keysi Jones
            </a>
        </div>
    )
}

export { Avatar }