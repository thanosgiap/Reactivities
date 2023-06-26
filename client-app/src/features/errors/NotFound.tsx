import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound(){
    return(
        <Segment>
            <Header>
                <Icon name='search'/>
                Could not find this - Oops
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary >
                    Return to activities page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}