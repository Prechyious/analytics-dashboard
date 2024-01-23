import { TEXT_STYLE } from "@/utils/constants";

const Text = ({ children, className = "", type, variant }: TTextProps) => {
    return (
        <p className={`${TEXT_STYLE[type]} font-${variant} ${className}`}>
            {children}
        </p>
    );
};

export default Text;
