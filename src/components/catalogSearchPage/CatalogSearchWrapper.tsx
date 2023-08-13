import { FC, ReactNode } from "react";

type CatalogSearchWrapperType = {
    children: ReactNode;
};

const CatalogSearchWrapper: FC<CatalogSearchWrapperType> = ({ children }) => {
    return (
        <>
            <main className="flex-grow h-full w-full">
                <div className="mxCenter py-5 pb-20">{children}</div>
            </main>
        </>
    );
};

export default CatalogSearchWrapper;
