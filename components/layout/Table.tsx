import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: ()=> void;
};

export default function Table({ children }: Props) {
  return (
    <div className="overflow-y-auto rounded-md">
      <table className="min-w-full bg-white border-collapse rounded-md">{children}</table>
    </div>
  );
}

Table.Head = function TableHead({ children }: Props) {
  return (
    <thead className="text-[#64748B] bg-[#F1F5F9]">
      {children}
    </thead>
  );
};

Table.Row = function TableRow({ children,onClick }: Props) {
  return (
    <tr className="border-b border-[#00000014]" onClick={onClick}>
      {children}
    </tr>
  );
};

Table.Cell = function TableCell({ children }: Props) {
  return (
    <td className="px-4 py-2">
      {children}
    </td>
  );
};

Table.Th = function TableTh({ children }: Props) {
  return (
    <th className="text-left px-4 py-2 text-[#8B95A6]">
      {children}
    </th>
  );
};
