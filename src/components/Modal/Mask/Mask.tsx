import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import './Mask.less';

interface MaskProps {
  mask: boolean;
  maskClosable: boolean;
  maskStyle: CSSProperties;
  onClose: (e: React.MouseEvent) => void;
}
const prefixCls = 'modal-mask';
export const Mask: React.FC<MaskProps> = (props) => {
  const { mask, maskClosable, maskStyle, onClose } = props;

  const maskCls = classnames(prefixCls, {
    [`modal-mask-show-bg`]: mask
  });

  const maskClose = (e: React.MouseEvent) => {
    if (mask && maskClosable) {
      onClose(e);
    }
  };

  const mergedStyle = {
    animation: `fadeIn 0.2s linear forwards`,
    ...maskStyle
  }

  return (
    <div className={maskCls} style={{ ...mergedStyle }} onClick={maskClose}></div>
  );
};
