import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None,
  
})
export class HomePageComponent {
  foodToggle = true;
  drinkToggle = true;
  glampingImageUrl = 'assets/glamping.jpg';
  cardsImageUrl = 'assets/playing-cards.jpg';
  groups: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  options: number[] = Array.from({length: 30}, (_, i) => i + 1); // creates an array [1, 2, ..., 30]

  groupsCamping: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  optionsCamping: number[] = Array.from({length: 6}, (_, i) => i + 2); // creates an array [2, 3, ..., 7]

  public showGlampingSection: boolean = false;
  public showCampingSection: boolean = false;
  public showMenu: boolean = false;
  public showNotification: boolean = true;
  public showMainImage: boolean = true;
  public settingsMenu: boolean = false;


  @ViewChild('menuDiv') menu!: ElementRef;
  @ViewChild('menu') menuElement!: ElementRef;

  showSettingsMenu() {
    // Your logic here
    this.settingsMenu = !this.settingsMenu;
  }

  hideSettingsMenu() {
    this.settingsMenu = false;
  }
  

  showGlamping() {
    this.showGlampingSection = true;    
    
    this.showNotification = false;
    this.showMainImage = false;
    window.scrollTo(0, 0);
  }

  showCamping() {
    this.showCampingSection = true;
    
    this.showNotification = false;
    this.showMainImage = false;
    window.scrollTo(0, 0);
  }

  goBack() {
    this.showGlampingSection = false;
    this.showCampingSection = false;
    
    this.showNotification = true;
    this.showMainImage = true;
    window.scrollTo(0, 0);

  }

  
  selectAddress() {
    this.showGlampingSection = false;
    this.showCampingSection = false;
    this.showMenu = true;    

    this.showNotification = true;
    this.showMainImage = true;
    
    setTimeout(() => {
      this.menuElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);

  }

  items = [
    
    {
      name: 'Mexican Burrito',
      type: 'food',
      price: 21,
      imgUrl: '../../assets/mexican-burrito.jpg',
    },
    {
      name: 'Flame Grilled Pizza',
      type: 'food',
      price: 21,
      imgUrl: '../../assets/flame-grilled-pizza.jpg',
    },
    {
      name: 'Cheeseburger & Chips',
      type: 'food',
      price: 19,
      imgUrl: '../../assets/cheeseburger-and-chips.jpg',
    },
    
    {
      name: 'Halloumi & Fies',
      type: 'food',
      price: 19,
      imgUrl: '../../assets/halloumi-and-fries.jpg',
    },
    
    {
      name: 'Mac & Cheese',
      type: 'food',
      price: 20,
      imgUrl: '../../assets/mac-and-cheese.jpg',
    },
    {
      name: 'Cafe Latte',
      type: 'drink',
      price: 8,
      imgUrl: '../../assets/coffee.jpg',
    },
    {
      name: 'Flat White',
      type: 'drink',
      price: 8,
      imgUrl: '../../assets/coffee.jpg',
    },
    {
      name: 'Cup of Tea',
      type: 'drink',
      price: 8,
      imgUrl: '../../assets/coffee.jpg',
    },
    
    {
      name: 'Hot Chocolate',
      type: 'drink',
      price: 8,
      imgUrl: '../../assets/hot-chocolate.jpg',
    },
    // add more items here
  ];

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }
 
  logOut(): void {
    this.auth.signOut()
      .then(()=> this.router.navigateByUrl('/login'));
  }

  toggleFilter(filterType: string) {
    if (filterType === 'food') {
        this.foodToggle = !this.foodToggle;
    } else if (filterType === 'drink') {
        this.drinkToggle = !this.drinkToggle;
    }

    if(this.foodToggle)
    {
      // show food items

    }
    else
    {
      // hide food items

    }

    if(this.drinkToggle)
    {
      // show drink items
      
    }
    else
    {
      // hide drink items

    }    
  }
}
