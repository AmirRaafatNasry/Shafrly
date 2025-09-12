import { Button, Flex, Modal, Stack, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";

interface DownloadDialogProps {
  opened: boolean;
  close: () => void;
  onDownload: (filename: string) => void;
  currentCipher: string;
}

export const DownloadDialog: React.FC<DownloadDialogProps> = ({
  opened,
  close,
  onDownload,
  currentCipher,
}) => {
  const [filename, setFilename] = useState(currentCipher);

  useEffect(() => {
    setFilename(currentCipher);
  }, [opened, currentCipher]);

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="اسم الملف"
      centered
      size="md"
      padding="md"
    >
      <Stack gap="md">
        <TextInput
          placeholder="اسم الملف"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          styles={{ input: { textAlign: "right" } }}
        />
        <Flex justify="flex-end" gap="xs">
          <Button
            disabled={!filename.trim()}
            onClick={() => {
              onDownload(filename);
              close();
            }}
          >
            تحميل
          </Button>
        </Flex>
      </Stack>
    </Modal>
  );
};
