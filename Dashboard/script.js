let form = document.getElementById('form');
let janInput = document.getElementById('enero');
let febInput = document.getElementById('febrero');
let marInput = document.getElementById('marzo');
let abrInput = document.getElementById('abril');
let mayInput = document.getElementById('mayo');
let junInput = document.getElementById('junio');
let julInput = document.getElementById('julio');
let agoInput = document.getElementById('agosto');
let sepInput = document.getElementById('septiembre');
let octInput = document.getElementById('octubre');
let novInput = document.getElementById('noviembre');
let dicInput = document.getElementById('diciembre');

let salesSum = document.getElementById('sales_sum');
let subtotalSum = document.getElementById('subtotal_sum');
let ivaSum = document.getElementById('iva_sum');
let salesSum2 = document.getElementById('sales_sum2');

let salesChart;

createGraphs();

function createGraphs(){
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    if (salesChart) {
        salesChart.destroy();
    }

    salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
            datasets: [{
                label: 'Ventas ($)',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54,162,235,1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {y: { beginAtZero: true}}
        }
    })
};


form.addEventListener('input', (e) => {
    e.preventDefault()
    salesChart.data.datasets[0].data[0] = janInput.value;
    salesChart.data.datasets[0].data[1] = febInput.value;
    salesChart.data.datasets[0].data[2] = marInput.value;
    salesChart.data.datasets[0].data[3] = abrInput.value;
    salesChart.data.datasets[0].data[4] = mayInput.value;
    salesChart.data.datasets[0].data[5] = junInput.value;
    salesChart.data.datasets[0].data[6] = julInput.value;
    salesChart.data.datasets[0].data[7] = agoInput.value;
    salesChart.data.datasets[0].data[8] = sepInput.value;
    salesChart.data.datasets[0].data[9] = octInput.value;
    salesChart.data.datasets[0].data[10] = novInput.value;
    salesChart.data.datasets[0].data[11] = dicInput.value;
    salesChart.update();

    let total = Number(janInput.value) + Number(febInput.value) + Number(marInput.value) + Number(abrInput.value) + Number(mayInput.value) + Number(junInput.value) +
                Number(julInput.value) + Number(agoInput.value) + Number(sepInput.value) + Number(octInput.value) + Number(novInput.value) + Number(dicInput.value)
    
    salesSum.innerText = total.toLocaleString('en-US');

    let subtotal = total / 1.16;
    subtotalSum.innerText = subtotal.toLocaleString('en-US');

    let iva = subtotal * 0.16;
    ivaSum.innerText = iva.toLocaleString('en-US');

    let total2 = subtotal + iva;
    salesSum2.innerText = total2.toLocaleString('en-US');

});

