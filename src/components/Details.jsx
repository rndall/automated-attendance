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
    img: "https://placehold.co/600x400?text=Placeholder"
  };

  return (
    <>
      <Box h="100vh" className="body" p={10} bdrs={10}>
        <Flex direction="column" gap={30}>
          <Box bg="blue" p={35} bdrs={10} ta="center">
            <Text fw={700} fz={30}>
              {" "}
              ATTENDANCE AND IDENTITY VERIFICATION SYSTEM{" "}
            </Text>
          </Box>
          <Box>
            <Stack gap={20}>
              <Input.Wrapper label="First Name">
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

            <Box mt={10} w="100%" bg="#D9D9D9">
              <Flex justify="center" align="center">
                <Image
                  radius="md"
                  src={sampleData.img? nullImage : "https://placehold.co/600x400?text=Placeholder"}
                  h={300}
                  w={300}
                  fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
              </Flex>
            </Box>
          </Box>
          <Group gap={20} justify="flex-end">
            <Button size="lg" bg="red">
              Cancel
            </Button>
            <Button size="lg" bg="green">
              Save Attendance
            </Button>
          </Group>
        </Flex>
      </Box>
    </>
  );
}

export default Details;
