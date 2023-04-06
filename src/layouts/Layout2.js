import Navbar from '@/layouts/layout2/navbar'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen h-full w-full bg-th-background text-th-primary-dark flex">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}