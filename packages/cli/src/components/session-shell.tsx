import { TextAttributes } from "@opentui/core";
import type { ReactNode } from "react";
import { InputBar } from "./input-bar";
import { Spinner } from "./spinner";
import { usePromptConfig } from "../providers/prompt-config";
import { useTheme } from "../providers/theme";
import { BrandMark } from "./header";

type Props = {
  children?: ReactNode;
  onSubmit: (text: string) => void;
  inputDisabled?: boolean;
  loading?: boolean;
  interruptible?: boolean;
};

export function SessionShell({
  children,
  onSubmit,
  inputDisabled = false,
  loading = false,
  interruptible = false,
}: Props) {
  const { mode } = usePromptConfig();
  const { colors } = useTheme();

  return (
    <box
      flexDirection="column"
      flexGrow={1}
      width="100%"
      height="100%"
      paddingY={1}
      paddingX={3}
      gap={1}
    >
      <box
        flexShrink={0}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingX={1}
        paddingBottom={1}
        border={["bottom"]}
        borderColor={colors.border ?? colors.thinkingBorder}
      >
        <BrandMark />
        <text fg={colors.muted ?? colors.dimSeparator}>CONNECTED WORKSPACE</text>
      </box>
      <scrollbox flexGrow={1} width="100%" stickyScroll stickyStart="bottom">
        <box>{children}</box>
      </scrollbox>
      <box flexShrink={0}>
        <InputBar onSubmit={onSubmit} disabled={inputDisabled} />
      </box>
      <box
        flexShrink={0}
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        height={1}
        gap={2}
        paddingLeft={1}
      >
        <box flexDirection="row" alignItems="center" gap={2}>
          {loading ? (
            <>
              <Spinner mode={mode} />
              {interruptible ? (
                <text fg={colors.muted ?? undefined}>esc to interrupt</text>
              ) : null}
            </>
          ) : null}
        </box>

        <box flexDirection="row" gap={2} flexShrink={0} marginLeft="auto">
          <box flexDirection="row" gap={1}>
            <text attributes={TextAttributes.BOLD}>tab</text>
            <text attributes={TextAttributes.DIM}>agent</text>
          </box>
          <box flexDirection="row" gap={1}>
            <text attributes={TextAttributes.BOLD}>/</text>
            <text attributes={TextAttributes.DIM}>commands</text>
          </box>
        </box>
      </box>
    </box>
  );
};
