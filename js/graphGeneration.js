var Google_loaded = false;
function generateGraph(result) {
    if (Google_loaded) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Key words');
        data.addColumn('number', 'Times of appearances');
        //convert object to data
        for (var key in result) {
            var row = [];
            row.push(key);
            row.push(result[key]);
            data.addRow(row);
        }


        var options = {
            animation: { "startup": true, duration: 1500, easing: 'out' },
            legend: { position: "none" },
            vAxis: {
                //cannot have lower than 0 counts
                viewWindow: { min: 0 }
            },
            hAxis: {
                //slant text to fill in more keywords
                slantedText: true,
                //show every keyword
                showTextEvery: 1
            },
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div'));
        chart.draw(data, options);
        document.getElementById('leftRow').addEventListener('webkitTransitionEnd', function() {
            chart.draw(data, options);
        }, false);
        document.getElementById('leftRow').addEventListener('transitionend', function() {
            chart.draw(data, options);
        }, false);
    }
}
