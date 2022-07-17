import Main from './Main'
import Layout from '@components/Layout/Layout'

export default function Index() {
  return <Main />
}

Index.getLayout = function getLayout(page: JSX.Element) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}