import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl ?? "https://ujmfiirhflbxfzjukzyx.supabase.co";
const supabaseAnonKey = Constants.expoConfig?.extra?.supabaseAnonKey ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqbWZpaXJoZmxieGZ6anVrenl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNzc1OTEsImV4cCI6MjA3Mjc1MzU5MX0.b7mdAgP9qKYIPYw4fgdKfsTIzRy32Y9tvE5OZRrHksE";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
});

export default supabase;
