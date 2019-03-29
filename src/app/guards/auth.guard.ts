import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { take, map, tap } from "rxjs/operators";

import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "../servicios/auth.service";

import { importType } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !!authState))
      .pipe(
        tap(autenticaded => {
          if (!autenticaded) {
            this.router.navigate(["/login"]);
          }
        })
      );
  }
}
