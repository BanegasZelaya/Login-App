import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { AuthService } from "src/app/servicios/auth.service";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { formatDate } from "@angular/common";

import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  hoy: number = Date.now();
  public emailUsuario: string;

  constructor(
    private AuthService: AuthService,
    private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();

    this.correoAgain();
  }

  correoAgain() {
    this.AuthService.getAuth().subscribe(auth => {
      if (auth) {
        this.emailUsuario = auth.email;
      }
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      correo: "",
      numero: null,
      cantidad: null,
      numeroR: null,
      cantidadR: null,
      fecha: null
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;

    this.firestore.collection(this.emailUsuario).add(data);
    (this.service.formData.numero = null), focus();
    this.service.formData.numeroR = null;
    this.service.formData.cantidad = null;
    this.service.formData.cantidadR = null;
    this.service.formData.fecha = null;
    this.hoy = Date.now();

    this.toastr.success("Agregado correctamente", "Registro de ticket");
  }
}
