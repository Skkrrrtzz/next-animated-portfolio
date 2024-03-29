"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const pathName = usePathname();

    console.log(pathName);
    return (
        <Link className={`rounded p-1 ${pathName === link.url && "bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold"}`} href={link.url}>
            {link.title}
        </Link>
    );
};

export default NavLink