import "./ui.css";

const getClassName = (name) => {
  switch (name) {
  case "Twitter":
    return "social-icon twitter-icon";
  case "Youtube":
    return "social-icon youtube-icon";
  case "VK":
    return "social-icon vk-icon";
  default:
    return "";
  }
};

const SocialMediaButton = ({ name, url }) => {
  return (
    <li>
      <a className={getClassName(name)} href={url}>
        {name}
      </a>
    </li>
  );
};

export default SocialMediaButton;
