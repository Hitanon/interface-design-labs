import { useEffect, useState } from "react";

import { observer } from "mobx-react-lite";

import { getProjectInfo } from "../clients/GeneralClient";

import SocialMediaButton from "./ui/SocialMediaButton";


const Footer = observer(() => {
  const [projectInfo, setProjectInfo] = useState({});

  const loadProjectInfo = async () => {
    setProjectInfo(await getProjectInfo());
  };

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
