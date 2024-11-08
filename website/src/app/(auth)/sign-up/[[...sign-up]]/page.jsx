import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return <div className='h-[95vh] w-[95vw] flex justify-center items-center flex-col my-5'>
<SignUp/>
<Link href={'/sign-in'} className='text-white underline'>
    Already have an account?
  </Link>
  </div>
}