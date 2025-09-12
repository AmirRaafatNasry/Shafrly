import { Box, Textarea, TextareaProps } from "@mantine/core";

interface TextAreaProps extends TextareaProps {
  bottomSection?: React.ReactNode;
}

export const TextArea: React.FC<TextAreaProps> = ({
  bottomSection,
  ...props
}) => {
  const styles = props.styles as any;
  const mergedStyles = {
    ...styles,
    input: {
      ...styles?.input,
      paddingBottom: bottomSection ? 40 : 0,
    },
  };

  return (
    <Box pos="relative">
      <Textarea autosize minRows={8} {...props} styles={mergedStyles} />
      {bottomSection && (
        <Box pos="absolute" p="sm" bottom={0} left={0} right={0}>
          {bottomSection}
        </Box>
      )}
    </Box>
  );
};