import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  public isMobile: boolean = false

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  public getIsMobile() {
    return this.breakpointObserver.observe([Breakpoints.Handset]);
  }
  
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  // .pipe(
  //   map(result => result.matches),
  //   shareReplay()
  // )

}
