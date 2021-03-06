import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileHero, ProfileSection, HeroTitle, ProfileTitle, NavContainer, NavItem, CardsContainer, Card, CardRow, CardOrderItemsRow, CardTitle, CardLabel, CardDescription, OrderItemsDescription, DeleteAccountButton } from './Profile-style';
import { RootState } from '../../redux';
import { User } from '../../redux/types/authTypes';
import { getReservationsForUser } from '../../redux/actions/reservationActions';
import { ReservationDataFromDb } from '../../redux/types/reservationTypes';
import { getOrdersForUser } from '../../redux/actions/orderActions';
import { Order } from '../../redux/types/orderTypes';
import Loader from '../loader/Loader';
import { deleteUser } from '../../redux/actions/authActions';


const Profile = () => {
  const dispatch = useDispatch();
  const { user }: { user: User } = useSelector((state: RootState) => state.userLogin);

  const { reservationData, }: { reservationData: ReservationDataFromDb[], loading: boolean } = useSelector((state: RootState) => state.getReservationForUser);

  const { orders, loading: ordersLoading }: { orders: Order[], loading: boolean } = useSelector((state: RootState) => state.getOrdersForUser);

  const { loading: deleteUserLoading }: { loading: boolean } = useSelector((state: RootState) => state.userDelete);

  const [currentNavItem, setCurrentNavItem] = useState('Orders')

  useEffect(() => {
    dispatch(getReservationsForUser());
    dispatch(getOrdersForUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ProfileHero>
        <HeroTitle>{user && user.name}</HeroTitle>
      </ProfileHero>
      <ProfileSection>
        <NavContainer>
          <NavItem onClick={() => {
            setCurrentNavItem("Orders")
          }} currentNavItem={currentNavItem === "Orders"}>Orders</NavItem>
          <NavItem onClick={() => {
            setCurrentNavItem("Reservations")
          }} currentNavItem={currentNavItem === "Reservations"}>Reservations</NavItem>
          <NavItem onClick={() => {
            setCurrentNavItem("Settings")
          }} currentNavItem={currentNavItem === "Settings"}>Settings</NavItem>
        </NavContainer>
        {currentNavItem === "Reservations" && reservationData?.length === 0 && <ProfileTitle>
          No Reservation Yet!
            </ProfileTitle>}
        {currentNavItem === "Reservations" && reservationData?.length > 0 && <CardsContainer>
          {reservationData.map((reservation, index) => <Card key={index}>
            <CardTitle>{reservation.date.split(' ').join('\\')}, {reservation.time + ":00"} </CardTitle>
            <hr />
            <CardRow>
              <CardLabel>{reservation.table.name}.</CardLabel>
            </CardRow>
            <CardRow>
              <CardLabel>Table Location: </CardLabel>
              <CardDescription>&nbsp; {reservation.table.location}.</CardDescription>
            </CardRow>
            <CardRow>
              <CardLabel>Guests: </CardLabel>
              <CardDescription>&nbsp; {reservation.partySize}.</CardDescription>
            </CardRow>

          </Card>)}
        </CardsContainer>}
        {currentNavItem === "Orders" && orders?.length === 0 && <ProfileTitle>
          No Orders Yet!
            </ProfileTitle>}
        {currentNavItem === "Orders" && orders?.length > 0 && <CardsContainer>
          {orders.map((order) => <Card key={order.id}>
            <CardTitle>{order.orderMethod} </CardTitle>
            <hr />
            <CardRow>
              <CardLabel>Order Made At: </CardLabel>
              <CardDescription>&nbsp; {new Date(order.create_time).toLocaleString()}.</CardDescription>
            </CardRow>
            {order.address &&<CardRow>
              <CardLabel>Address: </CardLabel>
              <CardDescription>&nbsp; {order.address}, {order.city}. </CardDescription>
            </CardRow>}
            <CardOrderItemsRow>
              <CardLabel>Order Items: </CardLabel>
              {order.orderItems.map((orderItem => <>
                <OrderItemsDescription>*{orderItem.title}.</OrderItemsDescription>
              </>))}
            </CardOrderItemsRow>
            <CardRow>
              <CardLabel>Order Sum: </CardLabel>
              <CardDescription>&nbsp;${order.amount}.</CardDescription>
            </CardRow>
          </Card>)}
        </CardsContainer>}
        {currentNavItem === "Settings" && orders?.length > 0 && <CardsContainer>
          {deleteUserLoading && <Loader />}
          <DeleteAccountButton onClick={() => {
            dispatch(deleteUser())
          }} disabled={deleteUserLoading}>Delete Account</DeleteAccountButton>
        </CardsContainer>}


      </ProfileSection>

    </>
  );
};

export default Profile;
