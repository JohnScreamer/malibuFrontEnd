import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NAVBAR_ARR } from "../../../../constants/navbar.js";
import { useAppSelector } from "../../../../hooks/reduxHooks.js";
import { useUserAuth } from "../../../../hooks/useUserAuth.js";
import { productInCartSelector } from "../../../../redux/selectors/index.js";
import Typography from "../../../typography/Typography.js";

type NavBarType = {};

const NavBar: FC<NavBarType> = () => {
    const productIndCart = useAppSelector(productInCartSelector);
    const { handlerOpenLoginModal, isAuth } = useUserAuth();
    const navigate = useNavigate();
    const navTo = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        urlTo: string,
        title: string
    ) => {
        if (title === "Корзина") return;

        if (!isAuth) {
            handlerOpenLoginModal();
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        return navigate(urlTo);
    };
    const list = NAVBAR_ARR.map(({ svg, title, url }) => {
        return (
            <li
                key={title}
                className="group active:scale-95 duration-300 hover:fill-orange"
            >
                <Link
                    to={url}
                    onClick={(e) => navTo(e, url, title)}
                    className=" flex-col max-sm:gap-1 gap-2 center relative"
                >
                    {svg}
                    {title === "Корзина" ? (
                        <Typography
                            tag="title"
                            className={`${
                                productIndCart ? "" : "hidden"
                            } absolute text-[8px] w-[11px] h-[11px]  top-[-5px] left-[45%] center   bg-orange  rounded text-white`}
                        >
                            {productIndCart}
                        </Typography>
                    ) : null}
                    <Typography
                        tag="span"
                        className="group-hover:text-orange max-sm:text-[8px] leading-none"
                        variant="XS"
                    >
                        {title}
                    </Typography>
                </Link>
            </li>
        );
    });
    return <>{list}</>;
};

export default NavBar;
