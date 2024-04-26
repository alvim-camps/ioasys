export function Link({url, children}) {
    return <a target="_blank" href={url}>{children}</a>
}