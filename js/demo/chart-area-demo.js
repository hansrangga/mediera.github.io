Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];
var dataPendapatan = [12000, 15000, 18000, 20000, 22000, 124000];
var dataPengeluaran = [7000, 8000, 7500, 9000, 8500, 9500];
var jumlahPasien = [50, 60, 70, 80, 90, 100];
var umur = [30, 32, 28, 31, 29, 33];
var rataRataUmur = [30, 32, 28, 31, 29, 33];
var rataRataKunjungan = [200, 180, 220, 210, 230, 240];
var jumlahLayanan = 5;
var kepuasanPasien = [80, 85, 75, 90, 88, 92];
var jumlahTenagaKerja = 10;
var jumlahRujukan = [20, 25, 22, 28, 26, 30];
var waktuJamKerja = [8, 8, 8, 8, 8, 8]; // Assuming a constant value
var waktuSibuk = [2, 3, 2.5, 3, 3.5, 4]; // Example: peak hours per day

function formatRupiah(value) {
  return 'Rp ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function createChart(chartId, chartType, chartData, chartOptions) {
    var canvas = document.getElementById(chartId);
    if (canvas) { // Cek jika elemen canvas ada
      var ctx = canvas.getContext('2d');
      return new Chart(ctx, {
          type: chartType,
          data: chartData,
          options: chartOptions
      });
    }
}

var defaultChartOptions = {
    layout: {
        padding: {
            left: 10
        }
    },
    tooltips: {},
    scales: {
        yAxes: [{
            ticks: {}
        }]
    }
};


var chartOptions = {
    layout: {
        padding: {
            left: 10
        }
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem) {
                return formatRupiah(tooltipItem.yLabel);
            }
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                callback: function(value) {
                    return formatRupiah(value);
                }
            }
        }]
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Grafik Total Pendapatan per Bulan
    createChart('totalRevenueChart', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Total Pendapatan',
            data: dataPendapatan,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }, chartOptions);

    // Grafik Total Pengeluaran per Bulan
    createChart('expensesChart', 'line', {
        labels: bulan,
        datasets: [{
            label: 'Pengeluaran',
            data: dataPengeluaran,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }, chartOptions);

    // Grafik Pendapatan Kotor
    createChart('grossIncomeChart', 'line', {
        labels: bulan,
        datasets: [{
            label: 'Pendapatan Kotor',
            data: dataPendapatan,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }, chartOptions);

    // Grafik Pendapatan Bersih
    createChart('netIncomeChart', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Pendapatan Bersih',
            data: dataPendapatan,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }, chartOptions);

    createChart('totalPatient', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Jumlah Pasien',
            data: jumlahPasien,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('averageAgePatient', 'doughnut', {
        labels: [
            'Anak-anak',
            'Remaja',
            'Dewasa',
            'Lansia'
          ],
        datasets: [{
            label: 'Rata-rata Umur Pasien',
            data: rataRataUmur,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('averageVisitPatient', 'doughnut', {
        labels: bulan,
        datasets: [{
            label: 'Rata-rata Kunjungan Pasien',
            data: rataRataKunjungan,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('totalService', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Jumlah Layanan',
            data: Array(bulan.length).fill(jumlahLayanan),
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('patientSatisfaction', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Kepuasan Pasien',
            data: kepuasanPasien,
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('totalWorker', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Jumlah Tenaga Kerja',
            data: Array(bulan.length).fill(jumlahTenagaKerja),
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('totalReferral', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Jumlah Rujukan',
            data: jumlahRujukan,
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('totalWorktime', 'bar', {
        labels: bulan,
        datasets: [{
            label: 'Jumlah Jam Kerja',
            data: waktuJamKerja,
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    }, defaultChartOptions);

    createChart('busyHours', 'doughnut', {
        labels: bulan,
        datasets: [{
            label: 'Waktu Ramai Kunjungan',
            data: waktuSibuk,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }, defaultChartOptions);
});