import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HttpClientModule, FormsModule, EmpleadosComponent],
})

export class AppComponent {
  title = 'frontend';
}
//debido a un error hago una modificación y dejo aquí comentado el código original
//@Component({
//  selector: 'app-root',
//  standalone: true,
//  imports: [RouterOutlet],
//  templateUrl: './app.component.html',
//  styleUrl: './app.component.css'
//})