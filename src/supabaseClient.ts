import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://ncchhsrqaiffgnzqbekl.supabase.co";
const supabaseAnonKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jY2hoc3JxYWlmZmduenFiZWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4Njg1MzcsImV4cCI6MjA0ODQ0NDUzN30.mpD2Nwu5F5nf0d6cBoQ68D9tmBu-9nek7jfgdWd4qv0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
