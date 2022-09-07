import { Contador } from './components/Contador';
// import { Funciones } from './typescript/Funciones';
// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos />  */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      <Contador />
    </div>
  );
};

export default App;
