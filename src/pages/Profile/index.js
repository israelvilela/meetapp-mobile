import React, { useRef, useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, FormInput, SubmitButton, Hr } from './styles';

import Header from '~/components/Header';
import background from '~/assets/background.png';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const { user, loading } = useSelector(state => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nameRef = useRef();
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    setPassword('');
    setOldPassword('')
    setConfirmPassword('')
  },[user])

  function handleLogout() {
    dispatch(signOut())
  }

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        password,
        oldPassword,
        confirmPassword,
      })
    );
  }

  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}
    >
      <Header />
      <Container>
        <Form>
          <FormInput
            placeholder="Nome"
            ref={nameRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            placeholder="Email"
            ref={emailRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={email}
            onChangeText={setEmail}
          />

          <Hr />

          <FormInput
            secureTextEntry
            placeholder="Senha atual"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            secureTextEntry
            placeholder="Nova senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Salvar Perfil
          </SubmitButton>

          <SubmitButton loading={loading} onPress={handleLogout}>
            Sair do Meetapp
          </SubmitButton>
        </Form>
      </Container>
    </ImageBackground>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
