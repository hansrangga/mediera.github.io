$(document).ready(function() {
    // Initialize DataTables with a custom layout
    var table = $('#dataTable').DataTable({
        "dom": '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6"f>>' +
               '<"row"<"col-sm-12"tr>>' +
               '<"row"<"col-sm-12 col-md-5"i><"col-sm-12 col-md-7"p>>',
        // ... other options ...
    });

    // Create the select element for the custom filter
    var filterHTML = $(
        '<label class="ml-3">' +
        'Filter by time range: ' +
        '<select id="timeRangeFilter" class="form-control form-control-sm">' +
            '<option value="all">All time</option>' +
            '<option value="3months">Last 3 months</option>' +
            '<option value="1year">Last 1 year</option>' +
        '</select>' +
        '</label>'
    );

    // Insert the custom filter into the DataTables length wrapper
    $('#dataTable_length').append(filterHTML);

    // Custom filtering function for time range
    $.fn.dataTable.ext.search.push(
        function(settings, data, dataIndex) {
            var timeRange = $('#timeRangeFilter').val();
            var transDate = new Date(data[6]); // Use the index for the 'Transaksi' column

            var now = new Date();
            var threeMonthsAgo = new Date();
            threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
            var oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

            if (timeRange === "3months") {
                return transDate >= threeMonthsAgo && transDate <= now;
            } else if (timeRange === "1year") {
                return transDate >= oneYearAgo && transDate <= now;
            }
            return true; // If 'All time' is selected, return true for all rows
        }
    );

    // Event listener for the time range filter
    $('#timeRangeFilter').on('change', function() {
        table.draw();
    });
});
