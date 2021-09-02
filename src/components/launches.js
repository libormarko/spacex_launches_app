import Launch from './launch';
import PropTypes from 'prop-types';

const Launches = ({ results }) => (
    <div className="launches__container">
        {
            results && results.length === 0 
                ?   <div className="no-results-status">There are no launches for your criteria...</div>
                :   results && results.map(result => 
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

Launches.propTypes = {
    results: PropTypes.array,
};

export default Launches;