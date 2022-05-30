type AvatarProps = {
    image: string,
    link: string
}

function Avatar({ image, link }: AvatarProps) {
    return (
        <div id="avatar-title">
            <img
                src={image}
                className="rounded-full mb-2"
            />
            <a
                className="text-4xl font-bold"
                href={link}
            >
                Jones Fernandes
            </a>
        </div>
    )
}

export { Avatar }