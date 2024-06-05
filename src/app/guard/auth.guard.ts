import { CanActivateFn } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const admin=inject(AdminService)
  const router = inject(Router)
  const toastr = inject(ToastrService)
  if (admin.isLoggedIn()) {
    return true;
  } else {
    toastr.warning("please Login First")
    router.navigateByUrl('')
    return false
  }
};
