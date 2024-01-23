import {
    HEADING_LINE_HEIGHT,
    HEADING_STYLE,
    HEADING_VARIANTS,
} from "@/utils/constants";

const Heading = ({ children, type = "h1", className = "" }: THeadingProps) => {
    const Type = type ? HEADING_VARIANTS[type] : "h1";
    return <Type className={`${className} font-semibold`}>{children}</Type>;
};

export default Heading;
