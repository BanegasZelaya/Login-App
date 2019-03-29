import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private autService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmitAddUser() {
    this.autService
      .registerUser(this.email, this.password)
      .then(res => {
        console.log("Usuario Creado correctamente");
        alert("Usuario Creado correctamente");
        this.router.navigate(["/privado"]);
      })
      .catch(err => {
        alert("No registro el usuario correctamente");
        console.log(err);
      });
  }
}
