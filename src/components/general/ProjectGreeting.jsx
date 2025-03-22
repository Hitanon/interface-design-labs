import { observer } from "mobx-react-lite";

import {
  CATEGORIES_ROUTE,
  LIST_CATEGORIES_BUTTON_TEXT,
} from "../../utils/Consts";

import TextRedirectButton from "../ui/TextRedirectButton";

const ProjectGreeting = observer(() => {
  return (
    <div className="greeting-section">
      <div>
        <h1 className="greeting-section-title">Artisan Avenue</h1>

        <div className="gretting-section-text">
          Здравствуйте! На нашем маркетплейсе у вас есть возможность приобрести
          изделия ручной работы
        </div>
        <div>
          <TextRedirectButton
            className="text-button greeting-button"
            text={LIST_CATEGORIES_BUTTON_TEXT}
            route={CATEGORIES_ROUTE}
          />
        </div>
      </div>

      <div className="gretting-images">
        <img src="/img/greeting-section/image1.png" alt="" />
        <img
          className="main-image"
          src="/img/greeting-section/image2.png"
          alt=""
        />
        <img src="/img/greeting-section/image3.png" alt="" />
      </div>
    </div>
  );
});

export default ProjectGreeting;
