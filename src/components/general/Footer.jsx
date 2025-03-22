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
    {name: "VK", url: "https://vk.com/"},
  ];

  return (
    <footer>
      <div>
        <Link rel="stylesheet" to={MAIN_ROUTE}>
          <img className="logo" src="/img/logo.svg" alt="Logo" />
        </Link>
      </div>

      <ul className="menu footer-menu">
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
        <div>Phone: + 7(999)999-99-99</div>
        <div>Email: artisan.avenue@email.com</div>

        <ul className="menu icons">
          {socials?.map((item) => (
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
