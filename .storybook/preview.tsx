import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ChakraProvider value={defaultSystem}>
				<Story />
			</ChakraProvider>
		),
	],
};

export default preview;
