import { FC } from "react";
import MapWrapper from "../components/common/map/MapWrapper.js";
import PhoneInfo from "../components/common/phoneinfo/PhoneInfo.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import { CONTACTS_CRUMBS } from "../constants/breadCrumbsArr.js";

type ContactsType = {};

const Contacts: FC<ContactsType> = () => {
    return (
        <>
            <PageLayout
                breadCrumbsArr={CONTACTS_CRUMBS}
                smallDistance
                title="Контакти"
            >
                <PhoneInfo />
                <MapWrapper />
            </PageLayout>
        </>
    );
};

export default Contacts;
