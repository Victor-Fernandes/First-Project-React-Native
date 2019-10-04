import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  // createAppContainer => configuração das rotas, sempre precisa vir por volta
  // de todas as rotas
  createStackNavigator(
    {
      // Contem 1 tipo d configuracao d rotas, cada vez q o usuario acessa uma rota
      // gera uma pilha e deixa a rota em background.
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
