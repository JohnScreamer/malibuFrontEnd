import { FC } from "react";
import konfeti from "./../../assets/confetiAboutUs.png";
import konfeti2 from "./../../assets/confety2.png";
import aboutUsBG from "./../../assets/aboutUsBg.png";
import people from "./../../assets/aboutUsPeople.png";
import MainTitle from "../typography/MainTitle.js";
import Typography from "../typography/Typography.js";
type AboutUsMainTitleType = {};

const AboutUsMainTitle: FC<AboutUsMainTitleType> = () => {
    return (
        <>
            <div className=" w-full  relative">
                <div className="absolute    left-0  h-full  max-md:bottom-0   w-full      z-[2] ">
                    <img
                        src={konfeti}
                        alt="bg-konfeti"
                        className="   relative  w-full object-center object-contain  h-full max-w-[1345px]  mx-auto  max-md:hidden "
                    />
                    <img
                        src={konfeti2}
                        alt="bg-konfeti"
                        className="   relative  object-center h-full object-contain   w-full md:hidden  "
                    />
                </div>

                <div className="flex relative max-md:flex-col  max-w-[1208px] mx-auto">
                    <div className="flex flex-col p-5 px-[30px] max-lg:p-5 max-md:p-2 gap-4 w-[55%] max-md:w-full relative z-[3] mb-[76px] max-md:mb-[0px]">
                        <MainTitle className="max-lg:text-[48px]">
                            Про нас
                        </MainTitle>
                        <Typography
                            variant="L"
                            bold
                            tag="text"
                            className="text-orange max-lg:text-lg max-md:text-sm"
                        >
                            "Малібу" - ваш улюблений магазин смаку та якості! У
                            нас ви знайдете найсвіжіші продукти, відібрані зі
                            старанністю для вашого комфорту та насолоди. З нами
                            кожна покупка стає особливою подією, адже ми
                            прагнемо дарувати вам найкращі враження.
                        </Typography>
                    </div>
                    <div className=" max-md:w-full h-[352px] max-md:h-full max-md:mt-[-5%]">
                        <div className="absolute max-md:relative  right-0 bottom-0  items-end w-[50%] max-md:w-full flex justify-end z-[0]  ">
                            <img
                                src={aboutUsBG}
                                className="h-full object-cover max-w-[675px] w-full max-md:mx-auto"
                                alt="bg-konfeti"
                            />
                        </div>
                        <div className="absolute   right-0 bottom-0 items-end w-[50%] max-md:w-full flex justify-end  z-[0]  ">
                            <img
                                src={people}
                                className="h-full object-cover max-w-[675px]  w-full max-md:mx-auto"
                                alt="bg-konfeti"
                            />
                        </div>
                    </div>
                    <div className="relative z-[3]"></div>
                </div>
            </div>
        </>
    );
};

export default AboutUsMainTitle;
