import { ReactNode } from "react";
import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import useClickOutside from "../../hooks/useClickOutside.js";
type CatalogFilterMobileWrapperType = {
    isVisibleFilter: boolean;
    closeFilter: () => void;
    children: ReactNode;
};

const CatalogFilterMobileWrapper: FC<CatalogFilterMobileWrapperType> = ({
    isVisibleFilter,
    closeFilter,
    children,
}) => {
    const wrapperRef = useClickOutside<HTMLDivElement>(closeFilter);
    return (
        <CSSTransition
            in={isVisibleFilter}
            timeout={300}
            classNames="modal"
            unmountOnExit
        >
            <div
                className={`flex z-30 top-0 left-0  flex-col gap-10
     max-md:bg-white max-md:fixed  max-md:max-w-[320px]
     max-md:p-5 max=md:primaryBoxShadow max-md:h-full  `}
                ref={wrapperRef}
            >
                {children}
            </div>
        </CSSTransition>
    );
};

export default CatalogFilterMobileWrapper;
