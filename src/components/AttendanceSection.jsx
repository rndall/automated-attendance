// Matine imports
import { Box, Flex, Stack } from "@mantine/core";

// Components
import QRScanner from "./QRScanner";
import Details from "./Details";
import SuccessModal from "./SuccessModal";

// Hooks
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useQuery, useMutation } from "@tanstack/react-query";

// API imports
import { getAttendee, getAttendance, saveAttendance } from "../api/attendance";

const defaultStyles = {
  padding: 10,
  borderRadius: 10,
  border: "1px solid #BBB",
};

// Time when the QR is scanned
const timeScanned = new Date().toLocaleTimeString("en-ca", {
  timeZone: "Asia/Manila",
  hour12: false,
});

function AttendanceSection() {
  const [scannedStudentNumber, setScannedStudentNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [modalMessage, setModalMessage] = useState("");

  // Fetch List of attendees
  // const { data: attendanceData } = useQuery({
  //   queryKey: ["attendance"],
  //   queryFn: getAttendance,
  // });

  // Fetch attendee details based on scanned student number
  const { data: attendee } = useQuery({
    queryKey: ["attendee", scannedStudentNumber],
    queryFn: () => getAttendee(scannedStudentNumber),
  });

  // Save attendance function
  const { mutate } = useMutation({
    mutationKey: ["saveAttendance"],
    mutationFn: saveAttendance,
    onSuccess: (message) => {
      setLoading(false);
      setModalMessage(message);
      open();
    },
  });

  const handleSaveAttendance = () => {
    let attendanceDetails = {
      student_number: attendee.student_number,
    };

    timeScanned < "11:59:00"
      ? (attendanceDetails.is_present_morning = true)
      : (attendanceDetails.is_present_afternoon = true);

    mutate({ id: attendee.student_number, attendanceDetails });
    setLoading(true);
  };

  const handleCancelAttendance = () => {
    setScannedStudentNumber("");
    setModalMessage("");
  };

  const handleCloseModal = () => {
    handleCancelAttendance();
    close();
  };

  return (
    <>
      <Stack bg="#e4e4e4" mih="100dvh" justify="center">
        <Flex
          py={{ base: defaultStyles.padding, xl: 5 }}
          px={defaultStyles.padding}
          gap={20}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            bg="white"
            flex={1}
            p={defaultStyles.padding}
            bdrs={defaultStyles.borderRadius}
            bd={defaultStyles.border}
            miw={0}
          >
            <QRScanner
              onScan={(scannedStudentNumber) =>
                setScannedStudentNumber(scannedStudentNumber)
              }
              scannerPause={!!scannedStudentNumber}
            />
          </Box>

          <Box
            bg="white"
            flex={1}
            p={defaultStyles.padding}
            bdrs={defaultStyles.borderRadius}
            bd={defaultStyles.border}
            miw={0}
          >
            <Details
              attendee={attendee}
              onSaveAttendance={handleSaveAttendance}
              onCancelAttendance={handleCancelAttendance}
              hasScanned={!!scannedStudentNumber}
              loading={loading}
            />
          </Box>
        </Flex>
      </Stack>

      <SuccessModal
        opened={opened}
        close={handleCloseModal}
        message={modalMessage}
      />
    </>
  );
}

export default AttendanceSection;
