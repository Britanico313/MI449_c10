
const supabaseUrl = 'https://zlldvwdafeytxvorhtqo.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbGR2d2RhZmV5dHh2b3JodHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MjY2MTUsImV4cCI6MjAyOTMwMjYxNX0.7So7AXX8oFNwtDIkob3QQjwrlWIX6loBqgIIWouj1JI'; 
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchData() {
    let { data, error } = await supabase
        .from('your_table_name') 
        .select('*');

    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

 
    displayData(data);
}

function displayData(data) {
    const container = document.getElementById('data');
    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = JSON.stringify(item); 
        container.appendChild(div);
    });
}


fetchData();

