import { Check } from "lucide-react";

export default function ContactLensMaterialsRecommdendTable() {
  return (
    <div className="overflow-x-auto w-5/6 mx-auto">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="text-[#7A6F5C]">
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Brand/Types</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Hydrogel</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">
              Silicone Hydrogel
            </th>
          </tr>
        </thead>
        <tbody className="text-[#7A6F5C]">
          <tr className="border-b border-[#e0dcd6]">
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              Johnson & Johnson
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">Alcon</td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              Cooper Vision
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              Bausch & Lomb
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
