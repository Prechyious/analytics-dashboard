import Image from "next/image";

const orders = [
    {
        id: 1,
        name: "marcus bergson",
        orderDate: "Nov 15, 2023",
        amount: "80,000",
        status: "paid",
        imgSrc: "/images/marcus.png",
    },
    {
        id: 2,
        name: "jaydon vaccaro",
        orderDate: "Nov 15, 2023",
        amount: "150,000",
        status: "refund",
        imgSrc: "/images/jaydon.png",
    },
    {
        id: 3,
        name: "corey schleifer",
        orderDate: "Nov 14, 2023",
        amount: "87,000",
        status: "paid",
        imgSrc: "/images/corey.png",
    },
    {
        id: 4,
        name: "cooper press",
        orderDate: "Nov 14, 2023",
        amount: "100,000",
        status: "refund",
        imgSrc: "/images/cooper.png",
    },
    {
        id: 5,
        name: "phillip lubin",
        orderDate: "Nov 13, 2023",
        amount: "78,000",
        status: "paid",
        imgSrc: "/images/phillip.png",
    },
];

const Table = () => {
    return (
        <section className="w-full px-5 pb-5">
            <header className="hidden h-[1.5rem] md:flex items-center w-full justify-between text-[#9CA4AB] dark:text-grayscale-300 text-[1rem] font-medium leading-[1.5rem] mb-5">
                <h3 className="w-full">Name</h3>
                <h3 className="w-2/3">Date</h3>
                <h3 className="w-1/2">Amount</h3>
                <h3 className="w-[45%]">Status</h3>
                <h3 className="w-[45%]">Invoice</h3>
            </header>

            {orders.map(({ id, name, orderDate, amount, status, imgSrc }) => (
                <div
                    key={id}
                    className="border-t dark:border-t-gray-600 py-[0.875rem] flex gap-1 md:gap-0 flex-col md:flex-row md:items-center w-full justify-between text-[1rem] font-normal leading-[1.5rem] hover:bg-grayscale-100 dark:hover:bg-zinc-700 duration-500 cursor-pointer"
                >
                    <div className="w-full flex items-center gap-[0.62rem]">
                        <h4 className="md:hidden text-[#9CA4AB] dark:text-grayscale-200">
                            Name:
                        </h4>
                        <Image src={imgSrc} alt={name} height={32} width={32} />
                        <h4 className="capitalize font-medium text-[#9CA4AB] dark:text-grayscale-200">
                            {name}
                        </h4>
                    </div>
                    <h4 className="w-2/3 text-[#737373] dark:text-grayscale-300 text-[0.875rem]">
                        <span className="md:hidden text-[#9CA4AB] dark:text-grayscale-200 mr-[0.62rem]">
                            Date:
                        </span>
                        {orderDate}
                    </h4>
                    <h4 className="w-1/2 text-[#0D062D] dark:text-gray-200">
                        <span className="md:hidden text-[#9CA4AB] dark:text-grayscale-200 mr-[0.62rem]">
                            Amount:
                        </span>
                        ${amount}
                    </h4>
                    <strong
                        className={`w-[45%] capitalize font-normal ${
                            status === "refund"
                                ? "text-alerts-error"
                                : "text-alerts-success"
                        }`}
                    >
                        <span className="md:hidden text-[#9CA4AB] dark:text-grayscale-200 text- mr-[0.62rem]">
                            Status:
                        </span>
                        {status}
                    </strong>
                    <h4 className="w-[45%] flex items-center gap-[0.38rem] text-[#0D062D] dark:text-grayscale-100/70 text-[0.875rem] leading-[1.275rem]">
                        <span className="md:hidden text-[#9CA4AB] dark:text-grayscale-200 mr-[0.62rem]">
                            Invoice:
                        </span>
                        <span className="text-white">
                            <Image
                                className="dark:invert"
                                src="/icons/documents-down.svg"
                                alt="view more"
                                height={16}
                                width={16}
                            />
                        </span>
                        View
                    </h4>
                </div>
            ))}
        </section>
    );
};

export default Table;
