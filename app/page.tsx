import React from 'react'
import Sidebar from './components/sidebar/sidebar'

export default function Home() {
    return (
        <div className="lg:rounded-2xl  dark:bg-[#111111] ">
            <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                <h2 className="after-effect after:left-52 ">About Me</h2>
                <div className="lg:hidden">
                    <Sidebar/>
                </div>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-[#44566c] text-color-910 leading-7">
                                {"Hi, I'm a Software Engineer from the Philippines."}
                                {"My passion is to work with extremely talented people and collaborate to create products that would make an immediate impact."}
                                {"I am a self-directed and motivated Software Engineer who works effectively in a dynamic environment,"}
                                {"always striving to develop innovative solutions to complex problems. I aspire to learn new technologies and tools."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14  ">
                <h3 className="text-[35px] text-white font-bold font-robotoSlab "> My Usual Go Stacks</h3>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-[#44566c] text-color-910 leading-7">
                                <span className="font-semibold text-white">React Library: </span> <br />
                                - React with Typescript (Vite) - Front End <br />
                                - Bootstrap / Tailwind - CSS <br />
                                - C# Web API using .NET Core - Back End <br />
                                - Entity Framework Core - ORM <br />
                                - PostgreSQL, MySQL, MSSQL - Database <br />
                                <br />
                                <span className="font-semibold text-white">React Framework: </span><br />
                                - Next.js with TypeScript - Front End / Back End<br />
                                - Bootstrap / Tailwind - CSS<br />
                                - Prisma - ORM<br />
                                - PostgreSQL, MySQL, MSSQL - Database<br />
                                <br />
                                <span className="font-semibold text-white">PHP Framework:</span><br />
                                - Laravel - Front End / Back End<br />
                                - Bootstrap / Tailwind - CSS<br />
                                - PostgreSQL, MySQL, MSSQL - Database<br />
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-[#44566c] mt-2.5  text-color-910 leading-7">
                                {"While tools do matter, they should be chosen based on their suitability for the task and their ability to help achieve the desired outcome. "}
                                {"It's important to strike a balance between using reliable and appropriate tools and applying problem-solving skills to create effective solutions."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
