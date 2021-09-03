import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { Children, ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="samll">
        {title}
      </Text>

      <Stack spacin="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
