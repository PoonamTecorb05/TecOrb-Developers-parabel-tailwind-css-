import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const NavBar = () => {
    const hover = "hover:text-textSubMain transitions text-white inline-block py-1 px-2 font-medium text-lg"
    const Hover = ({ isActive }) => (!isActive ? "text-subMain" : hover);

    return (
        <Popover className="py-6">
            <div className="mx-auto   px-4 sm:px-6 lg:px-8">
                <nav className="relative z-50 flex justify-between">
                    <div className="flex items-center md:gap-x-12">
                        <a href="#" className='w-40'>
                            <img src="/images/logo.svg" alt="" />
                        </a>
                        <div className="hidden md:flex md:gap-x-6">
                            <NavLink to="/" className={Hover}>
                                Home
                            </NavLink>
                            <NavLink to="/" className={Hover}>
                                Favorite
                            </NavLink>

                        </div>
                    </div>
                    <div className="flex items-center gap-x-5 md:gap-x-8">

                        <a className="group inline-flex items-center justify-center rounded-full py-2 px-5 text-base font-normal 
                    focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-subMain
                    text-white hover:text-subMain hover:bg-white"
                            href="#">
                            <span>SUBSCRIBE</span>

                        </a>
                        <div className="hidden md:block">
                            <a className="hover:text-subMain transitions text-textSubMain inline-block py-1 px-3 font-medium text-lg"
                                href="#">Sign Up</a>
                            <a className="hover:text-subMain transitions text-textSubMain inline-block py-1 px-3 font-medium text-lg"
                                href="#">Sign in</a>
                        </div>
                        <div className="-mr-1 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-main p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>

                    </div>
                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform  transition md:hidden">
                            <div className="divide-y-1 divide-gray-50 rounded-lg bg-main shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-3 pt-3 pb-4">
                                    <div className="flex items-center justify-between">
                                        <a href="#" className='w-36'>
                                            <img src="/images/logo.svg" alt="" />
                                        </a>

                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                </div>
                                <div className="space-y-6 py-6 px-5">

                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <NavLink to="/" className={Hover}>
                                            Home
                                        </NavLink>
                                        <NavLink to="/" className={Hover}>
                                            Favorite
                                        </NavLink>
                                        <NavLink to="/" className={Hover}>
                                            Sign Up
                                        </NavLink>
                                        <NavLink to="/" className={Hover}>
                                            Sign In
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </nav>
            </div>
        </Popover>
    )
}
export default NavBar