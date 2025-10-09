import { type FC } from "react";
import { Flex, Typography } from "antd";
import { DatePickerClient } from "../DatePickerClient/DatePickerClient";
import styles from "./Main.module.scss";
import { Header } from "../Header";

export const Main: FC = () => {
  return (
    <Flex vertical className={styles.container}>
      <Header />
      <Typography.Title level={4}>Выберите дату для записи</Typography.Title>
      <DatePickerClient />
    </Flex>
  );
};
