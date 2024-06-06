// import './App.css'
// import Layout from './assets/components/layout/Layout';
import { useContext } from 'react';
import ClassBasedIntro from './components/classBasedComponent/ClassBasedIntro';
import ConditionalRenderingIntro from './components/conditionalRendering/ConditionalRenderingIntro';
import FbcIntro from './components/functionBasedComponent/FbcIntro';
import MapIntro from './components/mapPractice/MapIntro';
import PropsIntro from './components/props/PropsIntro';
import EventsIntro from './components/syntheticEvents/EventsIntro';
import UseRefHookIntro from './components/useRefHook/UseRefHookIntro';
import UseStateIntro from './components/useStateHook/UseStateIntro';
import { contextVaribale } from './components/myContext/MyContext';
import Accessor from './components/myContext/Accessor';
import Demo from './components/contextTrial/Demo';
import LifeCycleIntro from './components/lifecyclemethods/LifeCycleIntro';
import UseEffectIntro from './components/useEffectHook/UseEffectIntro';

function App() {


  return (
    <div>
      {/* first day task based on  layout */}
      {/* <Layout></Layout> */}
      {/* class based intro */}
      {/* <div>
        <ClassBasedIntro />
      </div> */}
      {/* function based component */}
      {/* <div>
        <FbcIntro />
      </div> */}
      {/* Usestate hook */}
      {/* <div>
        <UseStateIntro />
      </div> */}
      {/* props */}
      {/* <div>
        <PropsIntro />
      </div> */}
      {/* Synthetic Events */}
      {/* <div>
        <EventsIntro />
      </div> */}
      {/* <div>
        <ConditionalRenderingIntro />
      </div> */}
      {/* <div>
        <UseRefHookIntro />
      </div> */}
      {/* <div>
        <MapIntro />
      </div> */}

      {/* for accessing context1 variables */}

      {/* <div>
        <Accessor />
      </div> */}

      {/* for accessing context1 variables */}
      {/* <div>
        <Demo />
      </div> */}
      {/* lifecycle methods  */}
      {/* <div>
        <LifeCycleIntro />
      </div> */}

      {/* UseEffect hook  */}
      <div>
        <UseEffectIntro />
      </div>

    </div>
  )
}
export default App



