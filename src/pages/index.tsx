
import Link from 'next/link'
import { MainLay } from '@/components/general/MainLay'

export default function Index() {
  return (
    <MainLay title={'Index page'}>
      <h1>Hello!</h1>
      <p><Link href='/about'>About</Link></p>
      <p><a href="/films/abc+xyz">Films</a></p>
    </MainLay>
  )
}