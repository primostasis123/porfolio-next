import Header from './components/header/header'
import Menu from './components/menu/menu'
import Sidebar from './components/sidebar/sidebar'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata = {
  title: 'Porfolio',
  description: 'Porfolio of Edito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full bg-background">
          <Header />
          <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
              <Sidebar />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <Menu />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
