import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import portfolio from '../../assets/images/portfolio_logo_3.png'
export default function Header() {
    return (
        <div className="section-bg">
            <div className="w-full flex justify-between px-4">
                <Image src={portfolio} alt="" width={153} height={32}/>
                <div className="flex items-center">
                    {/* <button id="menu-toggle" type="button" className="menu-toggle-btn">
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </button> */}
                </div>
            </div>
        </div>
    )
}
