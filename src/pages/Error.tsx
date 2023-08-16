import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import Typography from "../components/typography/Typography.js";
import Button from "../components/uikit/buttons/Button.js";
import { ERROR_CRUMBS } from "../constants/breadCrumbsArr.js";

type ErrorPageType = {};

const ErrorPage: FC<ErrorPageType> = () => {
    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/");
    };
    const goToCart = () => {
        navigate("/cart");
    };

    return (
        <PageLayout
            breadCrumbsArr={ERROR_CRUMBS}
            title="404: Ой, це нелегко! Сторінку десь загубили."
            className="bg-mainBg min-h-screen"
        >
            <div className="flex flex-col gap-4 justify-center items-center ">
                <svg
                    width="150px"
                    height="150px"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="256" cy="256" r="256" fill="white" />
                    <path
                        d="M381.38 291.32H129.443C124.164 291.32 119.854 295.88 120.338 301.261C125.87 365.185 184.233 415.502 255.411 415.502C326.59 415.502 384.952 365.209 390.484 301.261C390.945 295.88 386.658 291.32 381.38 291.32Z"
                        fill="#FF6633"
                    />
                    <path
                        d="M210.727 198.896C207.928 198.896 205.145 197.637 203.33 195.222C194.168 183.145 176.76 175.626 157.91 175.626C139.06 175.626 121.652 183.128 112.49 195.222C109.385 199.321 103.549 200.104 99.4765 196.991C95.3875 193.878 94.607 188.027 97.712 183.944C110.505 167.07 133.003 157 157.91 157C182.817 157 205.315 167.07 218.125 183.944C221.23 188.044 220.432 193.878 216.36 196.991C214.664 198.284 212.695 198.896 210.727 198.896Z"
                        fill="#414141"
                    />
                    <path
                        d="M406.895 198.896C404.096 198.896 401.313 197.637 399.498 195.222C390.336 183.145 372.928 175.626 354.078 175.626C335.228 175.626 317.82 183.128 308.658 195.222C305.553 199.321 299.716 200.104 295.644 196.991C291.555 193.878 290.775 188.027 293.88 183.944C306.673 167.07 329.171 157 354.078 157C378.985 157 401.483 167.07 414.293 183.944C417.398 188.044 416.6 193.878 412.528 196.991C410.832 198.284 408.863 198.896 406.895 198.896Z"
                        fill="#414141"
                    />
                </svg>
                <div className="flex gap-4 flex-col ">
                    <Typography variant="S" tag="text">
                        Вітаємо на сторінці, де навіть 404 помилка виглядає як
                        пригода! Здається, наші кібергризуни забули, куди
                        положити ту дуже важливу сторінку, яку ви шукали.
                        Можливо, вони вирішили влаштувати власний карнавал або
                        чаювання з печивом.
                    </Typography>
                    <Typography variant="S" tag="text">
                        Не засмучуйтесь! Ви можете повернутись на{" "}
                        <Link to={"/"} className="text-orange">
                            головну сторінку
                        </Link>{" "}
                        і приєднатись до цієї незвичайної кібер-подорожі. Або ж
                        посмійтеся разом з нами над цією комічною ситуацією,
                        поклавши голову на клавіатуру та натиснувши всі кнопки
                        випадково – хто знає, можливо, саме так і з'явиться та
                        загублена сторінка!
                    </Typography>
                    <Typography variant="S" tag="text">
                        Якщо ви впевнені, що це все-таки несерйозна
                        жартівливість, будь ласка, сповістіть нашу команду
                        підтримки. Можливо, ми зможемо допомогти цим
                        кібергризунам знайти шлях додому. Дякуємо за терпіння і
                        гарного настрою!
                    </Typography>
                </div>
                <div className="flex gap-4 max-md:flex-col max-md:w-full">
                    <Button onClick={goToMain}>До головної</Button>
                    <Button onClick={goToCart} variant="secondary">
                        До Корзини
                    </Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default ErrorPage;
