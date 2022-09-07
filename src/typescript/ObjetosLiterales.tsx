interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}
interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Antonio',
    edad: 27,
    direccion: {
      pais: 'Ecuador',
      casaNo: 13,
    },
  };

  return (
    <>
      <div>Objetos Literales</div>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
