const SocialMediaButton = ({ name, url }) => {
  return (
    <>
      <div>
        <a href={url}>{name}</a>
      </div>
    </>
  );
};

export default SocialMediaButton;
