
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SignIn, SignOutButton } from "@clerk/nextjs"

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 h-16 z-50 flex items-center px-4 bg-opacity-90 backdrop-blur-sm backdrop-filter dark:border-gray-800 dark:bg-gray-950/90 bg-blue-1">
      <nav className="flex-1 flex items-center justify-between ">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className='bg-green-950 text-white shadow-lg hover:bg-green-950 hover:text-white hover:opacity-80 hover:scale-110 '>
              <MenuIcon className="h-6 w-6 " />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className='bg-blue-1'>
  <SheetTitle>
  </SheetTitle>
                <SignOutButton/>  
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