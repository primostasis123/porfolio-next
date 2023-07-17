import React from 'react'

export default function Project() {
    return (
        <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                <h2 className="after-effect after:left-52">Project</h2>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <h2 className="text-white text-xl">Inventory Management using Amazon FBA</h2>
                            <p className="text-[#44566c] text-color-910 leading-7">
                               {"I have created an all-in-one solution for E-Commerce that updates the products of customers' Rakuten and YahooStore based on their Amazon Store."}
                                {"Additionally, it includes automatic delivery using Amazon FBA (Fulfillment by Amazon)."}
                                {"This integrated system streamlines the process and ensures efficient management of inventory and order fulfillment across different platforms."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
