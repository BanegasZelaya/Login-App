import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    private autService: AuthService,
    private router: Router,
    public flashMensaje: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmitAddUser() {
    this.autService
      .registerUser(this.email, this.password)
      .then(res => {
        this.flashMensaje.show("Usuario Creado Coreectamente", {
          cssClss: "alert-success",
          timeout: 4000
        });
        //console.log("Usuario Creado correctamente");
        //alert("Usuario Creado correctamente");
        this.router.navigate(["/privado"]);
      })
      .catch(err => {
        this.flashMensaje.show(err.message, {
          cssClss: "alert-danger",
          timeout: 4000
        });
        //alert("No registro el usuario correctamente");
        //console.log(err);
      });
  }
}
