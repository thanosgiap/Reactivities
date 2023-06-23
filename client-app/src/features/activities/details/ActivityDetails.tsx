import { Button, Card, Grid, GridColumn, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';
import ActivityDetailedInfo from './ActivityDetailedinfo';

export default observer (function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (!activity || loadingInitial) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={5}>
                <ActivityDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
})