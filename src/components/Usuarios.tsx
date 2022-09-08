import { useState, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // llamado al API
    reqResApi
      .get<ReqResListado>('/users')
      .then((res) => {
        console.log(res.data.data);
        setUsuarios(res.data.data);
      })
      .catch(console.log);
  }, []);

  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className='btn btn-primary'>Siguientes</button>
    </>
  );
};
