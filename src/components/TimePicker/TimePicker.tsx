import { Dispatch, SetStateAction, useState, type FC } from "react";
import { Button, Flex } from "antd";

import styles from "./TimePicker.module.scss";

import text from "@assets/text.json";

interface Props {
  date?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const dateTime: Record<string, { time: string; disabled: boolean }[]> = {
  "2025-10-08": [
    { time: "13:00", disabled: true },
    { time: "15:00", disabled: false },
    { time: "19:00", disabled: false },
  ],
  "2025-10-09": [
    { time: "13:00", disabled: true },
    { time: "15:00", disabled: false },
    { time: "19:00", disabled: true },
  ],
  "2025-10-10": [
    { time: "13:00", disabled: false },
    { time: "15:00", disabled: false },
    { time: "19:00", disabled: true },
  ],
  "2025-10-11": [
    { time: "13:00", disabled: true },
    { time: "15:00", disabled: false },
    { time: "19:00", disabled: true },
  ],
  "2025-10-13": [
    { time: "13:00", disabled: false },
    { time: "15:00", disabled: true },
    { time: "19:00", disabled: true },
  ],
  "2025-10-15": [
    { time: "13:00", disabled: true },
    { time: "15:00", disabled: false },
    { time: "19:00", disabled: false },
    { time: "19:40", disabled: false },
    { time: "19:10", disabled: false },
    { time: "19:20", disabled: false },
    { time: "19:30", disabled: false },
  ],
};
export const TimePicker: FC<Props> = ({ date, setOpen }) => {
  if (!date) return null;
  const [selectedTime, setSelectedTime] = useState(
    dateTime[date]?.find((el) => el.disabled === false)?.time || ""
  );

  return (
    <Flex vertical>
      <Flex gap={8} className={styles.container} wrap={"wrap-reverse"}>
        {dateTime[date]?.map((el) => (
          <Button
            type={selectedTime === el.time ? "primary" : "default"}
            key={el.time}
            disabled={el.disabled}
            onClick={() => setSelectedTime(el.time)}
          >
            {el.time}
          </Button>
        ))}
      </Flex>
      <Flex>
        <Button>{text.dateClient.ok}</Button>
        <Button onClick={() => setOpen(false)}>{text.dateClient.ok}</Button>
      </Flex>
    </Flex>
  );
};
