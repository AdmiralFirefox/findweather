import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DescriptionModal from "./Modals/DescriptionModal";
import CoordinateModal from "./Modals/CoordinateModal";
import buttonStyles from "../styles/WeatherButton.module.scss";

const CoordinateButtons = withStyles(() => ({
  root: {
    color: "#fff",
    backgroundColor: "hsl(190, 64%, 34%)",
    "&:hover": {
      backgroundColor: "hsl(190, 64%, 40%)",
    },
  },
}))(Button);

const MoreDescriptionButton = withStyles(() => ({
  root: {
    color: "#fff",
    backgroundColor: "hsl(190, 64%, 34%)",
    "&:hover": {
      backgroundColor: "hsl(190, 64%, 40%)",
    },
  },
}))(Button);

function WeatherButtons({ weather }) {
  const [openDescriptionModal, setOpenDescriptionModal] = useState(false);
  const [openCoordsModal, setOpenCoordsModal] = useState(false);

  const handleDescriptionModalOpen = () => {
    setOpenDescriptionModal(true);
  };

  const handleDescriptionModalClose = () => {
    setOpenDescriptionModal(false);
  };

  const handleCoordsModalOpen = () => {
    setOpenCoordsModal(true);
  };

  const handleCoordsModalClose = () => {
    setOpenCoordsModal(false);
  };

  return (
    <div className={buttonStyles["buttons-wrapper"]}>
      <DescriptionModal
        openDescriptionModal={openDescriptionModal}
        handleDescriptionModalClose={handleDescriptionModalClose}
        weather={weather}
      />
      <CoordinateModal
        openCoordsModal={openCoordsModal}
        handleCoordsModalClose={handleCoordsModalClose}
        weather={weather}
      />
      <div>
        <CoordinateButtons onClick={handleCoordsModalOpen} variant="contained">
          Coordinates
        </CoordinateButtons>
      </div>
      <div>
        <MoreDescriptionButton
          onClick={handleDescriptionModalOpen}
          variant="contained"
        >
          More Description
        </MoreDescriptionButton>
      </div>
    </div>
  );
}

export default WeatherButtons;
