import { FC } from "react";
import AboutUsItem from "./AboutUsItem.js";

type AboutUsListType = {};
const ABOUT_LIST = [
    {
        title: "Широкий асортимент товарів",
        subtitle:
            "Магазин пропонує великий вибір товарів для різних груп споживачів.",
    },
    {
        title: "Висока якість продукції",
        subtitle:
            "Всі товари в магазині проходять відповідний контроль якості перед продажем.",
    },
    {
        title: "Зручність онлайн-покупок",
        subtitle:
            "Можливість замовити товари онлайн дозволяє зекономити час і зусилля при покупках.",
    },
];

const AboutUsList: FC<AboutUsListType> = () => {
    return (
        <>
            <ul className="flex gap-[75px] max-md:gap-[22px] max-[425px]:gap-[12px] mxCenter max-lg:grid grid-cols-2 max-sm:grid-cols-1">
                {ABOUT_LIST.map((el, i) => (
                    <AboutUsItem
                        key={i}
                        subTitle={el.subtitle}
                        title={el.title}
                    />
                ))}
            </ul>
        </>
    );
};

export default AboutUsList;
