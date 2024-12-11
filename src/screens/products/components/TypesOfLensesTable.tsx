import { Check } from "lucide-react";

export default function MaterialsTable() {
  return (
    <div className="overflow-x-auto w-5/6 mx-auto my-8">
      <table className="w-full border-collapse text-center shadow-md rounded-lg overflow-hidden">
        {/* Table Header */}
        <thead>
          <tr className=" text-white">
            <th className="text-[#7A6F5C] px-6 py-4 border-r border-white/50 text-lg font-semibold">
              Types
            </th>
            <th className=" text-[#7A6F5C] px-6 py-4 border-r border-white/50 text-lg font-semibold">
              Single Vision
            </th>
            <th className="text-[#7A6F5C] px-6 py-4 border-r border-white/50 text-lg font-semibold">
              Progressive
            </th>
            <th className="text-[#7A6F5C] px-6 py-4 text-lg font-semibold">
              Bifocal
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="text-[#7A6F5C] bg-[#f5f0ea]">
          <tr className="border-b border-[#e0dcd6] hover:bg-[#f0e4e4] transition-colors">
            <td className="px-6 py-4 border-r border-[#e0dcd6] text-[#7A6F5C] font-medium">
              Spectacle Lens
            </td>
            <td className="px-6 py-4 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-6 py-4 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-6 py-4">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
          </tr>
          <tr className="hover:bg-[#f0e4e4] transition-colors">
            <td className="px-6 py-4 border-r border-[#e0dcd6] text-[#7A6F5C] font-medium">
              Sunglass Lens
            </td>
            <td className="px-6 py-4 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-6 py-4 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-6 py-4">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
