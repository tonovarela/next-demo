import { DarkLayout } from '@/components/layout/DarkLayout'
import { MainLayout } from '@/components/layout/MainLayout'
export default function AboutPage() {
  return (
    <>
      <p className="title">
        About Page
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </div>
    </>

  )
}

AboutPage.getLayout = (page)=> {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>

  )

}
