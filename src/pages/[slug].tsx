import { getPage, getPages } from '@/api/endpoints/page/page'
import { Page } from '@/api/endpoints/page/page.types'

type PageComponentParams = {
  page: Page
}

export default function PageComponent({ page }) {
  return <>{page?.title}</>
}

export async function getStaticProps({ params }) {
  const page = await getPage({ slug: params.slug })

  return {
    props: {
      page
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const pages = await getPages()

  return {
    paths: pages.map((page) => `/${page.slug}`) || [],
    fallback: true
  }
}
