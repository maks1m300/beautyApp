// config/antdTheme.ts
import { type ThemeConfig, theme } from 'antd';
import type { TelegramTheme } from '../redux/hooks/themeHook';

export const getAntdTheme = (tgTheme: TelegramTheme): ThemeConfig => {
  const isDark = tgTheme.isDark;
  
  return {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      // Основные цвета из Telegram
      colorPrimary: tgTheme.button_color,
      colorBgBase: tgTheme.bg_color,
      colorTextBase: tgTheme.text_color,
      colorTextSecondary: tgTheme.subtitle_text_color,
      colorTextTertiary: tgTheme.hint_color,
      colorLink: tgTheme.link_color,
      colorError: tgTheme.destructive_text_color,
      colorWarning: '#faad14',
      colorSuccess: '#52c41a',
      colorInfo: tgTheme.accent_text_color,
      
      // Фоновые цвета
      colorBgContainer: tgTheme.section_bg_color,
      colorBgElevated: tgTheme.secondary_bg_color,
      colorBgLayout: tgTheme.bg_color,
      
      // Цвета границ
      colorBorder: tgTheme.hint_color + '40',
      colorBorderSecondary: tgTheme.hint_color + '20',
      
      // Радиусы скругления (Telegram-like)
      borderRadius: 12,
      borderRadiusLG: 16,
      borderRadiusSM: 8,
      borderRadiusXS: 4,
      
      // Размеры шрифтов
      fontSize: 16,
      fontSizeLG: 18,
      fontSizeSM: 14,
      fontSizeXL: 20,
      
      // Высоты компонентов
      controlHeight: 44,
      controlHeightLG: 52,
      controlHeightSM: 36,
      
      // Отступы
      padding: 16,
      paddingLG: 20,
      paddingSM: 12,
      paddingXS: 8,
      paddingXXS: 4,
      
      // Маржины
      margin: 16,
      marginLG: 20,
      marginSM: 12,
      marginXS: 8,
      marginXXS: 4,
      
      // Размеры иконок
      sizeXXL: 48,
      sizeXL: 40,
      sizeLG: 32,
      sizeMS: 24,
      size: 20,
      sizeSM: 16,
      sizeXS: 12,
      
      // Line height
      lineHeight: 1.5,
      lineHeightLG: 1.6,
      lineHeightSM: 1.4,
      
      // Font weight
      fontWeightStrong: 600,
      
      // Тени
      boxShadow: 'none',
      boxShadowSecondary: 'none',
      boxShadowTertiary: 'none',
    },
    components: {
      // Кастомизация Typography
       Typography: {
        // Базовые цвета
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.text_color,
        colorTextSecondary: tgTheme.subtitle_text_color,
        colorTextDescription: tgTheme.hint_color,
        colorTextDisabled: tgTheme.hint_color + '80',
        colorTextLabel: tgTheme.subtitle_text_color,
        
        
        // Цвета ссылок
        colorLink: tgTheme.link_color,
        colorLinkHover: tgTheme.link_color + 'E6',
        colorLinkActive: tgTheme.link_color + 'CC',
        
        // Цвета состояний
        colorError: tgTheme.destructive_text_color,
        colorWarning: tgTheme.accent_text_color, // или свой цвет для warning
        colorSuccess: '#52c41a',
        
        // Размеры шрифтов для разных уровней
        fontSize: 16, // базовый размер
        fontSizeSM: 14,
        fontSizeLG: 18,
        fontSizeXL: 20,
        fontSizeHeading1: 32,
        fontSizeHeading2: 28,
        fontSizeHeading3: 24,
        fontSizeHeading4: 20,
        fontSizeHeading5: 18,
        
        // Line heights
        lineHeight: 1.5,
        lineHeightSM: 1.4,
        lineHeightLG: 1.6,
        lineHeightHeading1: 1.2,
        lineHeightHeading2: 1.25,
        lineHeightHeading3: 1.3,
        lineHeightHeading4: 1.35,
        lineHeightHeading5: 1.4,
        
        // Font weights
        fontWeightStrong: 600,
        
        
        // Стили для Title (заголовков)
        titleMarginTop: '0.5em',
        titleMarginBottom: '0.5em',
        
       
        
      },

      // Кастомизация Button
      Button: {
        colorPrimary: tgTheme.button_color,
        colorPrimaryHover: tgTheme.button_color + 'E6',
        colorPrimaryActive: tgTheme.button_color + 'CC',
        defaultColor: tgTheme.text_color,
        defaultBg: tgTheme.secondary_bg_color,
        defaultBorderColor: 'transparent',
        borderRadius: 12,
        borderRadiusLG: 16,
        borderRadiusSM: 8,
        controlHeight: 44,
        controlHeightLG: 52,
        controlHeightSM: 36,
        fontSize: 16,
        fontSizeLG: 18,
        fontSizeSM: 14,
        fontWeight: 500,
        lineWidth: 0,
        paddingInline: 20,
        paddingInlineLG: 24,
        paddingInlineSM: 16,
      },
      
      // Кастомизация Input
      Input: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorTextPlaceholder: tgTheme.hint_color,
        colorBorder: 'transparent',
        colorPrimaryHover: tgTheme.button_color,
        borderRadius: 12,
        controlHeight: 44,
        controlHeightLG: 52,
        controlHeightSM: 36,
        fontSize: 16,
        paddingInline: 16,
        paddingInlineLG: 20,
        paddingInlineSM: 12,
        addonBg: tgTheme.section_bg_color,
      },
      
      // Кастомизация Card
      Card: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.text_color,
        colorTextDescription: tgTheme.subtitle_text_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 16,
        borderRadiusLG: 20,
        borderRadiusSM: 12,
        padding: 16,
        paddingLG: 20,
        paddingSM: 12,
        boxShadow: 'none',
        boxShadowTertiary: 'none',
      },
      
      // Кастомизация Modal
      Modal: {
        colorBgMask: 'rgba(0, 0, 0, 0.6)',
        colorBgElevated: tgTheme.bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.text_color,
        borderRadius: 20,
        borderRadiusLG: 24,
        padding: 20,
        paddingMD: 24,
        paddingContentHorizontal: 20,
        paddingContentHorizontalLG: 24,
        boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
      },
      
      // Кастомизация Select
      Select: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorTextPlaceholder: tgTheme.hint_color,
        colorBorder: 'transparent',
        colorPrimaryHover: tgTheme.button_color,
        borderRadius: 12,
        controlHeight: 44,
        controlHeightLG: 52,
        controlHeightSM: 36,
        fontSize: 16,
      },
      
      // Кастомизация Menu
      Menu: {
        colorBgContainer: tgTheme.bg_color,
        colorItemBg: 'transparent',
        colorItemBgSelected: tgTheme.secondary_bg_color,
        colorItemBgHover: tgTheme.secondary_bg_color + '80',
        colorItemText: tgTheme.text_color,
        colorItemTextSelected: tgTheme.button_color,
        colorItemTextHover: tgTheme.text_color,
        colorSubItemBg: 'transparent',
        colorActiveBarWidth: 0,
        borderRadius: 12,
        itemBorderRadius: 12,
        subMenuItemBorderRadius: 12,
        horizontalItemBorderRadius: 12,
      },
      
      // Кастомизация Table
      Table: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.section_header_text_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 12,
        headerBg: tgTheme.secondary_bg_color,
        headerColor: tgTheme.section_header_text_color,
        rowHoverBg: tgTheme.secondary_bg_color + '80',
        cellPaddingInline: 16,
        cellPaddingBlock: 12,
      },
      
      // Кастомизация Tabs
      Tabs: {
        colorBgContainer: tgTheme.bg_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorPrimary: tgTheme.button_color,
        colorPrimaryHover: tgTheme.button_color,
        colorBorder: tgTheme.secondary_bg_color,
        itemColor: tgTheme.hint_color,
        itemSelectedColor: tgTheme.button_color,
        itemHoverColor: tgTheme.text_color,
        itemActiveColor: tgTheme.button_color,
        inkBarColor: tgTheme.button_color,
      },
      
      // Кастомизация Divider
      Divider: {
        colorSplit: tgTheme.secondary_bg_color,
        margin: 16,
        marginLG: 20,
        marginSM: 12,
      },
      
      // Кастомизация Switch
      Switch: {
        colorPrimary: tgTheme.button_color,
        colorPrimaryHover: tgTheme.button_color + 'E6',
        trackHeight: 24,
        trackMinWidth: 44,
        trackPadding: 2,
        handleSize: 20,
      },

      // Кастомизация Alert
      Alert: {
        colorInfoBg: tgTheme.accent_text_color + '20',
        colorInfoBorder: tgTheme.accent_text_color + '40',
        colorInfo: tgTheme.accent_text_color,
        colorSuccessBg: '#52c41a20',
        colorSuccessBorder: '#52c41a40',
        colorSuccess: '#52c41a',
        colorWarningBg: '#faad1420',
        colorWarningBorder: '#faad1440',
        colorWarning: '#faad14',
        colorErrorBg: tgTheme.destructive_text_color + '20',
        colorErrorBorder: tgTheme.destructive_text_color + '40',
        colorError: tgTheme.destructive_text_color,
        borderRadius: 12,
        padding: 16,
        paddingContentVertical: 12,
      },

      // Кастомизация Message
      Message: {
        contentBg: tgTheme.section_bg_color,
        colorInfo: tgTheme.accent_text_color,
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: tgTheme.destructive_text_color,
        borderRadius: 12,
        padding: 16,
      },

      // Кастомизация Notification
      Notification: {
        colorBgElevated: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.text_color,
        colorInfo: tgTheme.accent_text_color,
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: tgTheme.destructive_text_color,
        borderRadius: 12,
        padding: 16,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
      },

      // Кастомизация Tooltip
      Tooltip: {
        colorBgSpotlight: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        borderRadius: 8,
        padding: 12,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
      },

      // Кастомизация Popover
      Popover: {
        colorBgElevated: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        borderRadius: 12,
        padding: 0,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
      },

      // Кастомизация Dropdown
      Dropdown: {
        colorBgElevated: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        borderRadius: 12,
        padding: 8,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
      },

      // Кастомизация Drawer
      Drawer: {
        colorBgElevated: tgTheme.bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.text_color,
        padding: 20,
        paddingLG: 24,
        paddingMD: 20,
      },

      // Кастомизация Progress
      Progress: {
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorInfo: tgTheme.button_color,
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: tgTheme.destructive_text_color,
        borderRadius: 100,
        lineBorderRadius: 100,
      },

      // Кастомизация Tag
      Tag: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorBorder: 'transparent',
        borderRadius: 6,
        fontSize: 14,
        lineHeight: 1.4,
      },

      // Кастомизация Radio
      Radio: {
        colorPrimary: tgTheme.button_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        borderRadius: 12,
      },

      // Кастомизация Checkbox
      Checkbox: {
        colorPrimary: tgTheme.button_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        borderRadius: 4,
      },

      // Кастомизация Slider
      Slider: {
        colorPrimary: tgTheme.button_color,
        colorPrimaryBorder: tgTheme.button_color,
        colorPrimaryBorderHover: tgTheme.button_color,
        trackBg: tgTheme.button_color,
        trackHoverBg: tgTheme.button_color,
        handleColor: tgTheme.button_color,
        handleActiveColor: tgTheme.button_color,
        railBg: tgTheme.secondary_bg_color,
        railHoverBg: tgTheme.secondary_bg_color,
      },

      // Кастомизация Rate
      Rate: {
        colorText: tgTheme.hint_color,
      },

      // Кастомизация Spin
      Spin: {
        colorPrimary: tgTheme.button_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
      },

      // Кастомизация Skeleton
      Skeleton: {
        color: tgTheme.secondary_bg_color,
        colorGradientEnd: tgTheme.secondary_bg_color + '80',
      },

      // Кастомизация Segmented
      Segmented: {
        colorBgLayout: tgTheme.bg_color,
        colorBgElevated: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorTextLabel: tgTheme.hint_color,
        colorTextDescription: tgTheme.hint_color,
        colorFillSecondary: tgTheme.button_color,
        colorBgContainer: tgTheme.section_bg_color,
        borderRadius: 12,
      },

      // Кастомизация Pagination
      Pagination: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorBgTextHover: tgTheme.secondary_bg_color,
        colorPrimary: tgTheme.button_color,
        colorPrimaryHover: tgTheme.button_color,
        colorText: tgTheme.text_color,
        borderRadius: 8,
      },

      // Кастомизация Steps
      Steps: {
        colorPrimary: tgTheme.button_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorTextHeading: tgTheme.text_color,
        colorBgContainer: tgTheme.bg_color,
        colorSplit: tgTheme.secondary_bg_color,
        borderRadius: 12,
      },

      // Кастомизация Timeline
      Timeline: {
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorBgContainer: tgTheme.bg_color,
        colorSplit: tgTheme.secondary_bg_color,
      },

      // Кастомизация Transfer
      Transfer: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 12,
      },

      // Кастомизация Tree
      Tree: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 12,
      },

      // Кастомизация TreeSelect
      TreeSelect: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorTextPlaceholder: tgTheme.hint_color,
        colorBorder: 'transparent',
        colorPrimaryHover: tgTheme.button_color,
        borderRadius: 12,
      },

      // Кастомизация Cascader
      Cascader: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorTextPlaceholder: tgTheme.hint_color,
        colorBorder: 'transparent',
        colorPrimaryHover: tgTheme.button_color,
        borderRadius: 12,
      },

      // Кастомизация DatePicker
      DatePicker: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorTextPlaceholder: tgTheme.hint_color,
        colorBorder: 'transparent',
        colorPrimaryHover: tgTheme.button_color,
        borderRadius: 12,
      },

      // Кастомизация Upload
      Upload: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorBorder: 'transparent',
        colorPrimaryHover: tgTheme.button_color,
        borderRadius: 12,
      },

      // Кастомизация Avatar
      Avatar: {
        colorBgContainer: tgTheme.secondary_bg_color,
        colorText: tgTheme.text_color,
        borderRadius: 12,
      },

      // Кастомизация Badge
      Badge: {
        colorBgContainer: tgTheme.destructive_text_color,
        colorText: tgTheme.button_text_color,
        borderRadius: 10,
      },

      // Кастомизация Calendar
      Calendar: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.section_header_text_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 12,
      },

      // Кастомизация Carousel
      Carousel: {
        colorBgContainer: tgTheme.section_bg_color,
        dotHeight: 6,
        dotWidth: 6,
        dotActiveWidth: 24,
      },

      // Кастомизация Collapse
      Collapse: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.text_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 12,
      },

      // Кастомизация Descriptions
      Descriptions: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.section_header_text_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 12,
      },

      // Кастомизация Image
      Image: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        borderRadius: 12,
      },

      // Кастомизация List
      List: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.section_header_text_color,
        colorBorder: tgTheme.secondary_bg_color,
        borderRadius: 12,
      },

      // Кастомизация Popconfirm
      Popconfirm: {
        colorBgElevated: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        borderRadius: 12,
      },

      // Кастомизация Result
      Result: {
        colorBgContainer: tgTheme.section_bg_color,
        colorText: tgTheme.text_color,
        colorTextHeading: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        borderRadius: 12,
      },

      // Кастомизация Statistic
      Statistic: {
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
      },

      // Кастомизация Anchor
      Anchor: {
        colorBgContainer: tgTheme.bg_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorPrimary: tgTheme.button_color,
      },

      // Кастомизация Breadcrumb
      Breadcrumb: {
        colorBgContainer: tgTheme.bg_color,
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorPrimary: tgTheme.button_color,
      },

      // Кастомизация Form
      Form: {
        colorText: tgTheme.text_color,
        colorTextDescription: tgTheme.hint_color,
        colorTextHeading: tgTheme.text_color,
        colorError: tgTheme.destructive_text_color,
      },
    },
  };
};