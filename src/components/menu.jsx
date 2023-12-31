import React from 'react';
import FullscreenModal from './modal';

const Menu = () => {
    return (
        <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 text-slate-700 lg:flex">
            <div>
                <a
                    href="#"
                    className="block md:inline-block px-3 py-2 rounded-md hover:text-orange-700 focus:outline-none"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="block md:inline-block px-3 py-2 rounded-md hover:text-orange-700 focus:outline-none"

                >
                    Features
                </a>
                <a
                    href="#"
                    className="block md:inline-block px-3 py-2 rounded-md hover:text-orange-700 focus:outline-none"

                >
                    Pricing
                </a>
                <a
                    href="#"
                    className="block md:inline-block px-3 py-2 rounded-md hover:text-orange-700 focus:outline-none"

                >
                    Contact
                </a>
            </div>
            <div><FullscreenModal /></div>
        </div>
    )
}

export default Menu;