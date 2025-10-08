// import { ThemeToggle } from "@/components/theme-toggle"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { cn } from "@/lib/utils"
// import { Menu } from "lucide-react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { useState } from "react"

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Projects", href: "/projects" },
//   { name: "Experience", href: "/experience" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <Link href="/" className="flex items-center space-x-2">
//           <span className="font-heading text-xl font-bold">Portfolio</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-primary",
//                 pathname === item.href ? "text-primary" : "text-muted-foreground",
//               )}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center space-x-2">
//           <ThemeToggle />

//           {/* Mobile Navigation */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//               <div className="flex flex-col space-y-4 mt-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       "text-lg font-medium transition-colors hover:text-primary",
//                       pathname === item.href ? "text-primary" : "text-muted-foreground",
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
// ADDED: import SheetHeader & SheetTitle for accessible name
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-xl font-bold">Nathan Binu Edappilly</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* ADDED: aria-label and a visually-hidden title to satisfy Radix Dialog a11y */}
            <SheetContent
              side="right"
              className="w-[80vw] sm:w-[400px] px-6 sm:px-8 pt-6 pb-8 p-safe"
              aria-label="Navigation menu"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation menu</SheetTitle>
              </SheetHeader>

              <nav className="mt-2 flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block pl-2 pr-6 py-3 text-xl font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
