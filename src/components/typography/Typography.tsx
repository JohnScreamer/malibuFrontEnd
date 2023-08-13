import { FC, ReactNode } from "react";

type VariantType = "XS" | "S" | "M" | "L" | "XL";

export type TypographyType = {
    className?: string;
    tag?: "bigTitle" | "span" | "text" | "title";
    children: ReactNode;
    variant?: VariantType;
    bold?: boolean;
};

const TypographyStyle = {
    title: {
        XS: "text-lg",
        S: "text-2xl",
        M: "text-4xl",
        L: "text-5xl",
        XL: "text-[64px]",
    },
    text: {
        XS: "text-xs   ",
        S: "text-base  ",
        M: "text-lg  ",
        L: "text-2xl  ",
        XL: "text-4xl  ",
    },
} as const;

const Typography: FC<TypographyType> = (props) => {
    const { className, tag = "text", children, variant = "S", bold } = props;
    let Component: keyof JSX.IntrinsicElements;
    switch (tag) {
        case "title":
            Component = "h2";
            break;
        case "bigTitle":
            Component = "h1";
            break;
        case "text":
            Component = "p";
            break;
        case "span":
            Component = "span";
            break;
        default:
            Component = "div";
            break;
    }
    const textStyle = tag === "title" || tag === "bigTitle" ? "title" : "text";

    return (
        <Component
            className={`${TypographyStyle[textStyle][variant]}    
                
               ${bold ? "font-bold" : ""} ${className}`}
        >
            {children}
        </Component>
    );
};

export default Typography;
