import PropTypes from 'prop-types';

const LaunchCard = ({ missionPatch, missionName, missionId, launchYear, launchSuccess, landSuccess }) => (
    <div className="launches__container--item">
        <div className="item--img-container">
            <img className="item--img" src={missionPatch} alt="Mission_patch" />
        </div>
        <h5>{missionName}</h5>
        <div className="item--container">
            <h6>Mission Id's:</h6>
            <span>{missionId.length === 0 ? "no IDs available" : missionId.map((item, index) => <li key={index}>{item}</li>)}</span>
        </div>
        <div className="item--container">
            <h6>Launch Year:</h6>
            <span>{launchYear}</span>
        </div>
        <div className="item--container">
            <h6>Succesful Launch:</h6>
            <span>{launchSuccess ? launchSuccess.toString() : 'false'}</span>
        </div>
        <div className="item--container">
            <h6>Succesful Landing:</h6>
            <span>{landSuccess === null ? "false" : landSuccess.toString()}</span>
        </div>
    </div>
);

LaunchCard.propTypes = {
    missionPatch: PropTypes.string,
    missionName: PropTypes.string,
    missionId: PropTypes.array,
    launchYear: PropTypes.string,
    launchSuccess: PropTypes.bool,
    landSuccess: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ])
};

export default LaunchCard;