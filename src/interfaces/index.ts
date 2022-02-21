import { ReactNode } from "react";

export type Todo = {
  id: number;
  title: string;
  checked: boolean;
  note: string;
  deadline: Date;
  status: string;
};

export type Pages = {
  title: string;
  href: string;
  render: ReactNode;
};

export enum status {
  NOT_YET = "not yet",
  PROCESS = "process",
  DONE = "done",
}
