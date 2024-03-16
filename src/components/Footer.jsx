import { useEffect } from "react";

import { observer } from "mobx-react-lite";

import useProjectInfo from "../hooks/useProjectInfo";

import SocialMediaButton from "./ui/SocialMediaButton";


const Footer = observer(() => {
  const { loadProjectInfo, projectInfo } = useProjectInfo();

  useEffect(() => {
    loadProjectInfo();
  }, []);

  return (
    <>
      <div>Phone: {projectInfo.phone}</div>
      <div>Email: {projectInfo.email}</div>
      <div>About us: {projectInfo.about}</div>
      {projectInfo.social?.map((item) => <SocialMediaButton key={item.name} name={item.name} url={item.url} />)}
    </>
  );
});

export default Footer;
