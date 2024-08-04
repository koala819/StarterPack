'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuCopyleft } from 'react-icons/lu'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/Footer_logo.svg'
import blackLogo from '@/public/black_DIX31.png'
import whitelogo from '@/public/white_DIX31.png'

export function Footer() {
  const { resolvedTheme } = useTheme()
  const dix31 = resolvedTheme === 'dark' ? whitelogo : blackLogo
  const year = new Date().getFullYear()

  return (
    <footer className="text-gray-900 bg-gray-200 dark:bg-slate-700 dark:text-slate-300">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <nav className="flex flex-col">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase">
                Découvrez davantage
              </h2>
              <Link
                href="#"
                className="text-gray-600 hover:underline dark:text-zinc-300 capitalize mb-2"
              >
                Item_1
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:underline dark:text-zinc-300 capitalize mb-2"
              >
                Item_2
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:underline dark:text-zinc-300 capitalize mb-2"
              >
                Item_3
              </Link>
            </nav>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <nav className="flex flex-col">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase">
                Liens utiles
              </h2>
              <Link
                href="/mentions"
                className="text-gray-600 hover:underline dark:text-zinc-300 capitalize mb-2"
              >
                mentions légales
              </Link>
              <Link
                href="/protection"
                className="text-gray-600 hover:underline dark:text-zinc-300 capitalize mb-2"
              >
                protections des données
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:underline dark:text-zinc-300 capitalize mb-2"
              >
                contact
              </Link>
            </nav>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/2 mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src={logo}
                alt="DIX31 logo"
                className="object-contain"
                width={250}
                height={50}
              />
            </div>
            <p className="text-center text-sm md:text-xs lg:text-sm text-gray-500 dark:text-slate-400">
              Votre partenaire pour le développement web
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-xs md:text-sm text-center md:text-left">
              <span>{year} Created by</span>
              <Link
                href="https://www.dix31.com"
                target="_blank"
                className="mx-1 hover:underline inline-flex items-center"
              >
                <Image
                  src={dix31}
                  alt="Logo DIX31.com"
                  height={15}
                  className="mr-1"
                />
              </Link>
              <span>with</span>
              <Link
                href="https://fr.wikipedia.org/wiki/Copyleft"
                target="_blank"
                className="mx-1 hover:underline inline-flex items-center"
              >
                Copyleft license
                <LuCopyleft className="ml-1" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390/"
                target="_blank"
                className="text-gray-500 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://github.com/koala819/"
                target="_blank"
                className="text-gray-500 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-500"
              >
                <FaGithub size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
