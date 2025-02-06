"use-client";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { Checkbox } from "@/components/ui/checkbox";
import { taskSchema } from "@/features/todo/schema";
import { HStack } from "@chakra-ui/react";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState, useRef, useState, useTransition } from "react";

type Props = {
	id: number;
	isChecked: boolean;
	task: string;
};

export const TodoItem = ({ id, isChecked, task }: Props) => {
	// TODO: formActionを別ファイルに切り出して実装s
	const formAction = async (prevState: unknown, formData: FormData) => {
		const task = parseWithZod(formData, {
			schema: taskSchema,
		});
		console.log(task);
		await new Promise((resolve) => setTimeout(resolve, 3000));
		return task.payload;
	};

	// State
	const [isPending, startTransition] = useTransition();
	const [isEditing, setIsEditing] = useState(false);
	const [lastResult, action, isSubmitting] = useActionState(formAction, { task: task ?? "" });

	// From
	const [form, fields] = useForm({
		id: `${id}`,
		lastResult,
		defaultValue: { task: task ?? "" },
		onSubmit: (event) => {
			setIsEditing(false);
		},
	});

	// Refs
	const inputRef = useRef<HTMLInputElement>(null);

	// Event Handlers
	const handleChange = () => {
		startTransition(async () => {
			// TODO: DBのCheckの状態を更新する処理を実装する
		});
	};
	const handleEditStart = () => {
		setIsEditing((prev) => !prev);
		setTimeout(() => inputRef.current?.focus(), 0); // フォーカスを設定
	};
	const handleEditEnd = () => {
		setIsEditing(false);
	};

	return (
		<HStack>
			<Checkbox checked={isChecked} onChange={handleChange} disabled={isPending} />
			{isEditing ? (
				<form {...getFormProps(form)} action={action} onSubmit={form.onSubmit}>
					<Input
						{...getInputProps(fields.task, { type: "text" })}
						ref={inputRef}
						key={fields.task.id}
						height={"fit-content"}
						disabled={isSubmitting}
						placeholder="Add a new task"
						onBlur={handleEditEnd}
					/>
				</form>
			) : (
				<Text onClick={handleEditStart}>{task}</Text>
			)}
		</HStack>
	);
};
