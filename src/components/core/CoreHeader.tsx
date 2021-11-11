import Image from 'next/image'
import Link from 'next/link'

export default function CoreHeader() {
  return (
    <div className="flex justify-between items-center w-full mb-8">
      <Link href="/" passHref={true}>
        <a>
          <Image
            src="/images/feg-logo.png"
            height={60}
            width={60}
            alt="feg logo"
            className="cursor-pointer"
          />
        </a>
      </Link>

      <div className="flex gap-8">
        <Link href="/predigten">Predigten</Link>
        <Link href="/news">News</Link>
      </div>
    </div>
  )
}
