import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import { cancelRegisterRequest, meetupRegisterRequest } from '../../store/modules/meetup/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../Button';

import {
  Container,
  Imagem,
  Conteudo,
  Info,
  Titulo,
  SubmitButton,
} from './styles';

export default function Meetup({ id, data, register }) {
  const [file, setFile] = useState('');
  useEffect(() => {
    function setUrl() {
      const url = data.file.url.replace('localhost', '10.0.2.2');
      setFile(url)
    }

    setUrl();
  }, [])

  const dispatch = useDispatch();

  async function handleAction() {
    if (register) {
      dispatch(meetupRegisterRequest(data.id));
    } else {
      dispatch(cancelRegisterRequest(id));
    }
  }

  return (
    <Container>
      <Imagem
        source={{ uri: file ? file : null }}
      />
      <Conteudo>
        <Titulo>{data.title}</Titulo>
        <Info>
          <Icon name="perm-contact-calendar" size={16} />
          {data.formattedDate}
        </Info>
        <Info>
          <Icon name="location-on" size={16} /> {data.location}
        </Info>
        <Info>
          <Icon name="person" size={16} />
          Organizador: {data.organizer.name}
        </Info>
      </Conteudo>

      <Button onPress={handleAction}>{register ? `Realizar inscrição` : `Cancelar inscrição`}</Button>
    </Container>
  );
}
