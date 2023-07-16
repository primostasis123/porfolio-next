
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFileLines,} from '@fortawesome/free-regular-svg-icons'
import { faCertificate, faList, faFolder  } from '@fortawesome/free-solid-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

export default function Menu() {
    return (
        <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
            <nav className="hidden lg:block">
                <ul className="flex">
                    <li>  <Link className="menu-item" href="/" >
                        <span className="text-xl mb-1">
                            <FontAwesomeIcon icon={faUser} />
                        </span> About </Link></li>
                    <li> <Link className="menu-item" href="/experience">
                        <span className="text-xl mb-1">
                            <FontAwesomeIcon icon={faFileLines} />
                        </span> Experience </Link></li>
                    <li> <Link className="menu-item" href="/project">
                        <span className="text-xl mb-1">
                            <FontAwesomeIcon icon={faFolder} />
                        </span> Projects </Link></li>
                </ul>
            </nav>
        </header>
    )
}
