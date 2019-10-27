import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, List } from './styles';

import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import background from '~/assets/background.png';
import {getRegistrationsRequest} from '../../store/modules/meetup/actions';

export default function Registration() {
  const dispatch = useDispatch();
  const { registrations } = useSelector(state => state.meetup);
  const [list, setList] = useState(registrations && registrations);

  useEffect(() => {
      dispatch(getRegistrationsRequest());
  },[])

  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}
    >
      <Container>
        <Header />
        <List
          data={registrations}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Meetup id={item.id} data={item.meetingRegistration} register={false}/>}
        />
      </Container>
    </ImageBackground>
  );
}

Registration.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
