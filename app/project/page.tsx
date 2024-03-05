import Link from 'next/link'
import React from 'react'

export default function Project() {
    return (
        <div className="lg:rounded-2xl  dark:bg-[#111111]">
            <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                <h2 className="after-effect after:left-60">Hobby Project</h2>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <h2 className="text-white text-xl"><Link className="text-blue-600" href="https://www.reviewpdf-ai.com/" target='_blank'>https://www.reviewpdf-ai.com/</Link>
                            </h2>
                            <p className="text-[#44566c] text-color-910 leading-7">
                            A SaaS application that allows you to have conversations with any PDF documents. Simply upload your file and start asking questions right away with the power of OpenAI. <br/>
                                ● Next.js: React Framework<br/>
                                ● Tailwind CSS: Styling framework<br/>
                                ● MySQL: Relational Database<br/>
                                ● Prisma: ORM (Object-Relational Mapping)<br/>
                                ● tRPC: Typesafe API<br/>
                                ● Vercel: Cloud Hosting<br/>
                                ● AWS RDS: Database Hosting on Amazon Web Services<br/>
                                ● Pinecone: Vector Storage Platform<br/>
                                ● PayPal: Payment Service<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
