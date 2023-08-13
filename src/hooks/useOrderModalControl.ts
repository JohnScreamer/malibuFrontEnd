import { useControlURLParam } from "./useControlURLParam.js";

export const useOrderModalControl = () => {
    const { addUrlParam, isActive, removeUrlParam } = useControlURLParam({
        property: "orderDone",
        value: true,
    });

    const handlerOpenOrderDoneModal = (
        e?: React.MouseEvent<HTMLButtonElement>
    ) => {
        addUrlParam();
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    return {
        orderModalStatus: isActive,
        handlerOpenOrderDoneModal,
        handlerCloseOrderModal: removeUrlParam,
    };
};
