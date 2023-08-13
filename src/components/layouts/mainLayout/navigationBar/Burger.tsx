import { FC, MouseEventHandler } from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks.js";
import { toggleCatalogStatus } from "../../../../redux/slice/common.js";
import Typography from "../../../typography/Typography.js";

type BurgerType = {};

const Burger: FC<BurgerType> = () => {
    const dispatch = useAppDispatch();
    const handlerToggleCatalogMenuStatus: MouseEventHandler<
        HTMLButtonElement
    > = (e) => {
        dispatch(toggleCatalogStatus());
        e.stopPropagation();
        console.log("click");
    };
    return (
        <>
            <li
                key="каталог"
                className="group active:scale-95 duration-300 hover:fill-orange"
            >
                <button
                    onClick={handlerToggleCatalogMenuStatus}
                    className=" flex-col max-sm:gap-1 gap-2 center relative"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="inherit"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 12C3 11.7239 3.22386 11.5 3.5 11.5H21.5C21.7761 11.5 22 11.7239 22 12C22 12.2761 21.7761 12.5 21.5 12.5H3.5C3.22386 12.5 3 12.2761 3 12Z"
                            fill="inherit"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 6C3 5.72386 3.22386 5.5 3.5 5.5H21.5C21.7761 5.5 22 5.72386 22 6C22 6.27614 21.7761 6.5 21.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6Z"
                            fill="inherit"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 18C3 17.7239 3.22386 17.5 3.5 17.5H21.5C21.7761 17.5 22 17.7239 22 18C22 18.2761 21.7761 18.5 21.5 18.5H3.5C3.22386 18.5 3 18.2761 3 18Z"
                            fill="inherit"
                        />
                    </svg>

                    <Typography
                        tag="span"
                        className="group-hover:text-orange max-sm:text-[8px] leading-none"
                        variant="XS"
                    >
                        Каталог
                    </Typography>
                </button>
            </li>
        </>
    );
};

export default Burger;
