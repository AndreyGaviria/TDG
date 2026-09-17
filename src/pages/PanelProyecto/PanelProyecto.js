import React from "react";
import '../../styles/PanelProyecto.css';

const MENU_ITEMS = ["Inicio", "Proyectos", "Disponibilidad", "Proyectos"];

const ACTIONS = ["Nuevo Proyecto", "Asignar Tarea", "Asignar Equipo"];

export default function PanelProyecto() {
  return (
    <div className="panel-layout">
      {/* Header superior */}
      <header className="panel-header">
        <div className="panel-logo">
          <span className="panel-logo-circle">
            <span className="panel-logo-text">SETI</span>
          </span>
        </div>
        <div className="panel-avatar" />
      </header>

      <div className="panel-body">
        {/* Sidebar */}
        <nav className="panel-sidebar">
          {MENU_ITEMS.map((item, index) => (
            <button
              key={`${item}-${index}`}
              className="panel-sidebar-item"
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Contenido principal */}
        <main className="panel-content">
          <h1 className="panel-title">Panel de Gestión de Proyectos</h1>

          <div className="panel-grid">
            {/* Columna izquierda */}
            <section className="panel-card panel-card--proyectos">
              <h2 className="panel-card-title">Proyectos</h2>
              <div className="panel-card-body" />
            </section>

            {/* Columna derecha - acciones */}
            <section className="panel-card panel-card--acciones">
              <div className="panel-actions">
                {ACTIONS.map((action) => (
                  <button
                    key={action}
                    type="button"
                    className="panel-action-btn"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </section>

            <section className="panel-card panel-card--asignaciones">
              <h2 className="panel-card-title">Asignaciones</h2>
              <div className="panel-card-body" />
            </section>

            <section className="panel-card panel-card--horas">
              <h2 className="panel-card-title">Horas asignadas</h2>
              <div className="panel-card-body" />
            </section>

            <section className="panel-card panel-card--equipo">
              <h2 className="panel-card-title">Equipo</h2>
              <div className="panel-card-body" />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}