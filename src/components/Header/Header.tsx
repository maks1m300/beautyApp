import { type FC } from "react";
import { Typography } from "antd";
import text from "@assets/text.json";

export const Header: FC = () => {
  return <Typography.Title level={2}>{text.title}</Typography.Title>;
};
