import { Input as ChakraInput, type InputProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
	return <ChakraInput ref={ref} {...props} />;
});
