import { Grid, GridColumn } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';


function ActivityDashboard() {

    const { activityStore } = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList />
            </GridColumn>
            <GridColumn width='6'>
                <ActivityFilters />
            </GridColumn>
        </Grid>
    )
}
export default observer(ActivityDashboard)