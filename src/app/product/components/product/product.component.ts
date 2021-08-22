import { Component,
    Input,
    OnDestroy,
    Output,
    EventEmitter,
    OnInit, 
    DoCheck} 
    from '@angular/core';
import { Product } from '../../../product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['../product/product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();


    constructor() {
        console.log('constructor');
    }

  //  ngOnChanges(changes: SimpleChanges) {
  //      console.log('ngOnChanges');
  //      console.log(changes);
  //  }

    ngOnInit () {
        console.log('ngOnInit');
    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }
    
    ngOnDestroy(){
        console.log('ngOnDestroy');
    }

    addCart(){
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
    
}
