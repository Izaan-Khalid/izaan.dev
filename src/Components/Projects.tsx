const projects = {
	projects: [
		{
			title: "Audio Insight AI",
			description:
				"In a world where lectures are increasingly recorded and available online, students face the challenge of sifting through hours of content. This project was inspired by the need for a more efficient way to study, allowing users to quickly get summaries of key points and ask tailored questions without wasting time on irrelevant information. By leveraging AI, this tool transforms the passive experience of listening into an active learning process, helping students focus on what matters most.",
			link: "https://github.com/UsmanKhld/audio-insight",
			image: "/AudioInsight.png",
		},
		{
			title: "Project 2",
			description: "Description of project 2",
			link: "https://github.com/your-project-2",
			image: "/GameHub.jpeg",
		},
	],
}

const Projects = () => {
	return (
		<section id="projects" className="max-w-2xl mx-auto py-8">
			<h2 className="text-xl mb-4">Projects</h2>
			{projects.projects.map((project) => (
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
