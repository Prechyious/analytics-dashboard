export const formattedDate = (length: "short" | "long") => {
    const date = new Date();

    return date.toLocaleDateString("en-US", {
        month: length,
        day: "numeric",
        year: "numeric",
    });
};
