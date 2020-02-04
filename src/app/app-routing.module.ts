import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "product-list",
    component: ProductListComponent,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "/product-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
