import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diego Henrique Oliveira</Text>

          <Text color="gray.300" fontSize="small">
            diego.oliveira@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diego Henrique"
        src="https://github.com/diegohenriquecode.png"
      />
    </Flex>
  );
}
