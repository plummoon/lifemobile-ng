/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './menu-detail.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
import * as import4 from '../../../src/app/menu-detail.component';
import * as import5 from '../../../src/app/menu.service';
import * as import6 from '@angular/router';
var styles_MenuDetailComponent = [import0.styles];
export var RenderType_MenuDetailComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_MenuDetailComponent,
    data: {}
});
function View_MenuDetailComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 28, 'div', [[
                'class',
                'clear'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ' details!'
        ])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 3, 'div', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['id: '])),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 11, 'div', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['name: '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'input', [[
                'placeholder',
                'name'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import1.ɵnov(v, 16)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 16).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import1.ɵnov(v, 16)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import1.ɵnov(v, 16)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.menu.name = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(8192, null, 0, import2.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef,
            [
                2,
                import2.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import1.ɵprd(512, null, import2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import2.DefaultValueAccessor]),
        import1.ɵdid(335872, null, 0, import2.NgModel, [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import2.NG_VALUE_ACCESSOR
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import1.ɵprd(1024, null, import2.NgControl, null, [import2.NgModel]),
        import1.ɵdid(8192, null, 0, import2.NgControlStatus, [import2.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.goBack() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['Back'])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['Save'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_9 = co.menu.name;
        ck(v, 18, 0, currVal_9);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.menu.name;
        ck(v, 3, 0, currVal_0);
        var currVal_1 = co.menu.id;
        ck(v, 8, 0, currVal_1);
        var currVal_2 = import1.ɵnov(v, 20).ngClassUntouched;
        var currVal_3 = import1.ɵnov(v, 20).ngClassTouched;
        var currVal_4 = import1.ɵnov(v, 20).ngClassPristine;
        var currVal_5 = import1.ɵnov(v, 20).ngClassDirty;
        var currVal_6 = import1.ɵnov(v, 20).ngClassValid;
        var currVal_7 = import1.ɵnov(v, 20).ngClassInvalid;
        var currVal_8 = import1.ɵnov(v, 20).ngClassPending;
        ck(v, 15, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
    });
}
export function View_MenuDetailComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_MenuDetailComponent_1)),
        import1.ɵdid(8192, null, 0, import3.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.menu;
        ck(v, 1, 0, currVal_0);
    }, null);
}
function View_MenuDetailComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'menu-detail', [], null, null, null, View_MenuDetailComponent_0, RenderType_MenuDetailComponent)),
        import1.ɵdid(57344, null, 0, import4.MenuDetailComponent, [
            import5.MenuService,
            import6.ActivatedRoute,
            import3.Location
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var MenuDetailComponentNgFactory = import1.ɵccf('menu-detail', import4.MenuDetailComponent, View_MenuDetailComponent_Host_0, { menu: 'menu' }, {}, []);
//# sourceMappingURL=menu-detail.component.ngfactory.js.map