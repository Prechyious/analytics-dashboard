import { Header } from "./Header";
import Heading from "./atoms/typography/Heading";
import BarChartContainer from "./BarChart";
import { GoChevronDown } from "react-icons/go";
import Card from "./Card";
import Table from "./Table";
import TopPlatforms from "./TopPlatforms";
import BarChart from "./BarChart";

const Dashboard = () => {
    return (
        <div className="bg-grayscale-50 dark:bg-zinc-900 min-w-full">
            <Header />

            <section className="w-full space-y-5 px-5 my-5">
                <article className="flex flex-col flex-wrap lg:flex-row w-full gap-5">
                    {/* Sales Trend Card */}
                    <div className="min-h-[23.375rem] w-full xl:w-[57%] bg-white dark:bg-zinc-800 py-4 px-5 border border-[#EDF2F7] dark:border-gray-600 rounded-[0.987rem]">
                        <header className="h-[2.3125rem] w-full flex items-center justify-between mb-4">
                            <Heading
                                type="h3"
                                variant="large"
                                className="text-black dark:text-neutral-100"
                            >
                                Sales Trends
                            </Heading>

                            <div className="flex items-center gap-[0.62rem]">
                                <Heading
                                    type="h3"
                                    variant="normal"
                                    className="text-[#3A3F5] font-medium "
                                >
                                    Sort by:
                                </Heading>
                                <button className="px-3 py-[0.38rem] rounded-[1.25rem] bg-white dark:bg-zinc-800 border border-[#E1DFDF] dark:border-gray-500 flex items-center justify-between gap-[0.62rem] hover:bg-grayscale-100 dark:hover:bg-zinc-700 duration-500">
                                    Weekly
                                    <GoChevronDown className="w-[1.25rem] h-[1.25rem]" />
                                </button>
                            </div>
                        </header>

                        <BarChart />
                    </div>
                    <div className="flex-1 min-h-[23.375rem] grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card
                            heading="Total Order"
                            quantity="350"
                            icon="/icons/box-tick.svg"
                            percent="23.5"
                            uptrend
                            trendImg="/icons/uptrend.svg"
                        />
                        <Card
                            heading="Total Refund"
                            quantity="270"
                            icon="/icons/box-3d.svg"
                            percent="23.5"
                            uptrend={false}
                            trendImg="/icons/downtrend.svg"
                        />
                        <Card
                            heading="Average Sales"
                            quantity="1567"
                            icon="/icons/shopping-cart.svg"
                            percent="23.5"
                            uptrend={false}
                            trendImg="/icons/downtrend.svg"
                        />
                        <Card
                            heading="total Income"
                            quantity="350.000"
                            icon="/icons/box-tick.svg"
                            percent="23.5"
                            uptrend
                            trendImg="/icons/uptrend.svg"
                        />
                    </div>
                </article>
                <article className="flex flex-col xl:flex-row w-full gap-5 lg:h-[26.375rem]">
                    <section className="w-full xl:w-[57%] bg-white dark:bg-zinc-800 border border-[#EDF2F7] dark:border-gray-600 rounded-[0.987rem]">
                        <header className="mt-[1.12rem] px-5 flex w-full items-center justify-between mb-5">
                            <Heading type="h3" variant="large">
                                Last Orders
                            </Heading>
                            <button className="text-alerts-success dark:text-green-400 text-[1.125rem] leading-[1.625rem]">
                                See All
                            </button>
                        </header>

                        <Table />
                    </section>
                    <section className="bg-white dark:bg-zinc-800 w-full lg:flex-1 h-auto border border-[#EDF2F7] dark:border-gray-600 rounded-[0.987rem]  overflow-y-scroll no-scrollbar">
                        <header className="bg-white dark:bg-zinc-800 flex w-full items-center justify-between mb-5 sticky top-0 py-4 h-[2.625rem] z-20  px-5">
                            <Heading
                                type="h3"
                                variant="large"
                                className="h-full"
                            >
                                Top Platforms
                            </Heading>
                            <button className="text-alerts-success dark:text-green-400 text-[1.125rem] leading-[1.625rem]">
                                See All
                            </button>
                        </header>

                        <TopPlatforms />
                    </section>
                </article>
            </section>
        </div>
    );
};

export default Dashboard;
