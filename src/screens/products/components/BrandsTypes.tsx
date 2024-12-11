import { Check } from "lucide-react";

export default function BrandsTable() {
  return (
    <div className="overflow-x-auto w-4/5 mx-auto mt-6 shadow-lg rounded-lg">
      <table className="w-full border-collapse text-center bg-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#6B4F4F] text-white">
            <th className="px-6 py-4 border-r border-[#D4C7C7]">Types</th>
            <th className="px-6 py-4 border-r border-[#D4C7C7]">
              Single Vision
            </th>
            <th className="px-6 py-4 border-r border-[#D4C7C7]">Progressive</th>
            <th className="px-6 py-4">Bifocal</th>
          </tr>
        </thead>
        <tbody className="text-[#7A6F5C]">
          {[
            ["Carl Zeiss", true, true, true],
            ["Essilor", true, true, true],
            ["Rodenstock", true, true, false],
            ["Nikon", true, true, true],
            ["Nova", true, true, true],
            ["Vision Rx", true, true, true],
          ].map(([brand, singleVision, progressive, bifocal], index) => (
            <tr
              key={brand.toString()}
              className={`border-b border-[#EDEDED] ${String(
                index % 2 === 0 ? "bg-[#F9F9F9]" : "bg-white"
              )}`}
            >
              <td className="px-6 py-4 border-r border-[#D4C7C7]">{brand}</td>
              <td className="px-6 py-4 border-r border-[#D4C7C7]">
                {singleVision ? (
                  <Check className="mx-auto text-[#7A6F5C]" />
                ) : (
                  "✘"
                )}
              </td>
              <td className="px-6 py-4 border-r border-[#D4C7C7]">
                {progressive ? (
                  <Check className="mx-auto text-[#7A6F5C]" />
                ) : (
                  "✘"
                )}
              </td>
              <td className="px-6 py-4">
                {bifocal ? <Check className="mx-auto text-[#7A6F5C]" /> : "✘"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
