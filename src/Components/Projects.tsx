import projectsData from "./projects.json"

const Projects = () => {
	return (
		<section id="projects" className="max-w-2xl mx-auto py-8">
			<h2 className="text-xl mb-4">Projects</h2>
			{projectsData.projects.map((project) => (
				<div key={project.title} className="mb-8 pb-8 border-b last:border-0">
					<img
						src={project.image}
						alt={`Screenshot of ${project.title}`}
						className="mb-4 w-full"
					/>
					<h3 className="text-lg mb-2">{project.title}</h3>
					<p className="mb-2">{project.description}</p>
					<a target="_blank" href={project.link}>
						View project →
					</a>
				</div>
			))}
		</section>
	)
}

export default Projects
