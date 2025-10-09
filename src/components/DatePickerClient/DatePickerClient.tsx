import { DatePicker } from "antd";
import { useCallback, useState, type FC } from "react";
import { TimePicker } from "../TimePicker";

import dayjs, { Dayjs } from "dayjs";
// import styles from "./DataPickerClient.module.scss";
import "./DataPickerClient.css";

const availableDates = [
  "2025-10-08",
  "2025-10-09",
  "2025-10-11",
  "2025-10-13",
  "2025-10-15",
].map((date) => dayjs(date));

export const DatePickerClient: FC = () => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().startOf("day").format("YYYY-MM-DD")
  );
  const [open, setOpen] = useState(false);

  const disabledDate = useCallback(
    (current: dayjs.Dayjs) => {
      if (!current) return true;

      const today = dayjs().startOf("day");

      const isPastDate = current.isBefore(today, "day");

      const isAvailable = availableDates.some(
        (availableDate) =>
          availableDate.year() === current.year() &&
          availableDate.month() === current.month() &&
          availableDate.date() === current.date()
      );

      return isPastDate || !isAvailable;
    },
    [availableDates]
  );

  const onCalendarChange = useCallback(
    (data: Dayjs | Dayjs[] | null) => {
      if (Array.isArray(data)) {
        if (data[0] && data[0].isValid()) {
          setSelectedDate(data[0].format("YYYY-MM-DD"));
        } else {
          setSelectedDate("");
        }
      } else if (data && data.isValid()) {
        setSelectedDate(data.format("YYYY-MM-DD"));
      } else {
        setSelectedDate("");
      }
    },
    [setSelectedDate]
  );
  const handleOpenChange = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <DatePicker
      className="picker"
      open={open}
      onOpenChange={handleOpenChange}
      size="middle"
      placement="bottomRight"
      needConfirm
      disabledDate={disabledDate}
      value={selectedDate ? dayjs(selectedDate) : null}
      onCalendarChange={onCalendarChange}
      showNow={false}
      renderExtraFooter={() => <TimePicker setOpen={setOpen} date={selectedDate} />}
      inputReadOnly={true}
      onClick={() => setOpen(true)}
      getPopupContainer={(node) => node}
    />
  );
};
