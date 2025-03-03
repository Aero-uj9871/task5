import { ThemeProvider } from "@/components/context/theme-provider"
import { LoadingProvider } from "@/components/context/LoadingProvider"
import Loader from "@/components/ui/Loader/Loader"
import Layout from '@/Layout'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LoadingProvider>
        <Loader />
        <Layout />
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App
