import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://utarcsqsbazdziwjaqgz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0YXJjc3FzYmF6ZHppd2phcWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDQwMjQsImV4cCI6MjA3NTE4MDAyNH0.XdeCPerKEajE1o_q18Y8bYqR6QlSHQ--V2QiMyX7PjE'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
