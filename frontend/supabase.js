import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dhzyuiommgqyiikmczbq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoenl1aW9tbWdxeWlpa21jemJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMTAzODIsImV4cCI6MjA1NTg4NjM4Mn0.dirsvJ714vZ3_ONwp29UBV3o-IDwE6xb7rphcrUA0_U';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
