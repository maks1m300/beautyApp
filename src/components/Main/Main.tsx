import { type FC } from "react";
import { DatePicker, Flex, Typography } from "antd";
import { DropdownList } from "react-widgets/cjs";
import dayjs from "dayjs";

export const Main: FC = () => {
  const availableDates = [
    "2025-10-15",
    "2025-10-18",
    "2025-10-22",
    "2025-10-25",
    "2025-10-29",
  ].map((date) => dayjs(date));

  const disabledDate = (current: dayjs.Dayjs) => {
    if (!current) return true;

    return !availableDates.some(
      (availableDate) =>
        availableDate.year() === current.year() &&
        availableDate.month() === current.month() &&
        availableDate.date() === current.date()
    );
  };

  return (
    <Flex vertical>
      <Typography.Text>Выберите дату для записи</Typography.Text>
      <Flex>
        <DatePicker disabledDate={disabledDate} />
        <DropdownList data={[12, 15, 17]} />
      </Flex>
    </Flex>
  );
};
