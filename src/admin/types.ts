export interface Booking {
  id: number;
  userName: string;
  serviceName: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending" | "Completed";
  email: string;
  phone: string;
  serviceType: string;
  duration: string;
  price: string;
  paymentStatus: "Paid" | "Unpaid";
  paymentMethod: string;
  transactionId: string;
  notes: string;
}

export type SortColumn = keyof Booking;
export type SortDirection = "asc" | "desc";

export interface DateRange {
  start: string;
  end: string;
}
