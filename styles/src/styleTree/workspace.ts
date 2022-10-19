import Theme from "../themes/common/theme";
import { withOpacity } from "../utils/color";
import {
  backgroundColor,
  border,
  iconColor,
  modalShadow,
  text,
} from "./components";
import statusBar from "./statusBar";
import tabBar from "./tabBar";

export function workspaceBackground(theme: Theme) {
  return backgroundColor(theme, 300);
}

export default function workspace(theme: Theme) {
  const titlebarPadding = 6;
  const titlebarButton = {
    background: backgroundColor(theme, 100),
    border: border(theme, "secondary"),
    cornerRadius: 6,
    margin: {
      top: 1,
    },
    padding: {
      top: 1,
      bottom: 1,
      left: 7,
      right: 7,
    },
    ...text(theme, "sans", "secondary", { size: "xs" }),
    hover: {
      ...text(theme, "sans", "active", { size: "xs" }),
      background: backgroundColor(theme, "on300", "hovered"),
      border: border(theme, "primary"),
    },
  };
  const avatarWidth = 18;

  return {
    background: backgroundColor(theme, 300),
    joiningProjectAvatar: {
      cornerRadius: 40,
      width: 80,
    },
    joiningProjectMessage: {
      padding: 12,
      ...text(theme, "sans", "primary", { size: "lg" }),
    },
    externalLocationMessage: {
      background: backgroundColor(theme, "on500Info"),
      border: border(theme, "secondary"),
      cornerRadius: 6,
      padding: 12,
      margin: { bottom: 8, right: 8 },
      ...text(theme, "sans", "secondary", { size: "xs" }),
    },
    leaderBorderOpacity: 0.7,
    leaderBorderWidth: 2.0,
    tabBar: tabBar(theme),
    modal: {
      margin: {
        bottom: 52,
        top: 52,
      },
      cursor: "Arrow",
    },
    sidebar: {
      initialSize: 240,
      border: {
        color: border(theme, "primary").color,
        width: 1,
        left: true,
        right: true,
      }
    },
    paneDivider: {
      color: border(theme, "secondary").color,
      width: 1,
    },
    statusBar: statusBar(theme),
    titlebar: {
      avatarWidth,
      avatarMargin: 8,
      height: 33,
      background: backgroundColor(theme, 100),
      padding: {
        left: 80,
        right: titlebarPadding,
      },
      title: text(theme, "sans", "primary"),
      avatar: {
        cornerRadius: avatarWidth / 2,
        border: {
          color: "#00000088",
          width: 1,
        },
      },
      inactiveAvatar: {
        cornerRadius: avatarWidth / 2,
        border: {
          color: "#00000088",
          width: 1,
        },
        grayscale: true,
      },
      avatarRibbon: {
        height: 3,
        width: 12,
        // TODO: The background for this ideally should be
        // set with a token, not hardcoded in rust
      },
      border: border(theme, "primary", { bottom: true, overlay: true }),
      signInPrompt: {
        ...titlebarButton
      },
      offlineIcon: {
        color: iconColor(theme, "secondary"),
        width: 16,
        margin: {
          left: titlebarPadding,
        },
        padding: {
          right: 4,
        },
      },
      outdatedWarning: {
        ...text(theme, "sans", "warning", { size: "xs" }),
        background: backgroundColor(theme, "warning"),
        border: border(theme, "warning"),
        margin: {
          left: titlebarPadding,
        },
        padding: {
          left: 6,
          right: 6,
        },
        cornerRadius: 6,
      },
      callControl: {
        cornerRadius: 6,
        color: iconColor(theme, "secondary"),
        iconWidth: 12,
        buttonWidth: 20,
        hover: {
          background: backgroundColor(theme, "on300", "hovered"),
          color: iconColor(theme, "active"),
        },
      },
      toggleContactsButton: {
        margin: { left: 6 },
        cornerRadius: 6,
        color: iconColor(theme, "secondary"),
        iconWidth: 8,
        buttonWidth: 20,
        active: {
          background: backgroundColor(theme, "on300", "active"),
          color: iconColor(theme, "active"),
        },
        hover: {
          background: backgroundColor(theme, "on300", "hovered"),
          color: iconColor(theme, "active"),
        },
      },
      toggleContactsBadge: {
        cornerRadius: 3,
        padding: 2,
        margin: { top: 3, left: 3 },
        border: { width: 1, color: workspaceBackground(theme) },
        background: iconColor(theme, "feature"),
      },
      shareButton: {
        ...titlebarButton
      }
    },
    toolbar: {
      height: 34,
      background: backgroundColor(theme, 500),
      border: border(theme, "secondary", { bottom: true }),
      itemSpacing: 8,
      navButton: {
        color: iconColor(theme, "primary"),
        iconWidth: 12,
        buttonWidth: 24,
        cornerRadius: 6,
        hover: {
          color: iconColor(theme, "active"),
          background: backgroundColor(theme, "on500", "hovered"),
        },
        disabled: {
          color: withOpacity(iconColor(theme, "muted"), 0.6),
        },
      },
      padding: { left: 8, right: 8, top: 4, bottom: 4 },
    },
    breadcrumbs: {
      ...text(theme, "mono", "secondary"),
      padding: { left: 6 },
    },
    disconnectedOverlay: {
      ...text(theme, "sans", "active"),
      background: withOpacity(theme.backgroundColor[500].base, 0.8),
    },
    notification: {
      margin: { top: 10 },
      background: backgroundColor(theme, 300),
      cornerRadius: 6,
      padding: 12,
      border: border(theme, "primary"),
      shadow: modalShadow(theme),
    },
    notifications: {
      width: 400,
      margin: { right: 10, bottom: 10 },
    },
    dock: {
      initialSizeRight: 640,
      initialSizeBottom: 480,
      wash_color: withOpacity(theme.backgroundColor[500].base, 0.5),
      panel: {
        border: {
          ...border(theme, "secondary"),
          width: 1
        },
      },
      maximized: {
        margin: 24,
        border: border(theme, "secondary", { "overlay": true }),
        shadow: modalShadow(theme),
      }
    }
  };
}
