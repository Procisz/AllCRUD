import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  oneProduct: Product = new Product();
  selectedProductId: number;

  constructor(
    private productsService: ProductService,
    private router: Router,
  ) {

    this.selectedProductId = parseInt(this.router.url.split('/')[3]);

    this.productsService.getAll().subscribe(products => {
      this.oneProduct = products.filter(c => c.id === this.selectedProductId)[0];
    });

  }

  ngOnInit() {
  }

  onUpdate($event: Event) {
    $event.preventDefault();
    this.productsService.update(this.oneProduct).forEach(() => this.router.navigateByUrl('/products'));
  }

  onCancel() {
    this.router.navigateByUrl('/products');
  }

}
