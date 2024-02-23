import { useContext } from "react";

import { observer } from "mobx-react-lite";

import { Context } from "..";

const Footer = observer(() => {
  const { projectInfo } = useContext(Context);

  return (
    <>
      <div>Phone: {projectInfo.phone}</div>
      <div>Email: {projectInfo.email}</div>
      <div>About us: {projectInfo.about}</div>
      {
        Object.keys(projectInfo.social).map((key) => <div key={key}>{key}: {projectInfo.social[key]}</div>)
      }
    </>
  );
});

export default Footer;
