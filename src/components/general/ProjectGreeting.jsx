import { observer } from "mobx-react-lite";

import {
  CATEGORIES_ROUTE,
  LIST_CATEGORIES_BUTTON_TEXT,
} from "../../utils/Consts";

import TextRedirectButton from "../ui/TextRedirectButton";

const ProjectGreeting = observer(() => {
  return (
    <div className="container">
      <div className="row pg-3 py-4 align-items-center">
        <div className="col-12 col-lg-4 col-xl-2">
          <h1 className="greeting-section-title">Artisan Avenue</h1>

          <div className="gretting-section-text">
            Здравствуйте! На нашем маркетплейсе у вас есть возможность
            приобрести изделия ручной работы
          </div>
          <div>
            <TextRedirectButton
              className="text-button greeting-button"
              text={LIST_CATEGORIES_BUTTON_TEXT}
              route={CATEGORIES_ROUTE}
            />
          </div>
        </div>

        <div className="col-12 col-lg-8 offset-xl-2 col-xl-8">
          <div className="row py-4 align-items-center">
            <img
              className="greeting-image col-4 col-lg-3"
              src="/img/greeting-section/image1.png"
              alt=""
            />
            <img
              className="greeting-image col-4 col-lg-6"
              src="/img/greeting-section/image2.png"
              alt=""
            />
            <img
              className="greeting-image col-4 col-lg-3"
              src="/img/greeting-section/image3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectGreeting;
