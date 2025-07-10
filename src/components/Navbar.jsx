import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<Link to="/">
						<img
							src="https://i.pinimg.com/736x/a8/ec/83/a8ec8337fa1d78ccc926975e27ddb251.jpg"
							alt="Star Wars Logo"
							style={{ width: "100px" }}
						/>
					</Link>
				</div>

				<div className="ml-auto dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites && store.favorites.map((fav) => (
							<li
								
								className="dropdown-item d-flex justify-content-between align-items-center"
							>
								{fav.name}
								<button
									className="btn btn-sm btn-outline-danger"
									onClick={(e) => {
										e.stopPropagation();
										dispatch({
											type: "delete_favorites",
											payload: {
												deletename: fav.name,
												removeuid: fav.uid,
												removeurl: fav.url,
											},
										});
									}}
								>
									<i className="fa-solid fa-trash"></i>
								</button>
							</li>
						))}

						{store.favorites.length === 0 && (
							<li className="dropdown-item text-muted">No favorites</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};


/*<div className="dropdown-menu">
						<a className="dropdown-item" href="#">Action</a>
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="#">Separated link</a>
					</div> */