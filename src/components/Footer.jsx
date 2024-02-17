import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const Footer = observer(() => {
  const { projectInfo } = useContext(Context);

  return (
    <>
      <div>
        Footer
      </div>
      <div>{projectInfo.phone}</div>
      <div>{projectInfo.email}</div>
      <div>{projectInfo.about}</div>
      {
        Object.keys(projectInfo.social).map((key) => <div key={key}>{projectInfo.social[key]}</div>)
      }
    </>
  );
});

export default Footer;
