import { Message } from "semantic-ui-react";

interface Props {
    errors: string[] | null;
}

export default function ValidationErrors({ errors }: Props) {
    return (
        <Message>
            {errors && (
                <Message.List>
                    {errors.map((err: any, i) => {
                        if (i % 2 === 0) {
                            return (

                                <Message.Item key={i}>
                                    {err}
                                </Message.Item>

                            )
                        }
                        return null;
                    }
                    )}
                </Message.List>
            )}
        </Message>
    )
}