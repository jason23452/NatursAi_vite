const plugin = require('tailwindcss/plugin');
import { desktopStyle } from './desktopStyle'; // 确保路径正确

module.exports = plugin(function ({ addUtilities }) {
  const mediaQuery = '@media (min-width: 769px)';
  const mediaOverrides = new Map();

  // 定义一个辅助函数，用于生成类名
  const generateClassName = (category, escapedKey, value) => {
    const baseClass = (name, property) => ({ [`.${name}`]: { [property]: value } });

    switch (category) {
      case 'width':
        return baseClass(`w-${escapedKey}`, 'width');
      case 'borderWidth':
        return baseClass(`border-${escapedKey}`, 'border-width');
      case 'height':
        return baseClass(`h-${escapedKey}`, 'height');
      case 'letterSpacing':
        return baseClass(`tracking-${escapedKey}`, 'letter-spacing');
      case 'fontSize':
        return baseClass(`text-${escapedKey}`, 'font-size');
      case 'lineHeight':
        return baseClass(`leading-${escapedKey}`, 'line-height');
      case 'borderRadius':
        return baseClass(`rounded-${escapedKey}`, 'border-radius');
      case 'margin':
        return {
          [`.mt-${escapedKey}`]: { 'margin-top': value },
          [`.mb-${escapedKey}`]: { 'margin-bottom': value },
          [`.ml-${escapedKey}`]: { 'margin-left': value },
          [`.mr-${escapedKey}`]: { 'margin-right': value },
          [`.mx-${escapedKey}`]: { 'margin-left': value, 'margin-right': value },
          [`.my-${escapedKey}`]: { 'margin-top': value, 'margin-bottom': value },
        };
      case 'padding':
        return {
          [`.pt-${escapedKey}`]: { 'padding-top': value },
          [`.pb-${escapedKey}`]: { 'padding-bottom': value },
          [`.pl-${escapedKey}`]: { 'padding-left': value },
          [`.pr-${escapedKey}`]: { 'padding-right': value },
          [`.px-${escapedKey}`]: { 'padding-left': value, 'padding-right': value },
          [`.py-${escapedKey}`]: { 'padding-top': value, 'padding-bottom': value },
        };
      case 'space':
        return {
          [`.space-x-${escapedKey} > :not([hidden]) ~ :not([hidden])`]: {
            '--tw-space-x-reverse': '0',
            'margin-right': `calc(${value} * var(--tw-space-x-reverse))`,
            'margin-left': `calc(${value} * calc(1 - var(--tw-space-x-reverse)))`,
          },
          [`.space-y-${escapedKey} > :not([hidden]) ~ :not([hidden])`]: {
            '--tw-space-y-reverse': '0',
            'margin-top': `calc(${value} * calc(1 - var(--tw-space-y-reverse)))`,
            'margin-bottom': `calc(${value} * var(--tw-space-y-reverse))`,
          },
        };
      case 'inset':
        const generateInset = (pos) => ({
          [`.${pos}-${escapedKey}`]: { [pos]: value },
          [`.${pos}-${escapedKey}`.replace(pos, `-${pos}`)]: { [pos]: `-${value}` },
        });
        return {
          ...generateInset('top'),
          ...generateInset('bottom'),
          ...generateInset('left'),
          ...generateInset('right'),
        };
      default:
        return baseClass(`${category}-${escapedKey}`, category);
    }
  };

  // 遍历 desktopStyle 的扩展样式
  Object.entries(desktopStyle.theme.extend).forEach(([category, styles]) => {
    Object.entries(styles).forEach(([key, value]) => {
      const escapedKey = key.replace(/\./g, '\\.');
      const className = generateClassName(category, escapedKey, value);

      if (!mediaOverrides.has(mediaQuery)) {
        mediaOverrides.set(mediaQuery, {});
      }

      // 合并生成的类名
      Object.assign(mediaOverrides.get(mediaQuery), className);
    });
  });

  // 添加自定义媒体查询样式
  addUtilities(Object.fromEntries(mediaOverrides), {
    variants: ['responsive'],
  });
});
