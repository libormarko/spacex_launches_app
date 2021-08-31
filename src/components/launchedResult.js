const LaunchedResult = ({ missionPatch, missionName, missionId, launchYear, launchSuccess, landSuccess }) => (
    <div className="results__container--item">
        <img src={missionPatch} alt=""/>
        <h5>{missionName}</h5>
        <h6>{missionId.length === 0 ? "no IDs" : missionId.map((item, index) => (index ? ', ': '') + item)}</h6>
        <h6>{launchYear}</h6>
        <h6>{launchSuccess.toString()}</h6>
        <h6>{landSuccess === null ? "ano" : "no"}</h6>
    </div>
);

export default LaunchedResult;