import { Component } from '@angular/core';
import { LucideAngularModule, Clock, Calendar, LayoutPanelLeft } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly icons = {
    AllTasks: LayoutPanelLeft,
    Clock: Clock,
    Calendar: Calendar,
  }
}
