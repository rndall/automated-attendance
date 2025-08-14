import { Box, Flex, Stack } from "@mantine/core";

import QRScanner from "./QRScanner";
import Watermark from "./Watermark";
import Details from "./Details";
import SuccessModal from "./SuccessModal";

import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

const defaultStyles = {
  padding: 10,
  borderRadius: 10,
  border: "1px solid #BBB",
};

function AttendanceSection() {
  const [scannedStudentId, setScannedStudentId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const handleScan = (result) => {
    setScannedStudentId(result);

    // Fetch student details

    console.log(result);
  };

  const handleCancelAttendance = () => setScannedStudentId(null);

  const handleSaveAttendance = async () => {
    setLoading(true);

    // Mock attendance saving api
    setTimeout(() => {
      open();
      setScannedStudentId(null);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <Stack
        bg="#e4e4e4"
        px={defaultStyles.padding}
        py={{ base: defaultStyles.padding, xl: 5 }}
        mih="100dvh"
        justify="center"
      >
        <Flex gap={20} direction={{ base: "column", md: "row" }}>
          <Box
            bg="white"
            flex={1}
            p={defaultStyles.padding}
            bdrs={defaultStyles.borderRadius}
            bd={defaultStyles.border}
            style={{ position: "relative" }}
          >
            <QRScanner onScan={handleScan} />

            <Watermark />
          </Box>

          <Box
            bg="white"
            flex={1.125}
            p={defaultStyles.padding}
            bdrs={defaultStyles.borderRadius}
            bd={defaultStyles.border}
            miw={0}
          >
            <Details
              onSaveAttendance={handleSaveAttendance}
              onCancelAttendance={handleCancelAttendance}
              hasScanned={!!scannedStudentId}
              loading={loading}
            />
          </Box>
        </Flex>
      </Stack>

      <SuccessModal opened={opened} close={close} />
    </>
  );
}

export default AttendanceSection;
