import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qa-interview-app';
  editorConfig = {
    minHeight: 5,
    placeholder: "Start typing your message",
    toolbar: [
      ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
    ],
  }
}
