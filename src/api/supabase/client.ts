import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://vureqnpzafwrampfibhz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1cmVxbnB6YWZ3cmFtcGZpYmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcxMDgyMzAsImV4cCI6MTk2MjY4NDIzMH0.8kNv6pra_vePMCAcHUXorf7sDCtRKvh8_Kj4M4Hoywc'
)
