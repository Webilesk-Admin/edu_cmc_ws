"use client";
import React from "react";
import { ConfigProvider, Table } from "antd";
import Image from "next/image";
import DownloadImage from "../../asset/cmc_dashboard_mycourse_download_icon.png";
import type { TableColumnsType, TableProps } from "antd";
import "./style.css";
import { record } from "zod";

interface DataType {
  key: React.Key;
  Date: string;
  TransactionID: string;
  ReceiptNo: string;
  Amount: number;
  Mode: string;
  Status: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Date",
    dataIndex: "Date",
  },
  {
    title: "Transaction ID",
    dataIndex: "TransactionID",
  },
  {
    title: " Receipt No",
    dataIndex: "ReceiptNo",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
  },
  {
    title: "Mode",
    dataIndex: "Mode",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render(text, record) {
      return {
        children: (
          <div
            style={{
              color:
                text == "Success"
                  ? "green"
                  : text == "Pending"
                  ? "blue"
                  : "red",
            }}
          >
            {text}
          </div>
        ),
      };
    },
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
    Date: "15/03/2024",
    TransactionID: "Order_SdfrgEtfdwkqui",
    ReceiptNo: "CMC/2024/RCPT/000037",
    Amount: 20000,
    Mode: "Online",
    Status: "Error",
  },
  {
    key: "1",
    Date: "15/03/2024",
    TransactionID: "Order_SdfrgEtfdwkqui",
    ReceiptNo: "CMC/2024/RCPT/000037",
    Amount: 20000,
    Mode: "Online",
    Status: "Success",
  },
  {
    key: "1",
    Date: "15/03/2024",
    TransactionID: "Order_SdfrgEtfdwkqui",
    ReceiptNo: "CMC/2024/RCPT/000037",
    Amount: 20000,
    Mode: "Online",
    Status: "Pending",
  },
  {
    key: "1",
    Date: "15/03/2024",
    TransactionID: "Order_SdfrgEtfdwkqui",
    ReceiptNo: "CMC/2024/RCPT/000037",
    Amount: 20000,
    Mode: "Online",
    Status: "Success",
  },
  {
    key: "1",
    Date: "15/03/2024",
    TransactionID: "Order_SdfrgEtfdwkqui",
    ReceiptNo: "CMC/2024/RCPT/000037",
    Amount: 20000,
    Mode: "Online",
    Status: "Error",
  },
  {
    key: "1",
    Date: "15/03/2024",
    TransactionID: "Order_SdfrgEtfdwkqui",
    ReceiptNo: "CMC/2024/RCPT/000037",
    Amount: 20000,
    Mode: "Online",
    Status: "Success",
  },
  {
    key: "1",
    Date: "15/03/2024",
    TransactionID: "Order_SdfrgEtfdwkqui",
    ReceiptNo: "CMC/2024/RCPT/000037",
    Amount: 20000,
    Mode: "Online",
    Status: "Success",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  // console.log("params", pagination, filters, sorter, extra);
};

const Page = ({ Page }) => (
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
        rowClassName={(record, index) =>
          record.Status == "1" ? "success" : "error"
        }
        onChange={onChange}
        pagination={{ pageSize: Page }}
      />
    </ConfigProvider>
  </div>
);

export default Page;
