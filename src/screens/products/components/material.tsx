import { Check } from 'lucide-react';

export default function MaterialsRecommdendTable() {
  return (
    <div className="overflow-x-auto w-5/6 mx-auto">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-[#9D8189] text-white">
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Types/Materials</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Columbia Resin (CR 39)</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Polycarbonate</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Mitsui Resin (MR-8)</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Trivex</th>
            <th className="px-4 py-3 border-r border-[#e0dcd6]">Glass</th>
          </tr>
        </thead>
        <tbody className="text-[#9D8189]">
          <tr className="border-b border-[#e0dcd6]">
            <td className="px-4 py-3 border-r border-[#e0dcd6]">Spectacle Lens</td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#9D8189]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#9D8189]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#9D8189]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#9D8189]" />
            </td>
            <td className="px-4 py-3">
              <Check className="mx-auto text-[#9D8189]" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">Sunglass Lens</td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#9D8189]" />
            </td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">✘</td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">✘</td>
            <td className="px-4 py-3 border-r border-[#e0dcd6]">
              <Check className="mx-auto text-[#9D8189]" />
            </td>
            <td className="px-4 py-3">✘</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
