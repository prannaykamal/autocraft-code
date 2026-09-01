import { TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";

type HeaderProps = {
  compact?: boolean;
};

/**
 * Canonical AutoCraft web-brand assets.
 *
 * OpenTUI cannot render these SVGs directly in React JSX today, so the TUI
 * uses a terminal-native monochrome interpretation below. Keep these paths
 * here as the canonical source assets for a future raster/image adapter.
 */
export const AUTOCRAFT_BRAND_ASSETS = {
  logo: "/logo.svg",
  effectLeft: "/effect.svg",
  effectRight: "/effect2.svg",
} as const;

function useBrandColors() {
  const { colors } = useTheme();

  return {
    foreground: colors.foreground ?? colors.primary,
    muted: colors.muted ?? colors.dimSeparator,
    border: colors.border ?? colors.thinkingBorder,
    background: colors.background,
  };
}

function BrandEffect({ mirrored = false }: { mirrored?: boolean }) {
  const { border, muted } = useBrandColors();

  return (
    <box flexDirection="row" gap={1} alignItems="center">
      <text fg={border}>{mirrored ? "────" : "────"}</text>
      <text fg={muted}>·</text>
      <text fg={border}>·</text>
      <text fg={muted}>◇</text>
      <text fg={border}>·</text>
      <text fg={muted}>·</text>
      <text fg={border}>{mirrored ? "────" : "────"}</text>
    </box>
  );
}

export function BrandMark() {
  const { foreground, muted } = useBrandColors();

  return (
    <box flexDirection="row" gap={1} alignItems="center">
      <text fg={foreground} attributes={TextAttributes.BOLD}>
        ◇
      </text>
      <text fg={foreground} attributes={TextAttributes.BOLD}>
        AUTOCRAFT
      </text>
      <text fg={muted}>/</text>
      <text fg={muted} attributes={TextAttributes.BOLD}>
        CODE
      </text>
    </box>
  );
}

export function Header({ compact = false }: HeaderProps) {
  const { foreground, muted, border } = useBrandColors();

  if (compact) {
    return <BrandMark />;
  }

  return (
    <box
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={1}
    >
      <BrandEffect />

      <box
        flexDirection="row"
        justifyContent="center"
        gap={1}
        alignItems="center"
      >
        <text fg={border}>◇</text>
        <text fg={muted} attributes={TextAttributes.BOLD}>
          THE AUTONOMOUS CODING WORKSPACE
        </text>
        <text fg={border}>◇</text>
      </box>

      <box
        flexDirection="row"
        justifyContent="center"
        gap={1}
        alignItems="center"
      >
        <ascii-font font="tiny" text="Autocraft" color={foreground} />
        <ascii-font font="tiny" text="Code" color={muted} />
      </box>

      <text fg={foreground} attributes={TextAttributes.BOLD}>
        Describe the outcome.
      </text>

      <text fg={muted}>
        Your code stays yours. The workspace handles the path between.
      </text>

      <BrandEffect mirrored />
    </box>
  );
}