import "../components/Details.css";
import {
  Input,
  Stack,
  Group,
  Box,
  Text,
  Image,
  Flex,
  Button,
} from "@mantine/core";

import nullImage from "../assets/photo.svg";

function Details() {
  const sampleData = {
    name: "Jose Cruz",
    student_ID: 0o123301572,
    year: "4th year",
    section: "CCIS7A",
    img: "https://placehold.co/600x400?text=Placeholder",
  };

  return (
    <Flex direction="column" gap={30} mih="100%">
      <Box bg="#1061D5" p={35} bdrs={10} ta="center">
        <Text fw={700} fz={30} c="white">
          ATTENDANCE AND IDENTITY VERIFICATION SYSTEM
        </Text>
      </Box>
      <Flex direction="column" gap={30} p="md" bdrs={10} bg="#F9F9F9" flex={1}>
        <Box>
          <Stack gap={20}>
            <Input.Wrapper label="Full Name">
              <Input
                placeholder={"Full Name"}
                value={sampleData.name}
                size="lg"
              />
            </Input.Wrapper>
            <Input.Wrapper label="Student ID No.">
              <Input
                placeholder="Student ID No."
                value={sampleData.student_ID}
                size="lg"
              />
            </Input.Wrapper>
            <Group grow gap="lg">
              <Input.Wrapper label="Year Level">
                <Input
                  placeholder="Year Level"
                  value={sampleData.year}
                  size="lg"
                />
              </Input.Wrapper>
              <Input.Wrapper label="Section">
                <Input
                  placeholder="Section"
                  value={sampleData.section}
                  size="lg"
                />
              </Input.Wrapper>
            </Group>
          </Stack>
        </Box>
        <Box>
          <Text fw={500} fz={14}>
            Image
          </Text>
          <Box
            mt={10}
            w="100%"
            p={10}
            bg="white"
            bd="1px solid #D9D9D9"
            bdrs={10}
          >
            <Flex justify="center" align="center" bg="#D9D9D9" bdrs={10}>
              <Image
                radius="md"
                src={
                  sampleData.img
                    ? nullImage
                    : "https://placehold.co/600x400?text=Placeholder"
                }
                h={300}
                w={300}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              />
            </Flex>
          </Box>
        </Box>
        <Group gap={20} justify="flex-end" mt="auto">
          <Button size="lg" bg="red" radius={10}>
            Cancel
          </Button>
          <Button size="lg" bg="green" radius={10}>
            Save Attendance
          </Button>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Details;
