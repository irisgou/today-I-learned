import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://atywukawuiaanidntazu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0eXd1a2F3dWlhYW5pZG50YXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMTMwMjAsImV4cCI6MjAzNzg4OTAyMH0.tc2p4GbYv7UxmO3J-aryIu7X7FhpwATpLastuP9QWiw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
