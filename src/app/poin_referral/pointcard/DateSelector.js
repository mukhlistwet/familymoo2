// components/DateSelect.js
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa"; // Import ikon dari react-icons

const DateSelect = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex items-center border p-2 rounded-md">
      {/* Ikon kalender */}
      <FaCalendarAlt className="text-gray-500 mr-2" />

      {/* Date Picker */}
      <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="yyyy/MM/dd" placeholderText="Select a date" className="outline-none" />
    </div>
  );
};

export default DateSelect;
