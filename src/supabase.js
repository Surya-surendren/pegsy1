import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dtcukquidftgjtgzoibt.supabase.co";
const supabaseAnonKey = "sb_publishable_5QaRg4hDHoQSbLZz2BgZWw_xXomSCCH";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
