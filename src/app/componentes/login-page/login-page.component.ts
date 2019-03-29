import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private autServices: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmitLogin() {
    this.autServices
      .loginEmail(this.email, this.password)
      .then(res => {
        alert("Logueado correctamente");
        this.router.navigate(["/privado"]);
      })
      .catch(err => {
        alert("Credenciales incorrectas, favor veifique");
        //console.log(err);
        this.router.navigate(["/login"]);
      });
  }
}
