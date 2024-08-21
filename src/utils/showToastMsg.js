import { Bounce, toast } from "react-toastify";

export function showSuccessToastMsg(msg) {
  console.log("hello world");
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}

export function showErrorToastMsg(error) {
  console.log("hello world");
  toast.error(`${error.error}\n${error.message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}

export function showWarningToastMsg(msg) {
  toast.warn(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}

export { ToastContainer } from "react-toastify";
