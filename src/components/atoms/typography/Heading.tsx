import { HEADING_STYLE, HEADING_VARIANTS } from "@/utils/constants";

const Heading = ({
    children,
    type = "h1",
    className = "",
    variant,
}: THeadingProps) => {
    const Type = type ? HEADING_VARIANTS[type] : "h1";
    return (
        <Type
            className={`${className} ${HEADING_STYLE[variant]} font-semibold`}
        >
            {children}
        </Type>
    );
};

export default Heading;
