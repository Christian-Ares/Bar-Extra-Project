import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className="headTitle">
			<h1 className="homeTitle">Bienvenido a BarExtra!</h1>
			<p>La plataforma donde podrás encontrar profesionales para tu evento!</p>
			<span>
				<Button variant="outline-primary"><Link to="/login">Iniciar Sesión</Link></Button>
				<Button variant="outline-primary"><Link to="/signup">Crear Cuenta</Link></Button>
			</span>
		</div>
	)
}	