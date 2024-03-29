import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
            <Menu vertical size="large" style={{ innerWidth: '100%', marginTop: 30 }}>
                <Header icon='filter' attached color="teal" content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content='Going' />
                <Menu.Item content='Hosting' />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}