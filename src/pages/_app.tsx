import 'styles/global.scss'
import 'styles/mixins.scss'

export default function MyApp({ Component, pageProps }: any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: JSX.Element) => page)

  return getLayout(
    <Component {...pageProps} />
  )
}