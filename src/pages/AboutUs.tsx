import { FC } from "react";

import { ABOUT_US_CRUMBS } from "../constants/breadCrumbsArr.js";

import AboutUsLayout from "../components/aboutUsPage/AboutUsLayout.js";
import AboutUsMainTitle from "../components/aboutUsPage/AboutUsMainTitle.js";
import AboutUsList from "../components/aboutUsPage/list/AboutUsList.js";
import MessageBanner from "../components/aboutUsPage/MessageBanner.js";

type AboutUsType = {};

const AboutUs: FC<AboutUsType> = () => {
    return (
        <>
            <AboutUsLayout breadCrumbsArr={ABOUT_US_CRUMBS}>
                <AboutUsMainTitle />
                <AboutUsList />
                <MessageBanner />
            </AboutUsLayout>
        </>
    );
};

export default AboutUs;
