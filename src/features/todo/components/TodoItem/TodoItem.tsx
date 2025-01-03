"use-client";

import { Checkbox } from "@/components/ui/checkbox";
import { HStack, Text } from "@chakra-ui/react";

type Props = {
	task: string;
	isChecked: boolean;
};

export const TodoItem = ({ task, isChecked }: Props) => {
	return (
		<HStack>
			<Checkbox checked={isChecked} />
			<Text>{task}</Text>
		</HStack>
	);
};
