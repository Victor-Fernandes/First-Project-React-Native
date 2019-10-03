import Reactotron from 'reactotron-react-native';

// var global q retorna true quando emula em ambiente dev
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // criando nova proprieade para facilitar o acesso
  // ao reactotron na aplicação
  console.tron = tron;

  tron.clear();
}
