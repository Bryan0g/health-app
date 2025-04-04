import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL ="https://agqyslifloyncagkifxy.supabase.co";
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFncXlzbGlmbG95bmNhZ2tpZnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIxODgsImV4cCI6MjA1OTEzODE4OH0.GBk83mrBHCAMHJeg74L-3C9Ftlsqn6zlS_c6kiEWzdY";

export const supabase= createClient(SUPABASE_URL,SUPABASE_ANON_KEY);