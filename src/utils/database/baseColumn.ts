import { PosixDate } from "../../time/posix-date";

export const baseColumns = {
  createdAt: new PosixDate(),
  updatedAt: new PosixDate(),
};
