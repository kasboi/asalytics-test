import type { NextPage } from 'next'
import DataList from '../components/DataList'
import Header from '../components/Header'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Head from 'next/head'

const queryClient = new QueryClient()

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>ASAlytics | Home</title>
        <meta name="keywords" content="ASAS"/>
      </Head>
      <Header />
      <DataList />
    </QueryClientProvider>
  )
}

export default Home
