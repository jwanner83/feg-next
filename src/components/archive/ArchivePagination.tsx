import Link from 'next/link'

type ArchivePaginationParams = {
  type: string
  page: number
  pages: number
}

export default function ArchivePagination({
  type,
  page,
  pages
}: ArchivePaginationParams) {
  const next = page + 1
  const previous = page - 1

  const nextLink = `/${type.toLowerCase()}/page/${next}`
  let previousLink: string | undefined

  if (previous === 1) {
    previousLink = `/${type.toLowerCase()}`
  } else if (previous === 0) {
    previousLink = undefined
  } else {
    previousLink = `/${type.toLowerCase()}/page/${previous}`
  }

  return (
    <div className="flex justify-between mb-10">
      <div>
        {previousLink && (
          <Link href={previousLink} passHref={true}>
            <a className="p-5 px-8 text-white bg-black dark:bg-[#1c1c1c]">
              Vorherige Seite
            </a>
          </Link>
        )}
      </div>
      <div>
        {next !== pages + 1 && (
          <Link href={nextLink} passHref={true}>
            <a className="p-5 px-8 text-white bg-black dark:bg-[#1c1c1c]">
              Nächste Seite
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
