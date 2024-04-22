import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zlldvwdafeytxvorhtqo.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbGR2d2RhZmV5dHh2b3JodHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MjY2MTUsImV4cCI6MjAyOTMwMjYxNX0.7So7AXX8oFNwtDIkob3QQjwrlWIX6loBqgIIWouj1JI'; 

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
