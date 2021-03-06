import React from 'react';
import './App.css';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
import ComponentF from './components/Context/ComponentF';
// import Counter from './components/Counter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HooksCounterThree from './components/HooksCounterThree';
// import HookCounterArray from './components/HookCounterArray';
// import HookCounterUseEffect1 from './components/HookCounterUseEffect1';
// import HookMouseRunUseEffectOnlyOnce from './components/HookMouseRunUseEffectOnlyOnce';
// import MouseContainer from './components/MouseContainer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <HookCounter />
      <HookCounterTwo />
      <HooksCounterThree /> */}
      {/* <HookCounterArray/>
      <HookCounterUseEffect1/> */}
      {/* <HookMouseRunUseEffectOnlyOnce /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching/> */}

      <UserContext.Provider value={'MAnoj'}>
        <ChannelContext.Provider value={'Programmer'}>

        <ComponentF />
        </ChannelContext.Provider>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
