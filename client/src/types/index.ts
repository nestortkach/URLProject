export interface ButtonType {
  handleClick?: () => void;
  btnType: "button" | "reset" | "submit";
  text: string;
  btnStyles?: string;
  isDisabled: boolean;
}

export interface URLData {
  _id: string;
  fullUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}
