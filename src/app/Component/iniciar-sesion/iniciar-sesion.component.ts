import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Windows } from 'ng-bootstrap-icons/icons';
import { LoginUsuario } from 'src/app/Modelos/login-usuario';
import { AuthService } from 'src/app/Service/auth.service';
import { StoreService } from 'src/app/Service/store.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario: string = '';
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  email!: string;

  form: FormGroup;
  constructor(private tokenService: TokenService, private authService: AuthService, private storeService: StoreService, private FormBuilder: FormBuilder, private ruta: Router) {

    this.form = this.FormBuilder.group({
      User: ['', [Validators.required, Validators.minLength(4)]],
      Password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.storeService.setHeaderActive(false);
    }
  }

  onEnviar(event: Event) {

    event.preventDefault;
    if (this.form.valid) {

      this.loginUsuario = new LoginUsuario(this.User?.value, this.Password?.value);
      this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.storeService.setHeaderActive(true);
        this.ruta.navigate(['/Secciones', 'Portfolio'])

      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);

      })

    } else {
      this.form.markAllAsTouched();
    }

  }

  
  Volver(event:Event){
    event.preventDefault;
  this.ruta.navigate(['/Secciones', 'Portfolio']);
}



  get User() {
    return this.form.get('User');
  }
  get Password() {
    return this.form.get('Password');
  }


}

