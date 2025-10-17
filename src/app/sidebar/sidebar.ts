import { Component, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  categories: string[] = ['All', 'Groceries', 'College', 'Payments'];
  selectedCategory = 'All';

  categorySelected = output<string>();

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
