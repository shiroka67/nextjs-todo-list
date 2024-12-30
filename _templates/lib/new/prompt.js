module.exports = {
	prompt: ({ inquirer }) => {
		return inquirer
			.prompt([
				{
					type: "input",
					name: "name",
					message: "What is the name of your function?",
				},
				{
					type: "input",
					name: "directory",
					message: "Which directory should the component be placed in?",
					default: "src/lib",
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
