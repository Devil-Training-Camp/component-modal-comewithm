import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import classnames from 'classnames';
import './Button.less';

// type ButtonProps = {
//   className?: string;
//   click: MouseEventHandler;
//   text: ReactNode;
//   buttonProps?: CSSProperties;
//   buttonType?: ButtonSize;
// };

// export type ButtonSize = 'primary' | 'small' | 'large';

// export const LocalButton: React.FC<ButtonProps> = (props) => {
//   const prefixCls = 'btn';
//   const {
//     click,
//     text,
//     buttonProps = {},
//     buttonType = 'primary',
//     className
//   } = props;
//   const btnCls = classnames(prefixCls, className, {
//     [`btn-primary`]: buttonType === 'primary',
//     [`btn-small`]: buttonType === 'small',
//     [`btn-large`]: buttonType === 'large'
//   });

//   return (
//     <button
//       onClick={click}
//       className={btnCls}
//       style={{
//         ...buttonProps
//       }}
//     >
//       {text}
//     </button>
//   );
// };

// interface OKButtonProps {
//   onOk: MouseEventHandler;
//   okText: ReactNode;
//   okButtonProps?: CSSProperties;
//   okType?: ButtonSize;
// }

// interface CancelButtonProps {
//   onCancel: MouseEventHandler;
//   cancelText: ReactNode;
//   cancelButtonProps?: CSSProperties;
//   cancelType?: ButtonSize;
// }

// export const OKButton: React.FC<OKButtonProps> = (props) => {
//   const { onOk, okButtonProps = {}, okText, okType } = props;

//   return (
//     <LocalButton
//       click={onOk}
//       className={'okBtn'}
//       buttonProps={{
//         ...okButtonProps
//       }}
//       text={okText}
//       buttonType={okType}
//     />
//   );
// };

// export const CancelButton: React.FC<CancelButtonProps> = (props) => {
//   const { onCancel, cancelButtonProps = {}, cancelText, cancelType } = props;

//   const CancelButtonStyle: CSSProperties = {};

//   return (
//     <LocalButton
//       click={onCancel}
//       className={'cancelBtn'}
//       buttonProps={{
//         ...cancelButtonProps,
//         ...CancelButtonStyle
//       }}
//       text={cancelText}
//       buttonType={cancelType}
//     />
//   );
// };

interface NewButtonProps {
  children: React.ReactNode;
  block?: boolean;
  className?: string;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: string;
  icon?: ReactNode;
  loading?: boolean | { delay: number };
  shape?: NewButtonShape;
  size?: NewButtonSize;
  styles?: CSSProperties;
  target?: string;
  type?: NewButtonType;
  onClick: (event: React.MouseEvent) => void;
}

type NewButtonShape = 'default' | 'circle' | 'round';
export type NewButtonSize = 'large' | 'middle' | 'small';
export type NewButtonType =
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text'
  | 'default';

export const Button: React.FC<NewButtonProps> = (props) => {
  const {
    children,
    className,
    shape = 'default',
    size = 'middle',
    type = 'default',
    onClick,
    styles = {},
    danger = false,
    ghost = false,
    disabled = false
  } = props;

  const buttonCls = classnames(
    className,
    'newbtn',
    `newbtn-${type}`,
    `newbtn-${size}`,
    {
      [`newbtn-danger`]: danger,
      [`newbtn-ghost`]: ghost
    }
  );

  const computeStyle = (
    size: NewButtonSize,
    shape: NewButtonShape
  ): CSSProperties => {
    let style = {
      vertical: 4,
      horizon: 15,
      height: 32
    };
    let borderRadius: string | number = '6px';
    switch (size) {
      case 'large':
        style = {
          vertical: 6,
          horizon: 15,
          height: 40
        };
        borderRadius = '8px';
        break;
      case 'small':
        style = {
          vertical: 0,
          horizon: 7,
          height: 24
        };
        borderRadius = '4px';
    }

    switch (shape) {
      case 'circle':
        borderRadius = '50%';
        break;
    }

    return {
      padding: `${style.vertical}px ${style.horizon}px`,
      height: `${style.height}px`,
      borderRadius: `${borderRadius}`
    };
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonCls}
      style={{
        ...computeStyle(size, shape),
        ...styles
      }}
    >
      {children}
    </button>
  );
};
