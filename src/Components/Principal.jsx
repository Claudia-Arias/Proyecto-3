import React, { useState } from 'react';
import "./Principal.css";
import { UserService } from './userService';


function Principal() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [user, setUser] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono: ""
  });

  const [userList, setUserList] = useState([]);


  async function getData() {
    let usuarios = await UserService.getAllUsers();
    setUserList(usuarios);

  }
  getData();

  function handleNombreChange(e) {
    setUser({ ...user, nombre: e.target.value });
  }
  function handleApellido1Change(e) {
    setUser({ ...user, apellido1: e.target.value });
  }

  function handleApellido2Change(e) {
    setUser({ ...user, apellido2: e.target.value });
  }

  function handleemailChange(e) {
    setUser({ ...user, email: e.target.value });
  }

  function handletelefonoChange(e) {
    setUser({ ...user, telefono: e.target.value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

  };


  async function handleEnviarDatos() {
    await UserService.submitUser(user);


    setUser({

      nombre: "",
      apellido1: "",
      apellido2: "",
      email: "",
      telefono: ""

    }
    );

  }



  return (
    <>
      <body>
        <header>
          <img src="logo.ico" alt="" width="189" height="75" />
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="mostrar-menu">
          </label>
          <nav className="menu">
            <a className="select" href="#">
              Inicio
            </a>
            <a href="#">Sobre nosotros</a>
            <a href="#">Inicio</a>
            <a href="contacto.html">Contacto</a>
            <a href="register.html">Registro</a>
            <label htmlFor="check" className="esconder-menu">

            </label>
          </nav>
        </header>
        <form className="formulario" onSubmit={handleSubmit}>

          <label >
            Nombre <input type="text" name="userNombre" id="textNombre" value={user.nombre} onChange={handleNombreChange} />
          </label>

          <label >
            Apellido1 <input type="text" name="userApellido1" id="textApellido1" value={user.apellido1} onChange={handleApellido1Change} />
          </label>

          <label >
            Apellido2 <input type="text" name="userApellido2" id="textApellido2" value={user.apellido2} onChange={handleApellido2Change} />
          </label>

          <label >
            email <input type="text" name="useremail" id="textemail" value={user.email} onChange={handleemailChange} />
          </label>

          <label >
            Telefono <input type="text" name="usertelefono" id="texttelefono" value={user.telefono} onChange={handletelefonoChange} />
          </label>


          <button type="button" onClick={handleEnviarDatos}>Enviar</button>

        </form>


        <section className='tablaResultados'>
          <table  >
            <thead >
              <tr >
                <th className='celdaCabecera'>Nombre</th>
                <th className='celdaCabecera'>Apellido 1</th>
                <th className='celdaCabecera'>Apellido 2</th>
                <th className='celdaCabecera'>Email</th>
                <th className='celdaCabecera'>telefono</th>
              </tr>
            </thead>

            <tbody>

              {userList.map((user, index) => (
                <tr key={index}>
                 

                    <td> {user.nombre}</td>
                    <td> {user.apellido1}</td>
                    <td> {user.apellido2}</td>
                    <td> {user.email}</td>
                    <td> {user.telefono}</td>
            
                </tr>
              ))}


            </tbody>

          </table>

        </section>

        
        <footer className="footer">
          <p>&copy; 2024 Tu Empresa | Todos los derechos reservados</p>
        </footer>

      </body>
    </>
  );
}

export default Principal;
