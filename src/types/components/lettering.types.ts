type THeadingProps = {
    type: string;
    className?: string;
    children: React.ReactNode;
};

type TTextProps = {
    className?: string;
    children: React.ReactNode;
    type: "extraLarge" | "large" | "medium" | "small" | "extraSmall";
    variant: "semibold" | "medium" | "normal";
};
