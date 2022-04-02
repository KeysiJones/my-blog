type PostHeaderProps = {
    title: string,
    subtitle: string
}

function PostHeader({ title, subtitle }: PostHeaderProps) {
    return (
        <h1 className="font-extrabold p-8 mb-6 text-white bg-green-400 rounded-lg">
            {title}
            <p className="text-gray-100 text-left text-xl italic mt-2">
                {subtitle}
            </p>
        </h1>
    )
}

export { PostHeader }