import React, {useState} from 'react';
//import Navbar from './Navbar';

const InicioSesion = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
    const [inputApellido, cambiarInputApellido] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputContraseña, cambiarInputContraseña] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Inicio Sesion!');
}

const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
}
const handleInputApellido = (e) => {
    cambiarInputApellido(e.target.value);
}
const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
}
const handleInputContraseña = (e) => {
    cambiarInputContraseña(e.target.value);
}

return (
    <>
    <form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div><br />
                <div>
					<label htmlFor="apellido">Apellido</label>
					<input 
						type="text"
						name="apellido"
						placeholder="Apellido"
						id="apellido"
						value={inputApellido}
						onChange={handleInputApellido}
					/>
				</div><br />
                <div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div><br />
                <div>
                <label htmlFor="contraseña">Contraseña</label>
					<input
						type="password"
						name="contraseña"
						placeholder="Contraseña"
						id="correo"
						value={inputContraseña}
						onChange={handleInputContraseña}
					/>
                </div><br />
				
    <button type="submit">Enviar</button>
			</form>
		</>
	);
}
export default InicioSesion;