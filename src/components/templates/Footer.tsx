"use client";
import { LuCopyleft } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Tooltip } from "@nextui-org/react";
import logo from "@/public/Footer_logo.svg";
import blackLogo from "@/public/black_DIX31.png";
import whitelogo from "@/public/white_DIX31.png";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const dix31 = resolvedTheme === "dark" ? whitelogo : blackLogo;

  return (
    <footer className='text-gray-900 bg-gray-200 dark:bg-slate-700 dark:text-slate-300'>
      <div className='container px-5 md:py-12 mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='flex w-full md:w-1/3 px-4 md:justify-start justify-center mt-4 md:mt-0'>
          <nav className='flex flex-col mb-8'>
            <h2 className='title-font font-medium tracking-widest text-sm mb-3 uppercase'>
              Découvrez davantage
            </h2>
            <Link
              href='#'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Item_1
            </Link>
            <Link
              href='#'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Item_2
            </Link>
            <Link
              href='#'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Item_3
            </Link>
          </nav>
        </div>

        <div className='w-full mt-2 text-sm md:text-xs lg:text-lg text-gray-500 dark:text-slate-400 '>
          <div className='flex justify-center'>
            <Image
              src={logo}
              alt='DIX31 logo'
              className='object-fill'
              width={250}
              height={50}
            />
          </div>
          <article className=' flex justify-center items-center'>
            Votre partenaire pour le développement web
          </article>
        </div>

        <div className='flex w-full md:w-1/3 px-4 md:justify-end justify-center mt-4 md:mt-0'>
          <nav className='flex flex-col mb-8'>
            <h2 className='title-font font-medium tracking-widest text-sm mb-3 uppercase'>
              Liens utiles
            </h2>

            <Link
              href='/mentions'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              mentions légales
            </Link>
            <Link
              href='/protection'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              protections des données
            </Link>
            <Link
              href='/contact'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
      <legend className='bg-gray-100 dark:bg-black'>
        <div className='py-4 flex flex-col md:flex-row space-y-2 md:space-y-0'>
          <aside className='flex w-full md:w-1/2 justify-center md:ml-auto text-sm tracking-widest'>
            2023 Created by
            <Link
              href='https://www.dix31.com'
              target='_blank'
              className='mx-1 hover:underline'
            >
              {/* DIX31.com */}
              <picture className='w-full flex justify-center md:justify-end text-white pr-1 mt-1'>
                <Image
                  src={dix31}
                  alt='Logo DIX31.com'
                  height={15}
                  className='text-white'
                />
              </picture>
            </Link>
            with
            <Link
              href='https://fr.wikipedia.org/wiki/Copyleft'
              target='_blank'
              className='flex mx-1 hover:underline'
            >
              Copyleft license
              <LuCopyleft />
            </Link>
          </aside>
          <aside className='flex w-full md:w-1/2 items-center justify-center md:ml-auto text-sm tracking-widest space-x-8'>
            <Tooltip showArrow={true} color='primary' content='Linkedin'>
              <Link
                href='https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390/'
                target='_blank'
                className='text-gray-500 dark:text-gray-200 dark:hover:text-blue-500'
              >
                <FaLinkedin size={24} />
              </Link>
            </Tooltip>
            <Tooltip showArrow={true} color='default' content='Github'>
              <Link
                href='https://github.com/koala819/'
                target='_blank'
                className='ml-3 text-gray-500 dark:text-gray-200 dark:hover:text-yellow-500'
              >
                <FaGithub size={24} />
              </Link>
            </Tooltip>
          </aside>
        </div>
      </legend>
    </footer>
  );
}
