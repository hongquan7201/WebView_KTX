import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import eChart from "./configs/eChart";

const EChart = ({ data }) => {
    const { Title } = Typography;
    return (
        <>
            <div className="chart-vistior" style={{ marginTop: "-5px" }}>
                <Title level={5}>Biểu đồ tiền điện nước</Title>
            </div>
            <div id="chart" style={{ marginTop: "40px" }}>
                <ReactApexChart
                    className="bar-chart"
                    options={eChart.options}
                    series={data}
                    type="bar"
                    height={220}
                />
            </div>

        </>
    );
}

export default EChart;
