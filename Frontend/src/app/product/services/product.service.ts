import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '/api/products';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all products
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/all`);
  }

  /**
   * Fetch products by owner ID
   */
  getProductsByOwnerId(ownerId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/owner/${ownerId}`);
  }

  /**
   * Create a new product
   */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/create`, product);
  }
}
