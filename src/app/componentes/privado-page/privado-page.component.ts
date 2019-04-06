import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";

@Component({
  selector: "app-privado-page",
  templateUrl: "./privado-page.component.html",
  styleUrls: ["./privado-page.component.scss"]
})
export class PrivadoPageComponent implements OnInit {
  constructor(
    private autService: AuthService,
    private router: Router,
    public flashMensaje: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmitAddUser() {
    /*    this.autService
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
  */
  }
}
