type THeadingProps = {
    type: string;
    className?: string;
    children: React.ReactNode;
    variant:
        | "extraLarge"
        | "large"
        | "normal"
        | "medium"
        | "small"
        | "extraSmall";
};

type TTextProps = {
    className?: string;
    children: React.ReactNode;
    type: "extraLarge" | "large" | "medium" | "small" | "extraSmall" | "2xl";
    variant: "semibold" | "medium" | "normal";
};
