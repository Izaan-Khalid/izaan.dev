const Navbar = () => {
	return (
		<nav className="p-4 border-b">
			<div className="max-w-2xl mx-auto">
				<a href="#home" className="mr-4">
					Home
				</a>
				<a href="#about" className="mr-4">
					About
				</a>
				<a href="#projects" className="mr-4">
					Projects
				</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	)
}

export default Navbar
