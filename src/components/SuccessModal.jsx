import { Modal, Text } from "@mantine/core";

function SuccessModal({ opened, close, message }) {
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
          {message}
        </Text>
      </Modal>
    </>
  );
}

export default SuccessModal;
