"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <Popover className="fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between px-6 py-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-b-xl">
      <div className="flex items-center">
        <Link href="/" className="block">
          <Image
            src="/logo-avanti.png"
            alt="Logo Viação Avanti"
            width={100}
            height={50}
            priority={true}
            className="object-contain h-12 w-auto"
          />
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-8">
        <Link href="https://escala.viacaoavanti.com.br/" passHref className="font-semibold hover:text-blue-600 transition">
          <Button variant="link">Colaboradores</Button>
        </Link>
        <Link href="/tres-pontas" className="font-semibold hover:text-blue-600 transition">
          <Button variant="link">Três Pontas</Button>
        </Link>
        <Link href="/sobre-nos" className="font-semibold hover:text-blue-600 transition">
          <Button variant="link">Sobre Nós</Button>
        </Link>
        <Link href="https://www.linkedin.com/company/via-oavanti/jobs/" passHref className="font-semibold hover:text-blue-600 transition">
          <Button variant="link">Trabalhe conosco!</Button>
        </Link>
        <Link href="https://wa.me/5538992300030?text=Gostaria%20de%20saber%20mais%20sobre%20a%20Viação%20Avanti" passHref className="font-semibold hover:text-blue-600 transition">
          <Button variant="link">Contato</Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      {/* Mobile Menu */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition sm:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-100">
            <div className="px-5 pt-4 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="/logo-avanti.png"
                    alt="Logo Viação Avanti"
                    width={80}
                    height={40}
                    priority={true}
                    className="object-contain h-10 w-auto"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close Menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                <Link href="https://escala.viacaoavanti.com.br/" passHref className="block font-medium text-gray-700 hover:text-blue-600 transition">
                    Colaboradores
                  </Link>
                  <Link href="/tres-pontas" className="block font-medium text-gray-700 hover:text-blue-600 transition">
                    Três Pontas
                  </Link>
                  <Link href="/sobre-nos" className="block font-medium text-gray-700 hover:text-blue-600 transition">
                    Sobre Nós
                  </Link>
                  <Link href="https://www.linkedin.com/company/via-oavanti/jobs/" passHref className="block font-medium text-gray-700 hover:text-blue-600 transition">
                    Trabalhe conosco!
                  </Link>
                  <Link href="https://wa.me/5538992300030?text=Gostaria%20de%20saber%20mais%20sobre%20a%20Viação%20Avanti" passHref className="block font-medium text-gray-700 hover:text-blue-600 transition">
                    Contato
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
