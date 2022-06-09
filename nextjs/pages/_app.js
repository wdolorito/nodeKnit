import '../styles/globals.css'
import MainLayout from '../layout/main_layout'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
