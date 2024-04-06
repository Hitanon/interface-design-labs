import { useEffect } from "react";
import { Link } from "react-router-dom";

import { observer } from "mobx-react-lite";

import useProjectInfo from "../../hooks/useProjectInfo";

import SocialMediaButton from "../ui/SocialMediaButton";

import { MAIN_ROUTE, CATEGORIES_ROUTE, ABOUT_US_ROUTE } from "../../utils/Consts";

import "./general.css";

const Footer = observer(() => {
  const { loadProjectInfo, projectInfo } = useProjectInfo();

  useEffect(() => {
    loadProjectInfo();
  }, []);

  return (
    <footer>
      <div>
        <Link rel="stylesheet" to={MAIN_ROUTE}>
          <img className="logo" src="/img/logo.svg" alt="Logo" />
        </Link>
      </div>

      <ul className="footer-menu">
        <li>
          <Link className="footer-menu-link" to={MAIN_ROUTE}>
            Главная
          </Link>
        </li>
        <li>
          <Link className="footer-menu-link" to={CATEGORIES_ROUTE}>
            Категории
          </Link>
        </li>
        <li>
          <Link className="footer-menu-link" to={ABOUT_US_ROUTE}>
            О нас
          </Link>
        </li>
      </ul>

      <div className="footer-contats">
        <div>Phone: {projectInfo.phone}</div>
        <div>Email: {projectInfo.email}</div>

        <ul className="icons">
          {projectInfo.social?.map((item) => (
            <SocialMediaButton
              key={item.name}
              name={item.name}
              url={item.url}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
});

export default Footer;
