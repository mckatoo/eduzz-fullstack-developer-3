import styled from 'styled-components/native';

export const Page = styled.View`
  background-color: #e7e7e7;
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Photo = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 125px;
`;

export const Text = styled.Text`
  font-size: 20px;
  margin-top: 5px;
  text-transform: capitalize;
`;

export const Name = styled(Text)`
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
  text-transform: uppercase;
`;

export const Social = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;
