'use client'

import { Menu } from 'lucide-react'
import * as React from 'react'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { ThemeSwitcher } from '@/components/atoms/ThemeSwitcher'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('header')
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeSheet = () => setIsSheetOpen(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            {/* Add your logo or site name here */}
            <span className="text-xl font-bold">Your Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/item1" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2">
                    Item 1
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2">
                  Item 2
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/picture1"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Picture 1
                          </div>
                          <Image
                            src="https://images.unsplash.com/photo-1695764062673-ca63e7a6f4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                            alt="Random image 1"
                            width={200}
                            height={150}
                            className="mt-2 rounded-md"
                          />
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            Link 1 description
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/picture2"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Picture 2
                          </div>
                          <Image
                            src="https://images.unsplash.com/photo-1695751240180-6194e4d152a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2728&q=80"
                            alt="Random image 2"
                            width={200}
                            height={150}
                            className="mt-2 rounded-md"
                          />
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                            Link 2 description
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/item3" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2">
                    Item 3
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col space-y-4">
                <Link
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="/item1"
                  onClick={closeSheet}
                >
                  Item 1
                </Link>
                <Link
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="/item2"
                  onClick={closeSheet}
                >
                  Item 2
                </Link>
                <Link
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="/item3"
                  onClick={closeSheet}
                >
                  Item 3
                </Link>
                <Link
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="/contact"
                  onClick={closeSheet}
                >
                  Contact
                </Link>
                <ThemeSwitcher />
              </nav>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  )
}
