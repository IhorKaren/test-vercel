import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventsAPI } from '../../redux/events/eventsApi.js';
import { getAllUsersAPI } from '../../redux/users/usersApi.js';
import { selectEvents } from '../../redux/events/eventsSelectors.js';
import usePagination from '../../hooks/usePagination';

import EventBoard from '../../components/EventBoard/EventBoard.jsx';

import {
  Title,
  PaginationContainer,
  PaginationButton,
} from './eventPage.styled.js';

const EventPage = () => {
  const dispatch = useDispatch();
  const eventsData = useSelector(selectEvents);

  useEffect(() => {
    dispatch(eventsAPI());
    dispatch(getAllUsersAPI());
  }, [dispatch]);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({
    contentPerPage: 8,
    count: eventsData.events.length,
  });

  return (
    <>
      <Title>Events</Title>
      <EventBoard
        array={eventsData.events.slice(firstContentIndex, lastContentIndex)}
      />
      <PaginationContainer>
        <PaginationButton onClick={prevPage} disabled={page === 1}>
          Previous
        </PaginationButton>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <PaginationButton onClick={nextPage} disabled={page === totalPages}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};

export default EventPage;
