import React, { useEffect, useState } from 'react';
import { BookReservationSection, BookReservationContainer, BookReservationTitle, Form, InputsWrapper, DatePickerInput, FormSelect, FormSelectOption, TablesContainer, ChairSymbolWrapper, ChairSymbolLabel, ChairSymbol } from './Book-Reservation-style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import TableToDisplay from '../table-reservation/Table-Reservation';
import { ReservationData, TableData } from '../../redux/types/reservationTypes';
import { getTables } from './../../redux/actions/reservationActions';
import Loader from '../loader/Loader';
import Reservation from '../reservation/Reservation';
import PhoneConformation from '../phone-conformation/PhoneConformation';
import ReservationSummary from '../reservation-summary/ReservationSummary';


const BookReservation = () => {
  const dispatch = useDispatch();
  const { reservationData }: { reservationData: ReservationData } = useSelector((state: RootState) => state.reservationAvailability);
  let { tables, loading }: { tables: TableData[], loading: boolean } = useSelector((state: RootState) => state.getTables);
  const { reservationData: ReservationDataAfterBookingCompleted }: { loading: boolean, reservationData: ReservationData } = useSelector((state: RootState) => state.bookTable);

  const [tableSelected, setTableSelected] = useState<any>(null);
  const [date, setDate] = useState<any>(reservationData?.date || new Date());
  const [tablesToDisplay, seTablesToDisplay] = useState<TableData[]>(tables);
  const [time, setTime] = useState<any>(reservationData?.time || 12);
  const [partySize, setPartySize] = useState<number>(+reservationData?.partySize || 1);
  const [location, setLocation] = useState<string>("Any Location");
  const locations = ["Any Location", "Patio", "Inside", "Bar"];
  useEffect(() => {
    if (tables) {
      if (location === 'Any Location') {
        seTablesToDisplay(tables.filter((table) => {
          return +table.capacity === partySize
        }))
      } else {
        seTablesToDisplay(tables.filter((table) => {
          return +table.capacity === +partySize && table.location === location
        }))
      }
    }
  }, [tables])

  useEffect(() => {
    const dateToCheckTablesAvailabilityInDb = date.getDate().toString() + " " + (date.getMonth() + 1).toString() + " " + date.getFullYear();
    const timeToCheckTablesAvailabilityInDb = time;
    dispatch(getTables(dateToCheckTablesAvailabilityInDb, timeToCheckTablesAvailabilityInDb))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, time])

  useEffect(() => {
    if (reservationData) {
      setDate(reservationData.date);
      setTime(reservationData.time);
      setPartySize(reservationData.partySize);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reservationData])



  const onTableSelected = (table) => {
    setTableSelected(table);
  }


  const handleDate = (date: any) => {
    setDate(date);
    if (location === 'Any Location') {
      seTablesToDisplay(tables.filter((table) => {
        return +table.capacity === partySize
      }))
    } else {
      seTablesToDisplay(tables.filter((table) => {
        return +table.capacity === +partySize && table.location === location
      }))
    }
  }
  return (
    <>
      {loading && <Loader />}
      {!reservationData && !ReservationDataAfterBookingCompleted && <BookReservationSection>
        <BookReservationContainer>
          <BookReservationTitle>Please Fill Some Deatils before booking a table</BookReservationTitle>
          <Reservation fromBookTablePage={true} />
        </BookReservationContainer>
      </BookReservationSection>}
      {ReservationDataAfterBookingCompleted && <BookReservationSection>
        <BookReservationContainer>
          <ReservationSummary reservationData={ReservationDataAfterBookingCompleted} />
        </BookReservationContainer>
      </BookReservationSection>}
      {tablesToDisplay && reservationData && <BookReservationSection>
        <BookReservationContainer>
          <BookReservationTitle>Book A Table</BookReservationTitle>
          {!tableSelected && <Form>
            <InputsWrapper>
              <DatePickerInput
                dateFormat="dd/MM/yyyy"
                selected={date} onChange={handleDate} />
              <FormSelect
                value={time}
                onChange={e => setTime(e.target.value)}
              >
                <FormSelectOption disabled>Select a time</FormSelectOption>
                <FormSelectOption value='12'>12:00</FormSelectOption>
                <FormSelectOption value='13'>13:00</FormSelectOption>
                <FormSelectOption value='14'>14:00</FormSelectOption>
                <FormSelectOption value='15'>15:00</FormSelectOption>
                <FormSelectOption value='16'>16:00</FormSelectOption>
                <FormSelectOption value='17'>17:00</FormSelectOption>
                <FormSelectOption value='18'>18:00</FormSelectOption>
                <FormSelectOption value='19'>19:00</FormSelectOption>
                <FormSelectOption value='20'>20:00</FormSelectOption>
                <FormSelectOption value='21'>21:00</FormSelectOption>
                <FormSelectOption value='22'>22:00</FormSelectOption>
              </FormSelect>

              <FormSelect value={location} onChange={(e) => {
                setLocation(e.target.value);
                if (e.target.value === 'Any Location') {
                  seTablesToDisplay(tables.filter((table) => {
                    return +table.capacity === partySize
                  }))
                  console.log(tablesToDisplay)
                } else {
                  seTablesToDisplay(tables.filter((table) => {
                    return +table.capacity === partySize && table.location === e.target.value
                  }))
                }
              }}>
                {locations.map((location, index) => <FormSelectOption value={location}
                  key={index}
                >
                  {location}
                </FormSelectOption>)}
              </FormSelect>




              <FormSelect value={partySize} onChange={(e) => {
                setPartySize(+e.target.value);
                if (location === 'Any Location') {
                  seTablesToDisplay(tables.filter((table) => {
                    return +table.capacity === +e.target.value
                  }))
                } else {
                  seTablesToDisplay(tables.filter((table) => {
                    return +table.capacity === +e.target.value && table.location === location
                  }))
                }


              }}>
                <FormSelectOption disabled>Please select party size</FormSelectOption>
                <FormSelectOption value={1}>Party of 1</FormSelectOption>
                <FormSelectOption value={2}>Party of 2</FormSelectOption>
                <FormSelectOption value={3}>Party of 3</FormSelectOption>
                <FormSelectOption value={4}>Party of 4</FormSelectOption>
                <FormSelectOption value={5}>Party of 5</FormSelectOption>
                <FormSelectOption value={6}>Party of 6</FormSelectOption>
                <FormSelectOption value={7}>Party of 7</FormSelectOption>
                <FormSelectOption value={8}>Party of 8</FormSelectOption>
                <FormSelectOption value={9}>Party of 9</FormSelectOption>
                <FormSelectOption value={10}>Party of 10</FormSelectOption>
                <FormSelectOption value={11}>Party of 11</FormSelectOption>
                <FormSelectOption value={12}>Party of 12</FormSelectOption>

              </FormSelect>

            </InputsWrapper>

            <TablesContainer>
              <ChairSymbolWrapper>
                <ChairSymbol tableEmpty={true}></ChairSymbol>
                <ChairSymbolLabel> Available</ChairSymbolLabel>
                <ChairSymbol tableEmpty={false}></ChairSymbol>
                <ChairSymbolLabel> Unavailable</ChairSymbolLabel>
              </ChairSymbolWrapper>
              {tablesToDisplay && tablesToDisplay.map((table, index) =>
                <TableToDisplay onTableSelected={onTableSelected} key={index} table={table}></TableToDisplay>
              )}
            </TablesContainer>
          </Form>}
          {tableSelected && <>
            <PhoneConformation date={date} partySize={partySize} time={time} table={tableSelected} phoneNumber={reservationData.phoneNumber} />

          </>}
        </BookReservationContainer>
      </BookReservationSection>}
    </>);
};

export default BookReservation;
