"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Edit,
  Trash,
  X,
  Check,
} from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Booking, SortColumn, SortDirection, DateRange } from "./types";

// Mock data for bookings (type assertion added)
const bookings: Booking[] = [
  {
    id: 1,
    userName: "John Doe",
    serviceName: "Haircut",
    date: "2023-05-15",
    time: "14:00",
    status: "Confirmed",
    email: "john@example.com",
    phone: "123-456-7890",
    serviceType: "Hair",
    duration: "30 min",
    price: "$30",
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    transactionId: "TX123456",
    notes: "Please use hypoallergenic products.",
  },
];

const BookingsPage: React.FC = () => {
  const [sortColumn, setSortColumn] = useState<SortColumn>("id");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>({ start: "", end: "" });
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSort = (column: SortColumn) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = Object.values(booking).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesStatus = statusFilter ? booking.status === statusFilter : true;
    const matchesDateRange =
      dateRange.start && dateRange.end
        ? booking.date >= dateRange.start && booking.date <= dateRange.end
        : true;
    return matchesSearch && matchesStatus && matchesDateRange;
  });

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const openModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setIsModalOpen(false);
  };

  const handleAction = (action: string, bookingId: number) => {
    // Here you would typically make an API call to perform the action
    console.log(`${action} booking ${bookingId}`);
    // Then update the local state or refetch the data
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bookings</h2>

      {/* Search and Filter */}
      <div className="mb-4 flex flex-wrap justify-between items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search bookings..."
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <select
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <input
            type="date"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange({ ...dateRange, start: e.target.value })
            }
          />
          <input
            type="date"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange({ ...dateRange, end: e.target.value })
            }
          />
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Booking ID",
                "User Name",
                "Service Name",
                "Date & Time",
                "Status",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() =>
                    handleSort(
                      header.toLowerCase().replace(" ", "") as SortColumn
                    )
                  }
                >
                  <div className="flex items-center">
                    {header}
                    {sortColumn === header.toLowerCase().replace(" ", "") &&
                      (sortDirection === "asc" ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedBookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => openModal(booking)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.userName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.serviceName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.date} {booking.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("edit", booking.id);
                    }}
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("cancel", booking.id);
                    }}
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Details Modal */}
      <Transition.Root show={isModalOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Booking Details
                  </Dialog.Title>
                  <div className="mt-2">
                    {selectedBooking && (
                      <div>
                        <p className="text-sm text-gray-500">
                          <strong>User:</strong> {selectedBooking.userName}
                          <br />
                          <strong>Email:</strong> {selectedBooking.email}
                          <br />
                          <strong>Phone:</strong> {selectedBooking.phone}
                          <br />
                          <strong>Service:</strong>{" "}
                          {selectedBooking.serviceName}
                          <br />
                          <strong>Type:</strong> {selectedBooking.serviceType}
                          <br />
                          <strong>Duration:</strong> {selectedBooking.duration}
                          <br />
                          <strong>Price:</strong> {selectedBooking.price}
                          <br />
                          <strong>Date & Time:</strong> {selectedBooking.date}{" "}
                          {selectedBooking.time}
                          <br />
                          <strong>Status:</strong> {selectedBooking.status}
                          <br />
                          <strong>Payment Status:</strong>{" "}
                          {selectedBooking.paymentStatus}
                          <br />
                          <strong>Payment Method:</strong>{" "}
                          {selectedBooking.paymentMethod}
                          <br />
                          <strong>Transaction ID:</strong>{" "}
                          {selectedBooking.transactionId}
                          <br />
                          <strong>Notes:</strong> {selectedBooking.notes}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    {selectedBooking &&
                      selectedBooking.status === "Pending" && (
                        <>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-2"
                            onClick={() =>
                              handleAction("approve", selectedBooking.id)
                            }
                          >
                            <Check size={18} className="mr-2" />
                            Approve
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                            onClick={() =>
                              handleAction("reject", selectedBooking.id)
                            }
                          >
                            <X size={18} className="mr-2" />
                            Reject
                          </button>
                        </>
                      )}
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default BookingsPage;
