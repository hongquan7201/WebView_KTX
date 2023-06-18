const eChart = {
    series: [
        {
            name: "Tiêu thụ",
            data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 234, 454, 445],
            color: "#fff",
        },
    ],

    options: {
        chart: {
            type: "bar",
            width: "100%",
            height: "auto",

            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                borderRadius: 5,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["transparent"],
        },
        grid: {
            show: true,
            borderColor: "#ccc",
            strokeDashArray: 2,
        },
        xaxis: {
            categories: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ],
            labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: [
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                    ],
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: [
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                    ],
                },
            },
        },

        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "đ";
                },
            },
        },
    },
};

export default eChart;
