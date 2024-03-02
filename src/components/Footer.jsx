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
      <ul>
        {projectInfo.social.map((item) => <li key={item.name}>{item.name}: {item.url}</li>)}
      </ul>
    </>
  );
});

export default Footer;
