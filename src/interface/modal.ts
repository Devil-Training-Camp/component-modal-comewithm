import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { NewButtonType } from "../components/Button/Button";


export interface ModalProps {
    children?: ReactNode;
    /**Modal 完全关闭后的回调 */
    afterClose: Function;
    /**对话框是否可见 */
    open: boolean;
    /**是否展示遮罩 */
    mask?: boolean;
    /**点击蒙层是否允许关闭 */
    maskClosable?: boolean;
    /**遮罩样式 */
    maskStyle?: CSSProperties;
    /**打开和关闭 Modal 时动画结束后的回调 */
    afterOpenChange?: (open: boolean) => void;
    /**可用于设置浮层的样式，调整浮层位置等 */
    style?: CSSProperties;
    /**宽度 */
    width?: string | number;
    /**标题 */
    title?: ReactNode;
    /**设置 Modal 的 z-index */
    zIndex?: number;
    /**是否显示右上角的关闭按钮 */
    closable?: boolean;
    /**对话框外层容器的类名 */
    wrapClassName?: string;
    /**确认按钮文字 */
    okText?: ReactNode;
    /**确认按钮类型 */
    okType?: NewButtonType;
    /**点击确定回调 */
    onOk: MouseEventHandler;
    /**点击遮罩层或右上角叉或取消按钮的回调 */
    onCancel: MouseEventHandler;
    /**ok 按钮 props */
    okButtonProps?: CSSProperties;
    /**cancel 按钮 props */
    cancelButtonProps?: CSSProperties;
    /**取消按钮文字 */
    cancelText?: ReactNode;
    /**Modal body 样式 */
    bodyStyle?: CSSProperties;
    /**垂直居中展示 Modal */
    centered?: boolean;
    /**自定义关闭图标 */
    closeIcon?: ReactNode;
    /**底部内容，当不需要默认底部按钮时，可以设为 footer={null} */
    footer?: ReactNode;
    /**指定 Modal 挂载的节点，但依旧为全局展示，false 为挂载在当前位置 */
    getContainer?: HTMLElement | (() => HTMLElement) | false;
    /**关闭时销毁 Modal 里的子元素 */
    destroyOnClose?: boolean;
    /**强制渲染 Modal */
    forceRender?: boolean;
    className?: string;
    /**确定按钮 loading */
    confirmLoading?: boolean;
    /**对话框关闭后是否需要聚焦触发元素 */
    focusTriggerAfterClose?: boolean;
    /**是否支持键盘 esc 关闭 */
    keyboard?: boolean;
    /**自定义渲染对话框 */
    modalRender?: (node?: ReactNode) => ReactNode;
  }



export interface ModalMethodsConfig {
    afterClose: Function;
    /**指定自动获得焦点的按钮 */
    autoFocusButton: null | 'ok' | 'cancel';
    /**容器类名 */
    className: string;
    /**内容 */
    content: ReactNode;
    /**自定义图标 */
    icon: ReactNode;
    mask: boolean;
    maskClosable: boolean;
    maskStyle: CSSProperties;
    style: CSSProperties;
    width: string | number;
    title: ReactNode;
    zIndex: number;
    closable: boolean;
    wrapClassName?: string;
    okText: ReactNode;
    okType: NewButtonType;
    onOk: MouseEventHandler;
    onCancel: MouseEventHandler;
    okButtonProps: CSSProperties;
    cancelButtonProps: CSSProperties;
    cancelText: ReactNode;
    bodyStyle: CSSProperties;
    centered: boolean;
    closeIcon?: ReactNode;
    footer?: ReactNode;
    getContainer?: HTMLElement | (() => HTMLElement) | false;
    keyboard?: boolean;
  }
  
  interface ModalAttributes {
    success: (config: Partial<ModalMethodsConfig>) => ReactNode;
    info: (config: Partial<ModalMethodsConfig>) => ReactNode;
    confirm: (config: Partial<ModalMethodsConfig>) => ReactNode;
    warning: (config: Partial<ModalMethodsConfig>) => ReactNode;
    error: (config: Partial<ModalMethodsConfig>) => ReactNode;
    update: (config: Partial<ModalMethodsConfig>) => ReactNode;
    destroy: () => void;
    useModal: () => any[];
    destroyAll: () => void;
  }
  
  type ModalType = 'success' | 'info' | 'warning' | 'error';