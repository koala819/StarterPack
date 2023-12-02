"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/src/components/util/ThemeSwitcher";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/Navbar_logo.svg";

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Item_1", path: "/" },
    { name: "Item_2", path: "#" },
    { name: "Item_3", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='pb-4'
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/' aria-current='page' color='foreground'>
            <Image
              src={logo}
              alt='DIX31 logo'
              className='object-fill'
              width={80}
              height={50}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex ' justify='center'>
        <NavbarItem isActive={path.includes("#")}>
          <Link href='#' aria-current='page' color='foreground'>
            Item_1
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive={path.includes("#")}>
            <DropdownTrigger>
              <Button
                disableRipple
                className={` ${
                  path.includes("#")
                    ? "font-bold text-base data-[hover=true]:bg-transparent"
                    : "p-0 text-base data-[hover=true]:bg-transparent hover:text-gray-600"
                }`}
                endContent={<FiChevronDown />}
                radius='sm'
                variant='light'
              >
                Item_2
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='Item_3'
            className='w-[340px]'
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key='di1'
              description='di1 description'
              startContent={
                <Image
                  alt='alt di1'
                  className='object-cover w-full h-full'
                  height={100}
                  src='https://images.unsplash.com/photo-1695764062673-ca63e7a6f4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
                  width={100}
                />
              }
              onClick={() => router.push("#")}
            >
              Link_1
            </DropdownItem>
            <DropdownItem
              key='di2'
              description='di2 description'
              startContent={
                <Image
                  alt='alt di2'
                  priority
                  className='object-cover w-full h-full'
                  height={100}
                  src='https://images.unsplash.com/photo-1695751240180-6194e4d152a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2728&q=80'
                  width={100}
                />
              }
              onClick={() => router.push("/projets/memoryGame")}
            >
              Link_2
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={path.includes("#")}>
          <Link href='#' aria-current='page' color='foreground'>
            Item_3
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.includes("/contact")}>
          <Link href='/contact' aria-current='page' color='foreground'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='mt-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className='w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 '
              href={item.path}
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
