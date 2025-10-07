import { type FC } from "react";
import { Typography } from "antd";
import { useUser } from "../../redux";

export const Header: FC = () => {
  const { userName } = useUser();
  return <Typography.Title level={2}>Запись на маникюр</Typography.Title>;
};
