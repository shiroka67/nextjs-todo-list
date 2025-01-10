"use-client";

import { Checkbox } from "@/components/ui/checkbox";
import { HStack, Text } from "@chakra-ui/react";
import { useState, useTransition } from "react";

type Props = {
	todoItem: TodoItem;
};

export const TodoItem = ({ todoItem }: Props) => {
	// State
	const [isChecked, setIsChecked] = useState(todoItem.isChecked);
	const [isPending, startTransition] = useTransition();

	// Event Handlers
	const handleChange = () => {
		startTransition(async () => {
			// TODO: DBのCheckの状態を更新する処理を実装する
			setIsChecked(!isChecked);
		});
	};

	return (
		<HStack>
			<Checkbox checked={isChecked} onChange={handleChange} disabled={isPending} />
			<Text>{todoItem.task}</Text>
		</HStack>
	);
};
