import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private metaService: Meta, private http: HttpClient) { }
  ngOnInit(): void {

  }

  onSubmit() {

  }

  onChange(event: Event) {
    const target = event.target! as HTMLInputElement
    const files = target.files
    if (files) {
      console.log(files[0]);
      const formData = new FormData();

      formData.append("file", files[0]);
      formData.append("upload_preset", "testing");
      formData.append("cloud_name", "joendambuki16");

      this.http.post<{url: string}>("https://api.cloudinary.com/v1_1/joendambuki16/image/upload", formData)
        .subscribe(
          (data) => {
            console.log(data.url)
          },
          error => {
            console.log({ error });

          }
        )
    }
  }

}
