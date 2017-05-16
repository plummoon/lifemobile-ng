/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './dashboard.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
import * as import4 from './menu-search.component.ngfactory';
import * as import5 from '../../../src/app/menu-search.service';
import * as import6 from '@angular/http';
import * as import7 from '../../../src/app/menu-search.component';
import * as import8 from '../../../src/app/dashboard.component';
import * as import9 from '../../../src/app/menu.service';
const styles_DashboardComponent:any[] = [import0.styles];
export const RenderType_DashboardComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_DashboardComponent,
  data: {}
}
);
function View_DashboardComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),9,'a',[[
        'class',
        'col-1-4'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,1).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(335872,(null as any),0,import2.RouterLinkWithHref,[
      import2.Router,
      import2.ActivatedRoute,
      import3.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵpad(2),
    (l()(),import1.ɵted((null as any),['\n        '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'module menu'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,2,0,'/detail',v.context.$implicit.id);
    ck(v,1,0,currVal_2);
  },(ck,v) => {
    const currVal_0:any = import1.ɵnov(v,1).target;
    const currVal_1:any = import1.ɵnov(v,1).href;
    ck(v,0,0,currVal_0,currVal_1);
    const currVal_3:any = v.context.$implicit.name;
    ck(v,7,0,currVal_3);
  });
}
export function View_DashboardComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Top Menus'])),
    (l()(),import1.ɵted((null as any),['\n'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'grid grid-pad'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DashboardComponent_1)),
    import1.ɵdid(401408,(null as any),0,import3.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'menu-search',([] as any[]),(null as any),(null as any),(null as any),import4.View_MenuSearchComponent_0,import4.RenderType_MenuSearchComponent)),
    import1.ɵprd(256,(null as any),import5.MenuSearchService,import5.MenuSearchService,[import6.Http]),
    import1.ɵdid(57344,(null as any),0,import7.MenuSearchComponent,[
      import5.MenuSearchService,
      import2.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    var co:import8.DashboardComponent = v.component;
    const currVal_0:any = co.menus;
    ck(v,6,0,currVal_0);
    ck(v,11,0);
  },(null as any));
}
function View_DashboardComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'my-dashboard',([] as any[]),(null as any),(null as any),(null as any),View_DashboardComponent_0,RenderType_DashboardComponent)),
    import1.ɵdid(57344,(null as any),0,import8.DashboardComponent,[import9.MenuService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const DashboardComponentNgFactory:import1.ComponentFactory<import8.DashboardComponent> = import1.ɵccf('my-dashboard',import8.DashboardComponent,View_DashboardComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovd29yay9wcmovY29kZS93ZWIvbGlmZWRlZmVuZGVyL2xpZmVkZWZlbmRlci1tb2JpbGUvbW9iaWxlL3NyYy9hcHAvZGFzaGJvYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi93b3JrL3Byai9jb2RlL3dlYi9saWZlZGVmZW5kZXIvbGlmZWRlZmVuZGVyLW1vYmlsZS9tb2JpbGUvc3JjL2FwcC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovd29yay9wcmovY29kZS93ZWIvbGlmZWRlZmVuZGVyL2xpZmVkZWZlbmRlci1tb2JpbGUvbW9iaWxlL3NyYy9hcHAvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovd29yay9wcmovY29kZS93ZWIvbGlmZWRlZmVuZGVyL2xpZmVkZWZlbmRlci1tb2JpbGUvbW9iaWxlL3NyYy9hcHAvZGFzaGJvYXJkLmNvbXBvbmVudC50cy5EYXNoYm9hcmRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDM+VG9wIE1lbnVzPC9oMz5cbjxkaXYgY2xhc3M9XCJncmlkIGdyaWQtcGFkXCI+XG4gICAgPGEgKm5nRm9yPVwibGV0IG1lbnUgb2YgbWVudXNcIiBbcm91dGVyTGlua109XCJbJy9kZXRhaWwnLCBtZW51LmlkXVwiIGNsYXNzPVwiY29sLTEtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kdWxlIG1lbnVcIj5cbiAgICAgICAgICAgIDxoND57e21lbnUubmFtZX19PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9hPlxuPC9kaXY+XG48bWVudS1zZWFyY2g+PC9tZW51LXNlYXJjaD4iLCI8bXktZGFzaGJvYXJkPjwvbXktZGFzaGJvYXJkPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0VJO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQThCO0lBQW9EO01BQzlFO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUI7SUFDckI7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQWtCO0lBQ3BCOzs7SUFIb0I7SUFBOUIsU0FBOEIsU0FBOUI7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7SUFFWTtJQUFBOzs7OztJQUpoQjtJQUFJO0lBQWM7TUFDbEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQjtJQUN2QjtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUlJO0lBQ0Y7SUFDTjtnQkFBQTtnQkFBQTs7O0lBQUE7S0FBQTs7OztJQU5PO0lBQUgsU0FBRyxTQUFIO0lBTUo7Ozs7O0lDUkE7Z0JBQUE7OztJQUFBOzs7In0=