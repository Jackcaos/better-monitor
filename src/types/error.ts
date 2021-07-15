type ErrorType = 'UNCAUGHT_ERROR' | 'UNHANDLEREJECTION_ERROR' | 'RESOURCE_ERROR' | 'UNKNOWN_ERROR';

// 基础错误类型包括：错误类型，时间
interface IBaseError {
  type: ErrorType;
  message?: string;
}

// 资源错误包括：类名,id,标签名,路径
interface IResourceError extends IBaseError {
  className: string;
  id: string;
  tagName: string;
  path: string;
}

// JS脚本错误：行号，列号，错误信息，文件名，错误栈
interface IUncaughtError extends IBaseError {
  colno: number;
  lineno: number;
  filename: string;
}

// Promise异常：错误信息， 错误栈
interface IRejectError extends IBaseError {
  stack: string;
}

// 未知错误
type IUnknownError = IBaseError;

export {
  ErrorType,
  IBaseError,
  IResourceError,
  IUncaughtError,
  IRejectError,
  IUnknownError,
};

