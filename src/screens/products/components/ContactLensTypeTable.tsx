import { Check } from "lucide-react";

export default function ContactLensTypeTable() {
  return (
    <div className="overflow-x-auto w-5/6 mx-auto">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className=" text-[#7A6F5C]">
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Types</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">
              Single Vision
            </th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Multifocal</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Bifocal</th>
          </tr>
        </thead>
        <tbody className="text-[#7A6F5C]">
          <tr className="border-b border-[#e0dcd6]">
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              Contact Lens
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
