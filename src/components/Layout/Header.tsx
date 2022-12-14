import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/future/image'
import Link from 'next/link'

const navigation: { name: string, href: string }[] = [
    // { name: 'Dashboard', href: '/dashboard' },
    // { name: 'FAQ', href: '/faq' },
]

const Header = () => {
    return (
        <Disclosure as="nav" className="bg-[#29CCC4]">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-24 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={"/"}>
                                        <a>
                                            <Image
                                                className="block h-16 w-auto lg:hidden cursor-pointer"
                                                width={800}
                                                height={800}
                                                src="/WTF logo.png"
                                                alt="What The Floor"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={"/"}>
                                        <a>
                                            <Image
                                                className="hidden h-20 w-auto lg:block cursor-pointer"
                                                src="/WTF logo.png"
                                                width={800}
                                                height={800}
                                                alt="What The Floor"
                                                priority={true}
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block mt-7">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link href={item.href} key={item.name}>
                                                <a
                                                    className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name}>
                                    <Disclosure.Button
                                        className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header