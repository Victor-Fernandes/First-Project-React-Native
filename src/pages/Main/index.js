import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>

        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationsOptions = {
  title: 'Usuários',
};
