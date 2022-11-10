import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <p className="errorTitle">404</p>
      <p className="errorText">Oups! La page que vous demandez n'existe pas</p>
			<Link to="/" className="errorLink">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}