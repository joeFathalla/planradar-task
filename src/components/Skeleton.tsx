import React from "react";

const SkeletonRow: React.FC = () => (
  <tr className="animate-pulse bg-gray-100">
    <td className="p-2">
      <div className="h-4 bg-gray-300 rounded-md"></div>
    </td>
    <td className="p-2">
      <div className="h-4 bg-gray-300 rounded-md"></div>
    </td>
    <td className="p-2">
      <div className="h-4 bg-gray-300 rounded-md"></div>
    </td>
    <td className="p-2">
      <div className="h-4 bg-gray-300 rounded-md"></div>
    </td>
    <td className="p-2">
      <div className="h-4 bg-gray-300 rounded-md"></div>
    </td>
  </tr>
);

export default SkeletonRow;
