import { Button, Flex, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const sigInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail é um campo obrigatório")
    .email("E-mail inválido"),
  password: yup.string().required("Senha é um campo obrigatório"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(sigInFormSchema),
  });
  const { errors } = formState;

  console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack>
          <Input
            type="email"
            name="email"
            label="Email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            type="password"
            name="passowrd"
            label="Senha"
            error={errors.password}
            {...register("passowrd")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
