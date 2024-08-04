'use client'

import * as React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { ThemeSwitcher } from '@/src/components/atoms/ThemeSwitcher'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/src/components/ui/navigation-menu'

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavigationMenu>
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
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
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
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
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
                        </a>
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
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
