import Launch from './launch';

const Launches = ({ results }) => (
    <div className="launches__container">
        {
            results && results.map(result => 
                <Launch
                    key={`${result.mission_name}-${result.launch_date_unix.toString()}`.replace(/\s+/g, '')}
                    launchDateUnix={result.launch_date_unix}
                    missionPatch={result.links.mission_patch_small}
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

export default Launches;