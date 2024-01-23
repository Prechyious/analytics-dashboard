import logo from "@/assets/icons/logo.svg";
import { links } from "@/utils/navLinks";

import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
    return (
        <aside className="w-[5rem] h-[54.75rem] bg-sidebar flex flex-col items-center border-r border-[#EBECF2]">
            <Link href="#" className="my-5">
                <Image src={logo.src} alt="logo" height={40} width={40} />
            </Link>
            <nav className="space-y-4">
                {links.map((link) => (
                    <button
                        key={link.id}
                        className="h-10 w-10 gap-[0.62rem] flex items-center justify-center"
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
