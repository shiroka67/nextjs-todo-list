import { Text as ChakraText, type TextProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(props, ref) {
	const { children, ...rest } = props;
	return (
		<ChakraText ref={ref} {...rest}>
			{children}
		</ChakraText>
	);
});
