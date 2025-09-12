import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Main",
  primaryColor: "gray",
  defaultRadius: "md",
  components: {

    ActionIcon: {
      defaultProps: {
        variant: "transparent",
        color: "primary",
      },
    },

    Select: {
      defaultProps: {
        allowDeselect: false,
        searchable: true,
        scrollAreaProps: { type: "never" },
        checkIconPosition: "right",
      },
      styles: {
        label: {
          paddingBottom: "6px",
        },
      },
    },

    TextInput: {
      styles: {
        label: {
          paddingBottom: "6px",
        },
        input: {
          textAlign: "center",
        },
      },
    },

    Button: {
      defaultProps: {
      },
    },
  },
});