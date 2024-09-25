import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/usersSelectors';

import EventParticipantsCard from '../EventParticipantsCard/EventParticipantsCard';

import { Title, List, BackLink } from './EventParticipants.styled';

const EventParticipants = () => {
  const { id } = useParams();
  const users = useSelector(selectUsers);

  const matchingUsers = users.list.filter((user) => user.idtitle === id);

  if (matchingUsers.length === 0) {
    return (
      <>
        <BackLink to="/">Back to Event Page</BackLink>
        <Title>There are no registered participants yet.</Title>
      </>
    );
  }

  const title = matchingUsers[0].title;

  return (
    <div>
      <BackLink to="/">Back to Event Page</BackLink>
      <Title>"{title}" participants</Title>
      <List>
        {matchingUsers.map((us) => (
          <EventParticipantsCard user={us} key={us._id} />
        ))}
      </List>
    </div>
  );
};

export default EventParticipants;
