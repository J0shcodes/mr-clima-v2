import Image from "next/image"

const WeatherNews = () => {
    return (
        <div className="col-span-2 row-span-2 space-y-6 rounded-[40px] bg-[rgba(4,51,69,0.2)] px-7 pb-6 pt-4 shadow-lg backdrop-blur-[10px]">
            <h2 className="text-lg">Weather Local News</h2>
            <div className="gri flex grid-cols-12 flex-col justify-between gap-4 md:flex-row">
                <div className="col-span-3">
                    <div className="relative h-[8.125rem] w-full overflow-hidden rounded-xl md:h-[6.25rem]">
                        <Image
                            className="object-cover"
                            src="/assets/images/snowing-2.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <p className="mt-1 text-sm">
                        Weather news content goes here...
                    </p>
                </div>
                <div className="col-span-3">
                    <div className="relative h-[8.125rem] w-full overflow-hidden rounded-xl md:h-[6.25rem]">
                        <Image
                            className="object-cover"
                            src="/assets/images/snowing-2.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <p className="mt-1 text-sm">
                        Weather alerts content goes here...
                    </p>
                </div>
                <div className="col-span-3">
                    <div className="relative h-[8.125rem] w-full overflow-hidden rounded-xl md:h-[6.25rem]">
                        <Image
                            className="object-cover"
                            src="/assets/images/snowing-2.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <p className="mt-1 text-sm">
                        Weather tips content goes here...
                    </p>
                </div>
                <div className="col-span-3">
                    <div className="relative h-[8.125rem] w-full overflow-hidden rounded-xl md:h-[6.25rem]">
                        <Image
                            className="object-cover"
                            src="/assets/images/snowing-2.jpg"
                            alt=""
                            fill
                        />
                    </div>
                    <p className="mt-1 text-sm">
                        Weather tips content goes here...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherNews
