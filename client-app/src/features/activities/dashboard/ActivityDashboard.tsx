import react from 'react'
import { Grid, GridColumn, List } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props{
    activities: Activity[];
    selectedActivity : Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity, openForm, closeForm, editMode}: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity && !editMode && 
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                />}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} />}
            </GridColumn>
        </Grid>
    )
}