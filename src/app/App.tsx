import { BrowserRouter } from 'react-router'
import { AppRoutes } from '@/app/router'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { useScrollToHash } from '@/hooks/useScrollToHash'

function AppShell() {
  useScrollToHash()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="bg-violet focus:text-bg sr-only px-4 py-2 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
