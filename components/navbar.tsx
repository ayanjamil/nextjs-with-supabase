import React from "react";
// import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import classNames from "classnames";
import Link from "next/link";
import psocWhite from '@/public/images/psoc_white.png';
import Image from "next/image";
import { IconFacebook, IconInstagram, IconLinkedin } from "./Icons";

// Define the type for the navbar links
interface NavbarLink {
    id: number;
    title: string;
    url: string;
}

const navbarContent: NavbarLink[] = [
    { id: 1, title: "Gallery", url: "/gallery" },
    { id: 2, title: "Events", url: "/events" },
    { id: 3, title: "Education", url: "/education" },
    { id: 4, title: "Latest", url: "/latest" },
    { id: 5, title: "About Us", url: "/about-us" },
];

export function Navbar(props: any) {
    return (
        <header
            className="static top-0 z-50 flex-shrink-0 py-4 my-4 md:sticky mt-10"
            {...props}
        >
            <div className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
                <Link href="/" className="text-lg font-bold">
                    <div className="w-full  ">
                        <Image src={psocWhite} alt="PSOC Logo" width={120} height={120} />
                    </div>
                </Link>
                <div className="  flex flex-col  ">
                    {/* <div className="flex justify-end gap-x-2">
                        <Link
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center "
                        >
                            <IconFacebook />
                        </Link>
                        <Link
                            href="https://www.google.com/_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center"
                        >
                            <IconInstagram />
                        </Link>
                        <Link
                            href="https://www.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center"
                        >
                            <IconLinkedin />
                        </Link>
                    </div> */}

                    <Menu items={navbarContent} />
                </div>
            </div>
        </header>
    );
}

function Menu({ items }: { items: NavbarLink[] }) {
    return (
        <ul
            className="flex flex-row gap-x-8  mt-5"
            data-cy="navbar-menu"
        >
            {items.map((item) => (
                <MenuLink link={item} key={item.id} />
            ))}
        </ul>
    );
}

function MenuLink({ link }: { link: NavbarLink }) {
    const pathname = "";

    return (
        <li>
            <Link
                href={link.url}
                className=" hover:underline text-xl md:text-2xl"
            >
                {link.title}
            </Link>
        </li>
    );
}
