import { Mode, type ModeType } from "@nightcode/shared";
import { useTheme } from "../../providers/theme";

type Props = {
  message: string;
  mode: ModeType;
};

export function UserMessage({ message, mode }: Props) {
  const { colors } = useTheme();

  return (
    <box width="100%" alignItems="center">
      <box
        border={["top", "right", "bottom", "left"]}
        borderColor={colors.border ?? colors.thinkingBorder}
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
            <text fg={mode === Mode.PLAN ? colors.planMode : colors.primary}>
              YOU · {mode === Mode.PLAN ? "PLAN" : "BUILD"}
            </text>
            <text fg={colors.foreground}>{message}</text>
          </box>
        </box>
      </box>
    </box>
  );
};
