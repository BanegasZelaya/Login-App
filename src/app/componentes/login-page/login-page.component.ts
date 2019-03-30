import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private autServices: AuthService,
    private router: Router,
    public flashMensaje: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmitLogin() {
    this.autServices
      .loginEmail(this.email, this.password)
      .then(res => {
        this.flashMensaje.show("Usuario logueado Coreectamente", {
          cssClss: "alert-success",
          timeout: 4000
        });
        //alert("Logueado correctamente");
        this.router.navigate(["/privado"]);
      })
      .catch(err => {
        this.flashMensaje.show(err.message, {
          cssClss: "alert-danger",
          timeout: 4000
        });
        //alert("Credenciales incorrectas, favor verifique sus datos");
        //console.log(err);
        this.router.navigate(["/login"]);
      });
  }
}
