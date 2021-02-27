import React from 'react'
import { Button } from 'react-bootstrap'

export const Home = () => {
	return (
		<div className="headTitle">
			<h1 className="homeTitle">Bienvenido a BarExtra!</h1>
			<p>La plataforma donde podrás encontrar profesionales para tu evento!</p>
			<span>
				<Button variant="outline-primary">Iniciar Sesión</Button>
				<Button variant="outline-primary">Crear Cuenta</Button>
			</span>
		</div>
	)
}	