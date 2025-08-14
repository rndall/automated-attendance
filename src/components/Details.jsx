import "../components/Details.css";
import {
  Input,
  Stack,
  Grid,
  Box,
  Text,
  Image,
  Flex,
  Button,
} from "@mantine/core";

import nullImage from "../assets/photo.svg";

import { mediaURL } from "../api/axiosInstance";

function Details({
  hasScanned,
  onCancelAttendance,
  onSaveAttendance,
  loading,
  attendee,
}) {
  
  return (
    <>
      <Flex direction="column" gap={30} mih="100%">
        <Box bg="#1061D5" p={35} bdrs={10} ta="center">
          <Text fw={700} fz={{ base: "1.5rem", sm: "2rem" }} c="white">
            ATTENDANCE AND IDENTITY VERIFICATION SYSTEM
          </Text>
        </Box>
        <Flex
          direction="column"
          gap={30}
          p="md"
          bdrs={10}
          bg="#F9F9F9"
          flex={1}
        >
          <Box>
            <Stack gap={20}>
              <Input.Wrapper label="Full Name">
                <Input
                  placeholder={"Full Name"}
                  value={attendee?.full_name ? attendee.full_name : ""}
                  size="lg"
                />
              </Input.Wrapper>
              <Flex gap="lg" direction={{ base: "column", sm: "row" }}>
                <Input.Wrapper flex={1} label="Program">
                  <Input
                    placeholder="Program"
                    value={attendee?.program ? attendee.program : ""}
                    size="lg"
                  />
                </Input.Wrapper>
              </Flex>
              <Flex gap="lg" direction={{ base: "column", sm: "row" }}>
                <Input.Wrapper flex={1} label="Student ID No.">
                  <Input
                    placeholder="Student ID No."
                    value={attendee?.student_number ? attendee.student_number : ""} 
                    size="lg"
                  />
                </Input.Wrapper>
                <Input.Wrapper flex={1} label="Year Level">
                  <Input
                    placeholder="Year Level"
                    value={attendee?.year_level ? attendee.year_level : ""}
                    size="lg"
                  />
                </Input.Wrapper>
                <Input.Wrapper flex={1} label="Section">
                  <Input
                    placeholder="Section"
                    value={attendee?.section ? attendee.section : ""}
                    size="lg"
                  />
                </Input.Wrapper>
              </Flex>
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
                  fit="cover"
                  radius="md"
                  src={
                    attendee?.picture_url
                      ? `${mediaURL}${attendee?.picture_url}`
                      : nullImage
                  }
                  h="auto"
                  maw={300}
                  // fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                />
              </Flex>
            </Box>
          </Box>

          <Grid ms={{ xs: "auto" }} mt="auto">
            <Grid.Col
              span={{ base: 12, xs: "auto" }}
              order={{ base: 1, xs: 2 }}
            >
              <Button
                disabled={!hasScanned}
                size="md"
                fullWidth
                bg={hasScanned ? "green" : "gray"}
                radius={10}
                onClick={onSaveAttendance}
                loading={loading}
              >
                Save Attendance
              </Button>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, xs: "auto" }}
              order={{ base: 2, xs: 1 }}
            >
              <Button
                disabled={!hasScanned}
                size="md"
                fullWidth
                bg={hasScanned ? "red" : "gray"}
                radius={10}
                onClick={onCancelAttendance}
              >
                Cancel
              </Button>
            </Grid.Col>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

export default Details;
