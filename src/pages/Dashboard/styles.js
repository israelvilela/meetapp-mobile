import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})`

`;

export const NavDate = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
`;

export const CurrentDate = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Loading = styled.View`

`;
