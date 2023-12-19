import Logo from './Logo'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/">
                        <Logo></Logo>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact" type="button" className="text-white bg-redLogo hover:bg-black duration-500 font-medium rounded-[20px] text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>

                        <div id="drawer-contact" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-contact-label">
                            <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>Contact us</h5>
                            <button type="button" data-drawer-hide="drawer-contact" aria-controls="drawer-contact" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close menu</span>
                            </button>
                            <form className="mb-6">
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                    <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
                            </form>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <a href="#" className="hover:underline">info@company.com</a>
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                <a href="#" className="hover:underline">212-456-7890</a>
                            </p>
                        </div>

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block duration-500 py-2 px-3 text-gray-900 hover:text-redLogo rounded hover:bg-gray md:hover:bg-transparent md:hover:text-redLogo md:p-0 md:dark:hover:text-redLogo dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block duration-500 py-2 px-3 text-gray-900 hover:text-redLogo rounded hover:bg-gray md:hover:bg-transparent md:hover:text-redLogo md:p-0 md:dark:hover:text-redLogo dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">About</a>
                            </li>
                            <li>
                                <a href="/volounteer" className="block duration-500 py-2 px-3 text-gray-900 hover:text-redLogo rounded hover:bg-gray md:hover:bg-transparent md:hover:text-redLogo md:p-0 md:dark:hover:text-redLogo dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Volounteer</a>
                            </li>
                            <li>
                                <a href="/" className="block duration-500 py-2 px-3 text-gray-900 hover:text-redLogo rounded hover:bg-gray md:hover:bg-transparent md:hover:text-redLogo md:p-0 md:dark:hover:text-redLogo dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Discover</a>
                            </li>
                            <li>
                                <a href="/" className="block duration-500 py-2 px-3 text-gray-900 hover:text-redLogo rounded hover:bg-gray md:hover:bg-transparent md:hover:text-redLogo md:p-0 md:dark:hover:text-redLogo dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ParXners</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar