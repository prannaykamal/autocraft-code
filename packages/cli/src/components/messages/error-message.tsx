import { TextAttributes } from "@opentui/core";
import { useTheme } from "../../providers/theme";

type Props = {
  message: string;
};

export function ErrorMessage({ message }: Props) {
  const { colors } = useTheme();

  return (
    <box width="100%" alignItems="center">
      <box
        border={["top", "right", "bottom", "left"]}
        borderColor={colors.error}
        width="100%"
      >
        <box
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor={colors.surface}
          width="100%"
        >
          <box flexDirection="column" gap={1}>
            <text fg={colors.error}>SYSTEM NOTICE</text>
            <text attributes={TextAttributes.DIM} fg={colors.foreground}>
              {message}
            </text>
          </box>
        </box>
      </box>
    </box>
  );
};
