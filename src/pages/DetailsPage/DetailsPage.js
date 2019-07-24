import React, { useEffect } from 'react';
import UserForm from '../../components/UserForm';
import { Wrapper } from "../../styles/main";

export default ({ match, user, loading, requestUser}) => {
    useEffect(() => { requestUser(match.params.id) }, [requestUser, match.params.id]);
    return <Wrapper>
        <UserForm loading={loading} user={user} />
    </Wrapper>
};
