import { Modal, Text } from "@mantine/core";

function SuccessModal({ opened, close }) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        size="lg"
      >
        <Text p="lg" c="green" ta="center" fw={700} fz="2rem">
          Attendance Saved Successfully!
        </Text>
      </Modal>
    </>
  );
}

export default SuccessModal;
