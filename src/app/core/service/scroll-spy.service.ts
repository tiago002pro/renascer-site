import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {

  private activeSection = new BehaviorSubject<string>('');
  activeSection$ = this.activeSection.asObservable();

  setActive(section: string) {
    this.activeSection.next(section);
  }
}