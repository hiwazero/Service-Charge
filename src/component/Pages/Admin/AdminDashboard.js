import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

const AdminDashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartData = {
        labels: ["Admin", "Sales", "Client", "Treasury"],
        datasets: [
          {
            data: [130, 250, 320, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#EF4444"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "60%",
      };

      // Check if chart already exists and destroy it
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: chartData,
        options: chartOptions,
      });
    }
  }, []);

  return (
    <>
      <div className="p-4 sm:ml-64 h-screen">
        <div className="p-4 rounded-lg mt-14 h-[75%]">
          <canvas ref={chartRef}  />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
