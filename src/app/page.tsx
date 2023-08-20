import Link from 'next/link'
import Image from 'next/image'
import SigninButton from '@/components/SigninButton'

export default function Home() {
  return (
   <header className='flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow'>
    <Link href={"/"} className='hover:text-blue-400 transition-colors'>
    Home Page
    </Link>
    <Link href={"/UserPost"} className='hover:text-blue-400 transition-colors'>
    Post Page
    </Link>
    <SigninButton/>
   </header>
  )
}
