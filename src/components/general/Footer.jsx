import { Link } from "react-router-dom";

import { observer } from "mobx-react-lite";

import SocialMediaButton from "../ui/SocialMediaButton";

import {
  MAIN_ROUTE,
  CATEGORIES_ROUTE,
  ABOUT_US_ROUTE,
} from "../../utils/Consts";

import "./general.css";

const Footer = observer(() => {
  const socials = [
    { name: "Twitter", url: "https://x.com/home" },
    { name: "Youtube", url: "https://www.youtube.com/" },
    { name: "VK", url: "https://vk.com/" },
  ];

  return (
    <footer className="container">
      <div className="row gy-3 footer">
        <div className="col-12 col-md-1 col-lg-1 d-flex justify-content-center justify-content-lg-start align-items-center">
          <Link rel="stylesheet" to={MAIN_ROUTE}>
            <img className="logo" src="/img/logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="col-12 col-md-11 col-lg-7 col-xl-4 offset-xl-2 ">
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
        </div>

        <div className="col-12 col-lg-4 col-xl-3 offset-xl-2">
          <div className="contacts-block">
            <address className="row">
              <div className="col-12 py-1 text-center text-lg-end">
                +7(999)999-99-99
              </div>
              <div className="col-12 py-1 text-center text-lg-end">
                artisan.avenue@email.com
              </div>
            </address>

            <ul className="icons-menu icons">
              {socials?.map((item) => (
                <SocialMediaButton
                  key={item.name}
                  name={item.name}
                  url={item.url}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
