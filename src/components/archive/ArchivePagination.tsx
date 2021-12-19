import Link from 'next/link'
import Button from '@/components/core/basic/Button'

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
            <Button>Vorherige Seite</Button>
          </Link>
        )}
      </div>
      <div>
        {next !== pages + 1 && (
          <Link href={nextLink} passHref={true}>
            <a>
              <Button>Nächste Seite</Button>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
