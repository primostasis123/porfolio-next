
export default function Log() {
    return (
        <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                <h2 className="after-effect after:left-52">Site Logs</h2>
            </div>
            <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                <h3 className="text-[35px] text-white font-bold font-robotoSlab "> May 23, 2023</h3>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                    <div className="col-span-12 space-y-2.5">
                        <div className="lg:mr-16">
                            <p className="text-[#44566c] text-color-910 leading-7">
                            {" Hi, as of the moment, this website doesn't have a mobile view experience as it is still under construction. <br/>"}
                            {" Please switch to desktop view. Thank you for your understanding. "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
