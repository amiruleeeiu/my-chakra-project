// src/components/ChakraFormikForm.tsx

import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

// Define the form values interface
interface FormValues {
  name: string;
  email: string;
}

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// The main component
export const ChakraFormikForm: React.FC = () => {
  // Initial values for the form
  const initialValues: FormValues = { name: "", email: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box>
            <Field name="name">
              {({ field, form }: FieldProps<string>) => {
                const error =
                  form.errors.name && form.touched.name
                    ? form.errors.name
                    : null;
                return (
                  <FormControl isInvalid={!!error}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Enter your name"
                    />
                    <FormErrorMessage>
                      {typeof error === "string" ? error : null}
                    </FormErrorMessage>
                  </FormControl>
                );
              }}
            </Field>
          </Box>

          <Box mt={1}>
            <Field name="email">
              {({ field, form }: FieldProps<string>) => {
                const error =
                  form.errors.email && form.touched.email
                    ? form.errors.email
                    : null;
                return (
                  <FormControl isInvalid={!!error}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="Enter your email"
                    />
                    <FormErrorMessage>
                      {typeof error === "string" ? error : null}
                    </FormErrorMessage>
                  </FormControl>
                );
              }}
            </Field>
          </Box>

          <Flex justifyContent="end">
            <Button
              mt={3}
              colorScheme="purple"
              isLoading={isSubmitting}
              type="submit"
              leftIcon={<AddIcon />}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
