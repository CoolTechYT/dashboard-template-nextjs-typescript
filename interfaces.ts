export type Position = "left" | "right";
export type ToastType = "success" | "error" | "warning" | "info";
export interface IToast {
    id: string;
    message: string;
    type: ToastType;
}