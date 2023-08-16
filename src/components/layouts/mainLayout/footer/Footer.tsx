import { FC } from "react";
import { useGetFooterData } from "../../../../hooks/fetching/useGetFooterData.js";
import FooterLayout from "./FooterLayout.js";
import FooterLogo from "./FooterLogo.js";
import FooterNavList from "./Lists/FooterNavList.js";
import SocialNetwork from "./Lists/SocialNetwork.js";
import Telephone from "./Telephone.js";

type FooterType = {};

const Footer: FC<FooterType> = () => {
    const { data, isLoading } = useGetFooterData();

    return (
        <FooterLayout
            navLinks={<FooterNavList />}
            socialLinks={
                <SocialNetwork
                    data={data?.data?.attributes?.social_links?.data}
                />
            }
            logo={<FooterLogo />}
            phone={
                <Telephone
                    isLoading={isLoading}
                    phone={data?.data.attributes.phone}
                />
            }
        />
    );
};

export default Footer;
