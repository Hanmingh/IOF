import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const Layout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout