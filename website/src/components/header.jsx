
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SignIn, SignOutButton, UserButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 h-16 z-50 flex items-center px-4 bg-opacity-90 backdrop-blur-sm backdrop-filter dark:border-gray-800 dark:bg-gray-950/90 bg-blue-1">
    <nav className="text-white max-sm:hidden flex gap-7 justify-end w-full">
    <Link href={'/'}>Home</Link>
    <Link href={'/progress'}>Progress</Link>
    <Link href={'/parent-dashboard'}>Parent-dashBoard</Link>
    <UserButton></UserButton>
    </nav>
      <nav className="flex-1 flex items-center justify-end sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className='bg-green-950 text-white shadow-lg hover:bg-green-950 hover:text-white hover:opacity-80 hover:scale-110 '>
              <MenuIcon className="h-6 w-6 " />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className='bg-blue-1'>
  <SheetTitle>
  </SheetTitle>
  <div className="flex flex-col text-white text-center py-5 text-xl">

  {/* <Link href={'/progress'} className=" bg-slate-600 m-2 p-1 rounded-xl hover:bg-slate-500">Progress</Link> */}
                <Link href={'/'} className=" bg-slate-600 m-2 p-1 rounded-xl hover:bg-slate-500">Home</Link>
                <Link href={'/progress'} className=" bg-slate-600 m-2 p-1 rounded-xl hover:bg-slate-500">Progress</Link>
    <Link href={'/parent-dashboard'} className=" bg-slate-600 m-2 p-1 rounded-xl hover:bg-slate-500">Parent-dashBoard</Link>
                <SignOutButton className=" bg-slate-600 m-2 p-1 rounded-xl hover:bg-slate-500">
                  Sign Out
                </SignOutButton>  
  </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}