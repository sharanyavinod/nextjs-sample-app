import Head from 'next/head'
import Link from 'next/link'
import ResponsiveGrid from '../components/ResponsiveGrid';
import AEMText from '../components/AEMText';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <ResponsiveGrid
          pagePath='/content/wknd-spa-react/us/en/home'
          itemPath='root/responsivegrid'/>
        <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
           <h2 className={utilStyles.headingLg}>Blog</h2>
           <ul className={utilStyles.list}>
             {allPostsData.map(({ id, date, title }) => (
                 <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />

                  </li>
             ))}
           </ul>
        </section>
    </Layout>
  )
}

// <small className={utilStyles.lightText}>
//   <Date dateString={date} />
// </small>
