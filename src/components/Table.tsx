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
        imgSrc: "/images/jaydon.png",
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
        <section className="w-full px-5">
            <header className="h-[1.5rem] flex items-center w-full justify-between text-[#9CA4AB] text-[1rem] font-medium leading-[1.5rem] mb-5">
                <h3 className="w-full">Name</h3>
                <h3 className="w-2/3">Date</h3>
                <h3 className="w-1/2">Amount</h3>
                <h3 className="w-[45%]">Status</h3>
                <h3 className="w-[45%]">Invoice</h3>
            </header>

            {orders.map(({ id, name, orderDate, amount, status, imgSrc }) => (
                <div
                    key={id}
                    className="border-t py-[0.875rem] flex items-center w-full justify-between text-[1rem] font-normal leading-[1.5rem] hover:bg-grayscale-100 duration-500 cursor-pointer"
                >
                    <div className="w-full flex items-center gap-[0.62rem]">
                        <Image src={imgSrc} alt={name} height={32} width={32} />
                        <h4 className="capitalize font-medium">{name}</h4>
                    </div>
                    <h4 className="w-2/3 text-[#737373]">{orderDate}</h4>
                    <h4 className="w-1/2 text-[#0D062D]"> ${amount}</h4>
                    <strong
                        className={`w-[45%] capitalize font-normal ${
                            status === "refund"
                                ? "text-alerts-error"
                                : "text-alerts-success"
                        }`}
                    >
                        {status}
                    </strong>
                    <h4 className="w-[45%] flex items-center gap-[0.38rem] text-[#0D062D] text-[0.875rem] leading-[1.275rem]">
                        <span>
                            <Image
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
