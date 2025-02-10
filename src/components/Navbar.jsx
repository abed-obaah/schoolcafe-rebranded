import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import logo from "../assets/logomain.png"

const solutions = [
  {
    name: 'Portal',
    // description: 'Get a better understanding of where your traffic is coming from.',
    href: '/comingSoon',
    icon: ChartBarIcon,
  },
  {
    name: 'News',
    // description: 'Speak directly to your customers in a more meaningful way.',
    href: 'https://schoolnews.info/',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Courses', href: '/comingSoon', icon: ShieldCheckIcon },
  {
    name: 'Accommodation',
    // description: "Connect with third-party tools that you're already using.",
    href: '/comingSoon',
    icon: Squares2X2Icon,
  },
  {
    name: 'Reviews',
    // description: 'Build strategic funnels that will drive your customers to convert',
    href: '/comingSoon',
    icon: ArrowPathIcon,
  },
  {
    name: 'Community',
    // description: 'Get detailed reports that will help you make more informed decisions ',
    href: 'https://schoolcafe.ng/community/',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Alumni',
    // description: 'Get detailed reports that will help you make more informed decisions ',
    href: '/comingSoon',
    icon: DocumentChartBarIcon,
  },
]


export default function Example() {
  return (
    <Popover className="relative bg-[#0076CA] bg-opacity-5 px-10 z-40">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div>
          <a href="/" className="flex">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={logo}
              className="h-8 w-auto sm:h-10"
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </PopoverButton>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <PopoverGroup as="nav" className="flex space-x-10">
            

          <Link
              to={"/comingSoon"}>
                  <a href="#" className="text-base font-[400] text-[#03172A] hover:text-gray-900">
                  Portal
                  </a>
              </Link>
          
            <a href="https://schoolnews.info/" className="text-base font-[400] text-[#03172A] hover:text-gray-900">
            News
            </a>
            <Link
              to={"/comingSoon"}>
                    <a href="#" className="text-base font-[400] text-[#03172A] hover:text-gray-900">
                    Courses
                    </a>
              </Link>
           

            <Link
              to={"/comingSoon"}>
                       <a href="#" className="text-base font-[400] text-[#03172A] hover:text-gray-900">
                  Accommodation
                  </a>
              </Link>
           
            <Link
              to={"/comingSoon"}>
                <a href="#" className="text-base font-[400] text-[#03172A] hover:text-gray-900">
                  Reviews
                  </a>
              </Link>
            
            <a href="https://schoolcafe.ng/community/" className="text-base font-[400] text-[#03172A] hover:text-gray-900">
            Community
            </a>
            <Link
              to={"/comingSoon"}>
            <a href="#" className="text-base font-[400] text-[#03172A] hover:text-gray-900">
            Alumni
            </a>
            </Link>
          </PopoverGroup>
          <div className="flex gap-4">
      {/* Log In Button */}
      <Link to={'/log-in'}>
        <button className="px-6 py-2 text-blue-600 border-2 border-b-4  border-[#0076Cc] border-b-[#0076CA] rounded-lg text-lg font-medium hover:bg-blue-50 transition">
          Log In
        </button>
      </Link>
      {/* Sign Up Button */}
      <Link to={'/create-account'}>
        <button className="px-6 py-2.5 text-white bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Sign Up
        </button>
      </Link>
    </div>
        </div>
      </div>

      <PopoverPanel
        transition
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  alt="School cafe logo"
                  src={logo}
                  className="h-8 w-auto"
                />
              </div>
              <div className="-mr-2">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-6">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                  >
                    {/* <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                      <item.icon aria-hidden="true" className="size-6" />
                    </div> */}
                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                  </a>
                ))}
              </nav>
              <div className="flex gap-4 mt-4">
      {/* Log In Button */}
      <Link to={'/log-in'}>
        <button className="px-6 py-2 text-blue-600 border-2 border-b-4  border-[#0076Cc] border-b-[#0076CA] rounded-lg text-lg font-medium hover:bg-blue-50 transition">
          Log In
        </button>
      </Link>
      {/* Sign Up Button */}
      <Link to={'/create-account'}>
        <button className="px-6 py-2.5 text-white bg-gradient-to-b from-[#27BAF3] to-[#0C56A5] rounded-lg text-lg font-medium hover:bg-blue-700 transition">
          Sign Up
        </button>
      </Link>
    </div>
            </div>
          </div>
          
        </div>
      </PopoverPanel>
    </Popover>
  )
}
