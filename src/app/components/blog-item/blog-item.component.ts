import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/Types/interfaces';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent {
  @Input() blog: Blog = { id: 0, userId: 0, title: '', body: '' };

  constructor() {}
}
