import { Button, Group, Modal, Select, Stack, TextInput } from "@mantine/core";
import React, { useState } from "react";

interface AudioDialogProps {
  opened: boolean;
  close: () => void;
  onDownload: (filename: string, speed: AudioSpeed) => void;
}

type AudioSpeed = 1 | 2 | 3;
const AUDIO_SPEED_OPTIONS = [
  { value: "1", label: "بطيء" },
  { value: "2", label: "عادي" },
  { value: "3", label: "سريع" },
];

export const AudioDialog: React.FC<AudioDialogProps> = ({
  opened,
  close,
  onDownload,
}) => {
  const [filename, setFilename] = useState(`التسجيل الصوتي`);
  const [speed, setSpeed] = useState<AudioSpeed>(2);

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="تحميل ملف صوتي"
      centered
      size="md"
      padding="md"
    >
      <Stack gap="md">
        <TextInput
          label="اسم الملف"
          placeholder="أدخل اسم الملف"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          styles={{ input: { textAlign: "right" } }}
        />

        <Select
          label="سرعة الصوت"
          value={speed.toString()}
          onChange={(value) => setSpeed(Number(value) as AudioSpeed)}
          data={AUDIO_SPEED_OPTIONS}
        />

        <Group justify="flex-end" gap="sm" wrap="wrap">
          <Button
            aria-label="تحميل الملف الصوتي"
            disabled={!filename.trim()}
            onClick={() => {
              onDownload(filename, speed);
              close();
            }}
          >
            تحميل
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
