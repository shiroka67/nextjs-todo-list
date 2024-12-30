module.exports = {
	prompt: ({ inquirer }) => {
		return inquirer
			.prompt([
				{
					type: "input",
					name: "name",
					message: "What is the name of your hooks?[use]",
				},
				{
					type: "input",
					name: "directory",
					message: "Which directory should the component be placed in?",
					default: "src/hooks",
				},
			])
			.then((answers) => {
				const { name, directory } = answers;

				return {
					name,
					directory,
				};
			});
	},
};
