// PathToPage component
import Link from 'next/link'

interface IPoint {
    name: string
    href: string
}

interface IPath {
    path: IPoint[]
}

export default function PathToPage(
    { path }: IPath
) {
    return (
        <div className="home__path-to-page-wrapper">
            <span className="home__path-to-page">
                {path.map((point, i) => {
                    if (i === path.length - 1) return (
                        <Link className='path__point' href={point.href}>{point.name}</Link>
                    )
                    else return (
                        <>
                            <Link className='path__point' href={point.href}>{point.name}</Link>
                            <span className='path__separator'>&gt;</span>
                        </>
                    )
                })}
            </span>
        </div>
    )
}