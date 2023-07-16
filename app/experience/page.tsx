import React from 'react'
export default function Experience() {
    return (
        <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                <h2 className="after-effect after:left-52">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                    <div className="items-center space-x-2 mb-4">
                       <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]"> January 2014 - March 2022</span>
                            <h3 className="text-xl text-white"> Ring System Development Inc.</h3>
                            <p className="text-blue-800 "> <a target="_blank" href="https://ring-group.jp ">https://ring-group.jp  </a></p>
                       </div>
                    </div>
                    <div className="items-center space-x-2 mb-4 ">
                       <div className="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]"> March 2022 - Present</span>
                            <h3 className="text-xl text-white"> Eviden (Atos Group)</h3>
                            <p className="text-blue-800 "> <a target="_blank" href="https://eviden.com/">https://eviden.com/ </a></p>
                       </div>
                    </div>
                </div>
            </div>

            <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                <h3 className="text-[35px] text-white font-bold font-robotoSlab "> What I do!</h3>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-[#44566c] text-color-910 leading-7">
                                - Develop, maintain, and support new desktop and web applications.  <br />
                                - Built, tested, and deployed scalable, highly available, and modular software products.  <br />
                                - Drafted comprehensive reports to document bugs and design flaws. <br />
                                - Share knowledge and provide technical assistance to other team members within areas of expertise.<br />
                                - Presenting new features to stakeholders and customers. <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
