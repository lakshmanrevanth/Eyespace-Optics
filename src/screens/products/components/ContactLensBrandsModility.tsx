import { Check } from "lucide-react";

export default function ContactLensBrandModilityTable() {
  return (
    <div className="overflow-x-auto w-4/5 mx-auto">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className=" text-[#7A6F5C]">
            <th className="px-4 py-3 border-r border-[#e0dcd6]">
              Types/Materials
            </th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">
              Daily Disposable
            </th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Fortnightly</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Monthly</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Quarterly</th>
            <th className="px-4 py-3">Yearly</th>
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
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3">✘</td>
            <td className="px-4 py-3">✘</td>
          </tr>
          <tr className="border-b border-[#e0dcd6]">
            <td className="px-4 py-3 border-r border-[#e0dcd6]">Alcon</td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3">✘</td>
            <td className="px-4 py-3">✘</td>
          </tr>
          <tr className="border-b border-[#e0dcd6]">
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              Cooper Vision
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3">✘</td>
          </tr>
          <tr className="border-b border-[#e0dcd6]">
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              Bausch & Lomb
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#7A6F5C]" />
            </td>
            <td className="px-4 py-3">✘</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
