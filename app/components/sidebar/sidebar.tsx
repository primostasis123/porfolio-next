import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import avatar from '../../assets/images/profile_photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMobileScreenButton, faEnvelopeOpenText, faLocationDot, faCalendarDays, faCloudDownload } from '@fortawesome/free-solid-svg-icons'
export default function Sidebar() {
    return (

            <div className="w-full mb-6 lg:mb-0 mx-auto relative  text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                <Image src={avatar} alt="" className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" />
                <div className="pt-[100px] pb-8">
                    <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Edito Moncada Jr </h2>
                    <h3
                        className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                        Software Developer
                    </h3>
                    <div className="flex justify-center space-x-3">
                        <a href="https://www.facebook.com/appetitedestruciton/" target="_blank" rel="noopener noreferrer">
                            <span className="socialbtn text-[#1773EA]">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/edito-moncada-jr-837bb4132/" target="_blank" rel="noopener noreferrer">
                            <span className="socialbtn text-[#0072b1]">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                        </a>
                        <a href="https://github.com/primostasis123" target="_blank" rel="noopener noreferrer">
                            <span className="socialbtn text-white">
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        </a>
                    </div>

                    <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                        <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                            <span className="socialbtn  dark:bg-black text-[#E93B81] shadow-md">
                                <FontAwesomeIcon icon={faMobileScreenButton} />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                <p className="dark:text-white">+63 917 947 3193</p>
                            </div>
                        </div>
                        <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                            <span className="socialbtn  dark:bg-black text-[#6AB5B9] shadow-md">
                                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                <p className="dark:text-white">editomoncada123@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                            <span className="socialbtn dark:bg-black text-[#FD7590] shadow-md">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                <p className="dark:text-white">Cebu, Philippines</p>
                            </div>
                        </div>
                        <div className="flex py-2.5">
                            <span className="socialbtn  dark:bg-black text-[#C17CEB] shadow-md">
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                <p className="dark:text-white">February 26, 1993</p>
                            </div>
                        </div>
                    </div>

                    <Link href="Resume.pdf" target="_blank"   >
                        <button className="dowanload-btn">
                        <FontAwesomeIcon icon={faCloudDownload} /> Download Resume 
                        </button>
                    </Link>
                </div>
            </div>
 
    )
}
