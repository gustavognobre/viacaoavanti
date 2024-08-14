"use client"

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-bold">Colibri</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/home">TESTE</Link>
          <Link href="/home">TESTE</Link>
          <Link href="/home">TESTE</Link>
          <Link href="/home">TESTE</Link>
        </div>    
        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> 
            <span className="sr-only">Open Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute inset-0 z-10">
              <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
              
              <div className="relative inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold">Colibri</h1>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> 
                          <span className="sr-only">Close Menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <Link href="/home" className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 px-2">TESTE</Link>
                      </nav>
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-2">
                      <Link href="https://www.google.com" passHref className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">Google</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </div>
      <div className="hidden sm:block">
        <Link href="https://www.google.com" passHref className="mr-2 font-bold">Google</Link>
      </div>
    </Popover>
  );
}
