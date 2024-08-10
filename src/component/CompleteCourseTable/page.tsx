"use client";

import React from "react";
import { ConfigProvider, Table } from "antd";
import Image from "next/image";
import DownloadImage from "../../asset/cmc_dashboard_mycourse_download_icon.png";
import type { TableColumnsType, TableProps } from "antd";
import "./style.css";

interface DataType {
  key: React.Key;
  Sno: number;
  CName: string;
  Date: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Sno",
    dataIndex: "Sno",
  },
  {
    title: "Course Name",
    dataIndex: "CName",
  },
  {
    title: "Date",
    dataIndex: "Date",
  },
  {
    title: "Receipt",
    dataIndex: "Receipt",
    render: () => (
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Image
          src={DownloadImage}
          alt="Download Receipt"
          width={24}
          height={24}
          style={{ marginRight: 8 }}
        />
        <p className="text-[16px] font-[400] text-[#F9AB70]">Download</p>
      </div>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    Sno: 1,
    CName: "VERTICAL INTEGRATION COURSE FOR TRAINERS (VICT) (EARLIER TOTA)",
    Date: "15/03/2024",
  },
  {
    key: "2",
    Sno: 2,
    CName: "VERTICAL INTEGRATION COURSE FOR TRAINERS (VICT) (EARLIER TOTA)",
    Date: "19/08/2024",
  },
  {
    key: "3",
    Sno: 3,
    CName: "VERTICAL INTEGRATION COURSE FOR TRAINERS (VICT) (EARLIER TOTA)",
    Date: "15/03/2024",
  },
  {
    key: "4",
    Sno: 4,
    CName: "VERTICAL INTEGRATION COURSE FOR TRAINERS (VICT) (EARLIER TOTA)",
    Date: "25/03/2024",
  },
  {
    key: "5",
    Sno: 5,
    CName: "VERTICAL INTEGRATION COURSE FOR TRAINERS (VICT) (EARLIER TOTA)",
    Date: "18/03/2024",
  },
  {
    key: "6",
    Sno: 6,
    CName: "VERTICAL INTEGRATION COURSE FOR TRAINERS (VICT) (EARLIER TOTA)",
    Date: "21/03/2024",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  // Optionally handle table changes
};

interface PageProps {
  Page: number; // Define the type of the Page prop here
}

const Page: React.FC<PageProps> = ({ Page }) => (
  <div className="w-[100%] bg-transparent">
    <ConfigProvider
      theme={{
        components: {
          Table: {
            cellFontSize: 12,
            headerBg: "#fff",
          },
        },
      }}
    >
      <Table
        className="max-w-[100%]"
        columns={columns}
        dataSource={data}
        rowClassName="tableCell"
        onChange={onChange}
        pagination={{ pageSize: Page }}
      />
    </ConfigProvider>
  </div>
);

export default Page;
