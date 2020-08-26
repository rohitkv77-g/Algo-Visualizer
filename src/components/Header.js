import React from 'react';

function Header(){
	
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
					<a className="navbar-brand" href="#">Algo-Visualizer</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							</li>
							
							{/* <li className="nav-item">
								<a className="nav-link" href="#">Contribute</a>
							</li> */}

							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Implementations
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">Sorting</a>
									<a className="dropdown-item" href="#">Graph</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">Good Luck</a>
								</div>
							</li>

							{/* <li className="nav-item">
								<a className="nav-link disabled" href="#">Disabled</a>
							</li> */}

						</ul>
						{/* <form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form> */}
					</div>
				</nav>

				{/* <div className="jumbotron">
					<h1><b>Algorithms Visualizer</b></h1>
				</div> */}

				
			</div>
		);
	
};

export default Header;