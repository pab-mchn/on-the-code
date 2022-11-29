import HeaderLinks from "./HeaderLinks";
import SocialLinks from "./SocialLinks";
import JobsLinks from "./JobsLinks";
import DonateLinks from "./DonateLinks";
import FooterLinks from "./FooterLinks";
import LanguageButtons from "../LanguageButtons/LanguageButtons";

import "./Links.css";

const HomeLinks = () => {
  return (
    <>
      <LanguageButtons />
      <HeaderLinks />
      <SocialLinks />
      <JobsLinks />
      <DonateLinks />
      <FooterLinks />
    </>
  );
};

export default HomeLinks;
