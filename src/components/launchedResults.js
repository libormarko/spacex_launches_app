import LaunchedResult from './launchedResult';

const LaunchedResults = ({ results }) => (
    <div className="results__container">
        {
            results && results.map(result => 
                <LaunchedResult
                    key={result.launch_date_unix}
                    missionPatch = {result.links.mission_patch_small}
                    missionName={result.mission_name}
                    missionId={result.mission_id}
                    launchYear={result.launch_year} 
                    launchSuccess={result.launch_success}
                    landSuccess={result.rocket.first_stage.cores[0].land_success}
                />
            )
          }
    </div>
);

export default LaunchedResults;