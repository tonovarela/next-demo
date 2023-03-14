import { MainLayout } from "../components/layout/MainLayout";



export default function HomePage() {
  return (  
    <MainLayout>
       <>          
          <p className="title">
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
