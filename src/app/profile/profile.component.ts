import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profilePicture: string = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  editProfile: any = false
  adminProfile: any = {}
  constructor(private admin: AdminService, private toastr: ToastrService) { }
  onEdit() {
    this.editProfile = !this.editProfile
  }
  ngOnInit() {
    this.admin.getAdmin().subscribe({
      next: (res: any) => {
        this.getData(res)
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }
  getData(data: any) {
    this.adminProfile = data
    console.log(this.adminProfile);
    if (this.adminProfile.profile) {
      this.profilePicture = this.adminProfile.profile
    }
  }
  getFile(e: any) {
    let file = e.target.files[0]
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (event: any) => {
      console.log(event.target.result);
      this.profilePicture = event.target.result
      this.adminProfile.profile = event.target.result

    }
  }
  onUpdate() {
    console.log(this.adminProfile);
    this.admin.updateAdmin(this.adminProfile).subscribe({

      next: (res: any) => {
        this.toastr.success("employee Updated Successfully")
        this.ngOnInit()
        this.onEdit()
      },
      error: (err: any) => {
        this.toastr.error("admin Details updation failed")
      }
    })
  }
}