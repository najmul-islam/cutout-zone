"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  FaBlogger,
  FaHammer,
  FaLock,
  FaPaperclip,
  FaQuestionCircle,
  FaRegAddressBook,
  FaDrupal,
  FaRegImage,
  FaAdjust,
  FaRegLifeRing,
  FaCamera,
  FaTheaterMasks,
  FaPalette,
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { TbAlignRight } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FaXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="border-y sticky top-0 bg-white">
      <div className="container flex justify-between items-center py-3">
        <Link href="/">
          <Image
            src="/logo/cutout-zone.png"
            alt="logo"
            className="w-[180px] md:w-[260px] m-0 p-0"
            width={260}
            height={20}
          />
        </Link>
        {/* navbar */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about">
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid gap-1 p-3 md:w-[300px] lg:w-[300px] ">
                  <ListItem href="/portfolio" title="Portfolio">
                    <FaRegAddressBook /> Portfolio
                  </ListItem>

                  <ListItem href="/faq">
                    <FaQuestionCircle /> FAQ
                  </ListItem>

                  <ListItem href="/blog">
                    <FaBlogger /> Blog
                  </ListItem>

                  <ListItem href="/terms-of-service">
                    <FaHammer /> Terms Of Service
                  </ListItem>

                  <ListItem href="/privacy-policy">
                    <FaLock /> Privacy Policy{" "}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/service">
                <NavigationMenuTrigger>Service</NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent className="origin-top-left">
                <ul className="grid w-[450px] gap-2 p-2 md:grid-cols-2">
                  <ListItem href="/service/clipping-path">
                    <FaPaperclip /> Clipping Path
                  </ListItem>

                  <ListItem href="/service/ghost-mannequin">
                    <FaDrupal /> Ghost mannequin
                  </ListItem>

                  <ListItem href="/service/photo-retouching">
                    <FaRegImage /> Photo retouching
                  </ListItem>

                  <ListItem href="/service/shadow-creation">
                    <FaAdjust /> Shadow Creation
                  </ListItem>

                  <ListItem href="/service/jewelry-retouching">
                    <FaRegLifeRing /> Jewelry Retouching
                  </ListItem>

                  <ListItem href="/service/headshot-retouching">
                    <FaCamera /> Headshot Retouching
                  </ListItem>

                  <ListItem href="/service/image-masking">
                    <FaTheaterMasks /> Image Masking
                  </ListItem>

                  <ListItem href="/service/color-correction">
                    <FaPalette /> Color Correction
                  </ListItem>
                </ul>

                <Link
                  href="/service"
                  className="p-4 flex justify-center font-medium hover:underline bg-slate-50 hover:bg-slate-100 transition-all"
                >
                  More service
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/free-trial" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Free Trial
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* drawer */}
        <Sheet className="md:hidden max-w-[16rem]">
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline">
              <TbAlignRight className="text-2xl" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <Link href="/">
                <SheetTitle>Cut Out Zone</SheetTitle>
              </Link>
              <SheetClose asChild>
                <Button variant="ghost">
                  <IoClose className="text-2xl" />
                </Button>
              </SheetClose>
            </SheetHeader>
            <Separator className="my-3" />
            <div className="grid">
              <SheetClose asChild>
                <Link href="/" className="py-4 text-sm font-medium">
                  Home
                </Link>
              </SheetClose>
              <Separator />
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="">
                  <AccordionTrigger>About</AccordionTrigger>
                  <AccordionContent className="pl-3 items-center">
                    <SheetClose asChild>
                      <Link
                        href="/portfolio"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaRegAddressBook /> Portfolio
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/faq"
                        className="flex items-center gap-2 py-2 text-sm font-medium "
                      >
                        <FaQuestionCircle /> FAQ
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/blog"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaBlogger /> Blog
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/terms-of-service"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaHammer /> Terms Of Service
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/privacy-policy"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaLock /> Privacy Policy
                      </Link>
                    </SheetClose>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Service</AccordionTrigger>
                  <AccordionContent className="pl-3 items-center">
                    <SheetClose asChild>
                      <Link
                        href="/service/clipping-path"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaPaperclip /> Clipping Path
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/service/ghost-mannequin"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaDrupal /> Ghost mannequin
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/service/photo-retouching"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaRegImage /> Photo retouching
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/service/shadow-creation"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaAdjust /> Shadow Creation
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/service/jewelry-retouching"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaRegLifeRing /> Jewelry Retouching
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/service/headshot-retouching"
                        className="flex items-center gap-2 py-2 text-sm font-medium"
                      >
                        <FaCamera /> Headshot Retouching
                      </Link>
                    </SheetClose>
                    {/*   <Link
                      href="/service/image-masking"
                      className="flex items-center gap-2 py-2 text-sm font-medium"
                    >
                      <FaTheaterMasks /> Image Masking
                    </Link>

                    <Link
                      href="/service/color-correction"
                      className="flex items-center gap-2 py-2 text-sm font-medium"
                    >
                      <FaPalette /> Color Correction
                    </Link> */}

                    <Link
                      href="/service"
                      className="p-1 flex justify-center font-medium hover:underline bg-slate-50 hover:bg-slate-100 transition-all rounded"
                    >
                      More service
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <SheetClose asChild>
                <Link href="/pricing" className="py-4 text-sm font-medium">
                  Pricing
                </Link>
              </SheetClose>
              <Separator />
              <SheetClose asChild>
                <Link href="/free-trial" className="py-4 text-sm font-medium">
                  Free Trial
                </Link>
              </SheetClose>
              <Separator />
              <SheetClose asChild>
                <Link href="/contact" className="py-4 text-sm font-medium">
                  Contact
                </Link>
              </SheetClose>
              <Separator />
            </div>

            <SheetFooter>
              <a
                href="mailto:info@cutoutzone.com"
                className="flex text-muted-foreground items-center text-[14px] text-gray duration-200 ease-in"
              >
                <FaRegEnvelope className="mr-2" />
                info@cutoutzone.com
              </a>
              <ul className="flex items-center space-x-2">
                <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in">
                  <a
                    href="https://www.facebook.com/thecutoutzone/"
                    target="_blank"
                  >
                    <FaFacebookF className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
                  </a>
                </li>
                <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in hover:bg-primary hover:ease-in">
                  <a
                    href="https://www.instagram.com/the_CutOut_Zone"
                    target="_blank"
                  >
                    <FaInstagram className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
                  </a>
                </li>
                <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in hover:bg-primary hover:ease-in">
                  <a
                    href="https://www.linkedin.com/company/the-cutout-zone/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
                  </a>
                </li>
                <li className="group cursor-pointer rounded-full bg-[rgba(0,0,0,0.07)] p-1 duration-200 ease-in hover:bg-primary hover:ease-in">
                  <a href="https://twitter.com/theCutOutZone" target="_blank">
                    <FaXTwitter className="text-primary duration-200 ease-in hover:ease-in group-hover:text-white-900" />
                  </a>
                </li>
              </ul>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none flex gap-2 items-center">
              {children}
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default NavBar;
