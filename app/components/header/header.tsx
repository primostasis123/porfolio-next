'use client'
import { useState } from "react";
import { faBars, faXmark, faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileLines } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import portfolio from '../../assets/images/portfolio_logo_3.png'
import Link from "next/link";
export default function Header() {
    const [menuShow, setMenuShow] = useState<string>("show");
    const [xmarkShow, setXMarkShow] = useState<string>("hidden");
    const handleClick = (menu: string, xmark: string): void => {
        setMenuShow(menu);
        setXMarkShow(xmark);
    };

    return (
        <div className="section-bg">
            <div className="w-full flex justify-between px-4">
                <Image src={portfolio} alt="" width={153} height={32} />
                <div className="flex items-center">
                    <button id="menu-toggle" type="button" className="menu-toggle-btn">
                        <i id="menu-toggle-open-icon" className={"text-xl " + menuShow} onClick={() => handleClick("hidden", "show")}><FontAwesomeIcon icon={faBars} /></i>
                        <i id="menu-toggle-close-icon" className={"text-xl " + xmarkShow} onClick={() => handleClick("show", "hidden")}><FontAwesomeIcon icon={faXmark} /></i>
                    </button>
                </div>
            </div>
            <nav id="navbar" className={menuShow === "hidden" ? "lg:hidden" : "hidden"}>
                <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full  dark:bg-[#1d1d1d]">
                    <li>
                        <Link className="mobile-menu-items" href="/">
                            <span className="mr-2 text-xl">
                                <FontAwesomeIcon icon={faUser} />
                            </span>About
                        </Link>
                    </li>
                    <li>
                        <Link className="mobile-menu-items" href="/experience">
                            <span className="mr-2 text-xl">
                                <FontAwesomeIcon icon={faFileLines} />
                            </span>Experience
                        </Link>
                    </li>
                    <li>
                        <Link className="mobile-menu-items" href="/project">
                            <span className="mr-2 text-xl">
                                <FontAwesomeIcon icon={faFolder} />
                            </span>Project
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
