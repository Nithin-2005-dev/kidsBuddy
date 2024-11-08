import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return <div className='flex flex-col h-[95vh] w-[100vw] justify-center items-center'>
  <SignIn />
  <Link href={'/sign-up'} className='text-white underline'>
    Don't have an account?
  </Link>
  </div>
}