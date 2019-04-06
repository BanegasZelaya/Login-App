import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/shared/employee.service";
import { AuthService } from "src/app/servicios/auth.service";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { formatDate } from "@angular/common";
import { format } from "path";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  hoy: number = Date.now();
  public emailUsuario: string;

  constructor(
    private service: EmployeeService,
    private firestore: AngularFirestore,
    private AuthService: AuthService
  ) {}

  ngOnInit() {
    this.resetForm();
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
      fecha: ""
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;

    this.firestore.collection("employees").add(data);
    this.resetForm(form);
  }
}
