import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../typography/Typography.js";
import Button from "../../uikit/buttons/Button.js";

type SuccessOrderContentType = {};

const SuccessOrderContent: FC<SuccessOrderContentType> = () => {
    const navigate = useNavigate();
    const toMain = () => {
        navigate("/");
    };
    const toOrders = () => {
        navigate("/orders");
    };
    return (
        <div className=" flex flex-col gap-8 ">
            <Typography variant="M" tag="text" className="text-center">
                "Ваше замовлення успішно створене. Ви можете перейти до вкладки
                'Закази', щоб переглянути деталі замовлення. Також, ви можете
                продовжити покупки. Якщо у вас є будь-які питання, не соромтеся
                звернутися до нас."
            </Typography>
            <div className=" gap-6 center">
                <Button
                    onClick={toOrders}
                    filledType="border"
                    variant="primary"
                >
                    До замовлень
                </Button>
                <Button
                    onClick={toMain}
                    filledType="border"
                    variant="secondary"
                >
                    На головну{" "}
                </Button>{" "}
            </div>
        </div>
    );
};

export default SuccessOrderContent;
