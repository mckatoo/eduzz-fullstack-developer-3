import React from 'react';

import {Header, Name, Page, Photo, Social, Text} from './styles';

const App = () => {
  return (
    <Page>
      <Header>
        <Photo source={require('./assets/foto.jpg')} />
        <Name>milton carlos katoo</Name>
        <Text>desenvolvedor full-stack</Text>
        <Social>
          <Text>github</Text>
          <Text>facebook</Text>
          <Text>linkedin</Text>
          <Text>twitter</Text>
        </Social>
      </Header>
    </Page>
  );
};

export default App;
