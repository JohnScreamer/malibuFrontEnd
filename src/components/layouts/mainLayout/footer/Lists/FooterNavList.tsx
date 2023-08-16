import { FC } from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../../../../../constants/footer.js";

type FooterNavListType = {};

const FooterNavList: FC<FooterNavListType> = () => {
    return (
        <>
            <ul className="flex gap-x-10 max-md:gap-x-6 mr-auto flex-wrap   max-[425px]:col-span-2  max-[425px]:mt-6">
                {FOOTER_LINKS.map((el) => {
                    return (
                        <li key={el.title} className="text-[12px]">
                            <Link to={el.url}>{el.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default FooterNavList;
