import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Rutas dinámicas (que tienen :id, :idPropiedad, etc.) -> RenderMode.Server
  {
    path: 'ingresar-costos/:idPropiedad',
    renderMode: RenderMode.Server
  },
  {
    path: 'creditoMiVivienda/nuevo/:idPrecioCorrespondiente',
    renderMode: RenderMode.Server
  },
  {
    path: 'credito/:idCredito/detalle',
    renderMode: RenderMode.Server
  },
  {
    path: 'admin/propiedades/editar/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'reportes/resumenfinancierousuario/:id',
    renderMode: RenderMode.Server
  },

  {
    path: '**',
    renderMode: RenderMode.Server 
  }
];