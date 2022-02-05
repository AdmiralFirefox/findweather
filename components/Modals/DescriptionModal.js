import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import descriptionModalStyles from "../../styles/Modal/DescriptionModal.module.scss";

const CloseDecriptionButton = withStyles(() => ({
  root: {
    color: "#fffcf7",
    backgroundColor: "#A51C30",
    "&:hover": {
      backgroundColor: "#A23E48",
    },
  },
}))(Button);

function DescriptionModal({
  openDescriptionModal,
  handleDescriptionModalClose,
  weather,
}) {
  return (
    <Modal
      open={openDescriptionModal}
      onClose={handleDescriptionModalClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={descriptionModalStyles["description-modal-wrapper"]}>
        <div className={descriptionModalStyles["description-modal-content"]}>
          <div className={descriptionModalStyles["description-modal-elements"]}>
            <div>
              <h2>forecast:</h2>
            </div>
            <div>
              <h2
                className={
                  descriptionModalStyles[
                    "description-modal-elements-description"
                  ]
                }
              >
                {weather.weather[0].description}
              </h2>
            </div>
          </div>

          <div className={descriptionModalStyles["description-modal-elements"]}>
            <div>
              <h2>humidity:</h2>
            </div>
            <div>
              <h2
                className={
                  descriptionModalStyles[
                    "description-modal-elements-description"
                  ]
                }
              >
                {weather.main.humidity}%
              </h2>
            </div>
          </div>

          <div className={descriptionModalStyles["description-modal-elements"]}>
            <div>
              <h2>pressure:</h2>
            </div>
            <div>
              <h2
                className={
                  descriptionModalStyles[
                    "description-modal-elements-description"
                  ]
                }
              >
                {weather.main.pressure} Pa
              </h2>
            </div>
          </div>

          <div className={descriptionModalStyles["description-modal-elements"]}>
            <div>
              <h2>max temp:</h2>
            </div>
            <div>
              <h2
                className={
                  descriptionModalStyles[
                    "description-modal-elements-description"
                  ]
                }
              >
                {Math.round(weather.main.temp_max)}°C
              </h2>
            </div>
          </div>

          <div className={descriptionModalStyles["description-modal-elements"]}>
            <div>
              <h2>min temp:</h2>
            </div>
            <div>
              <h2
                className={
                  descriptionModalStyles[
                    "description-modal-elements-description"
                  ]
                }
              >
                {Math.round(weather.main.temp_min)}°C
              </h2>
            </div>
          </div>
          <div
            className={
              descriptionModalStyles["description-modal-button-wrapper"]
            }
          >
            <CloseDecriptionButton
              variant="contained"
              onClick={handleDescriptionModalClose}
            >
              Close
            </CloseDecriptionButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DescriptionModal;
