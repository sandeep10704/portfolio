import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="www.linkedin.com/in/sai-venkata-sandeep-250855288" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/sandeep10704" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
