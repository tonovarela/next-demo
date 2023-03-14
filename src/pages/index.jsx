import Head from 'next/head'
import Image from 'next/image'
import { MainLayout } from '@/components/layout/MainLayout'
export default function Home() {
  return (  
    <MainLayout>
       <>          
          <p>
            Index Page
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
    </MainLayout>
  )
}
