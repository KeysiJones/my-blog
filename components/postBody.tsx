type PostBodyProps = {
    body: any
}

function PostBody({ body }: PostBodyProps) {
    return (
        <div
            id="post-body"
            dangerouslySetInnerHTML={{ __html: body }}
            className="mb-12"
        />
    )
}

export { PostBody }