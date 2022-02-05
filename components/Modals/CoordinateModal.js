import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import coordinateStyles from "../../styles/Modal/CoordinateModal.module.scss";

const CloseCoordinateButton = withStyles(() => ({
  root: {
    marginTop: "0.5em",
    color: "#fffcf7",
    backgroundColor: "#A51C30",
    "&:hover": {
      backgroundColor: "#A23E48",
    },
  },
}))(Button);

function CoordinateModal({ openCoordsModal, handleCoordsModalClose, weather }) {
  return (
    <Modal
      open={openCoordsModal}
      onClose={handleCoordsModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={coordinateStyles["coordinate-modal-wrapper"]}>
        <div className={coordinateStyles["coordinate-modal-content"]}>
          <div className={coordinateStyles["coordinate-modal-element"]}>
            <div>
              <h1>Latitude:</h1>
            </div>
            <div
              className={
                coordinateStyles["coordinate-modal-element-description"]
              }
            >
              <h1> {weather.coord.lat} </h1>
            </div>
          </div>
          <div className={coordinateStyles["coordinate-modal-element"]}>
            <div>
              <h1>Longitude:</h1>
            </div>
            <div
              className={
                coordinateStyles["coordinate-modal-element-description"]
              }
            >
              <h1> {weather.coord.lon} </h1>
            </div>
          </div>
          <div className={coordinateStyles["coordinate-modal-button-wrapper"]}>
            <CloseCoordinateButton
              variant="contained"
              onClick={handleCoordsModalClose}
            >
              Close
            </CloseCoordinateButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CoordinateModal;
