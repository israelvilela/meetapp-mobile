import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, List, NavDate , CurrentDate} from './styles';

import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import background from '~/assets/background.png';

import { listMeetupRequest } from '../../store/modules/meetup/actions';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const { meetups } = useSelector(state => state.meetup);

  const dateFormatted = useMemo(
    () => format(date, `d 'de' MMMM`, { locale: pt }),
    [date]
    );

    const dispatch = useDispatch();

    useEffect(() => {
      function loadMeetups() {
        const newDate = format(date, 'yyyy-MM-dd', { locale: pt })
        const params = {date: newDate, page: 1}

        dispatch(listMeetupRequest({params}));
      }
      loadMeetups();
  }, [date])



  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}
    >
      <Container>
        <Header />
        <NavDate>
            <Icon name="chevron-left" size={48} color={'#fff'} onPress={handlePrevDay}/>
            <CurrentDate> {dateFormatted} </CurrentDate>
            <Icon name="chevron-right" size={48} color={'#fff'} onPress={handleNextDay}/>
          </NavDate>
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Meetup data={item} register={true}/>}
            />
      </Container>
    </ImageBackground>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
