import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "../servicios/auth.service";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  public emailUsuario = "";
  public isLogin: boolean;
  formData: Employee;

  constructor(
    private firestore: AngularFirestore,
    private AuthService: AuthService
  ) {
    this.AuthService.getAuth().subscribe(auth => {
      if (auth) {
        this.emailUsuario = auth.email;
      }
    });
  }

  ngOnInit() {}

  getEmployees() {
    return this.firestore.collection(this.emailUsuario).snapshotChanges();
  }
}
