
const supabaseUrl = 'https://zlldvwdafeytxvorhtqo.supabase.co'; 
const supabaseKey = 'YOUR_SUPABASE_KEY'; 
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

