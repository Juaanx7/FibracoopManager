import React from "react";
import Card from "../components/Card";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__cards">
        <Card title="Clientes Activos" value="150" />
        <Card title="Servicios Activos" value="120" />
        <Card title="Pagos Pendientes" value="$5000" />
      </div>
    </main>
  );
};

export default Dashboard;