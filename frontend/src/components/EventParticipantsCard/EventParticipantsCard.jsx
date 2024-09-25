import { Item, Title, Text } from './EventParticipantsCard.styled';

const EventParticipantsCard = ({ user }) => {
  return (
    <Item>
      <Title>{user.fullname}</Title>
      <Text>{user.email}</Text>
    </Item>
  );
};

export default EventParticipantsCard;
