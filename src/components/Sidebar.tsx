import logo from "@/assets/icons/logo.svg";
import { links } from "@/utils/navLinks";

import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
    return (
        <aside className="w-full h-fit lg:min-w-[5rem] lg:h-[54.75rem] bg-sidebar flex flex-row lg:flex-col justify-center lg:justify-normal lg:items-center border-r border-[#EBECF2] px-5 lg:px-0">
            <Link href="#" className="my-5">
                <Image src={logo.src} alt="logo" height={40} width={40} />
            </Link>
            <nav className="space-y-4 flex flex-row lg:flex-col items-center justify-between w-full">
                {links.map((link) => (
                    <button
                        key={link.id}
                        className="h-full w-full gap-[0.62rem] flex flex-row lg:flex-col items-center justify-center"
                    >
                        <Image
                            src={link.src}
                            alt={link.alt}
                            height={24}
                            width={24}
                        />
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default SideBar;
