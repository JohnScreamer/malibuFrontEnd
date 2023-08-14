import { FC, useState } from "react";
import Button from "../../uikit/buttons/Button.js";
import SubscribeSVG from "./SubscribeSVG.js";
import UnSubscribeSVG from "./UnSubscribeSVG.js";

type SubscribeForDiscountType = {};

const SubscribeForDiscount: FC<SubscribeForDiscountType> = () => {
    const [isSubscribe, setSubscribeStatus] = useState(false);
    const handlerToggleSubscribeAlert = () => {
        setSubscribeStatus((prev) => !prev);
    };

    return (
        <div className="center">
            <Button
                variant="primary"
                filledType="empty"
                size="mini"
                className="group"
                onClick={handlerToggleSubscribeAlert}
                leftElem={isSubscribe ? <SubscribeSVG /> : <UnSubscribeSVG />}
            >
                <span className="text-[12px] px-[6px] group-hover:text-orange duration-200">
                    {isSubscribe
                        ? "Відписатися від повідомлень"
                        : "Повідомити про зниження ціни"}
                </span>
            </Button>
        </div>
    );
};

export default SubscribeForDiscount;
