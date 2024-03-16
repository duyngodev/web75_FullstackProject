(LOGO)

# G3 Bakery 
## Production
- URL: [deploy url](https://web75-g3bakery.onrender.com)

## Documentations

##Technology
- Front-end: ReactJS + HTML + CSS
- UI Library: Material UI

## Member 
\
### Duy Bao Ngo (Leader)
- Roles: Leader, Front-end developer
- Tasks: Home page, landing page, set up project, product list page,  route-link ,reporter

### Nhan Phu Le
- Roles: Front-end developer
- Tasks: Product page, category list page
\
### Huy Quang Le
- Roles: Front-end developer
- Tasks: Cart page, common components
\
## Software Design
### Product
~~~
{
name:string,
price:number,
imgUrl:string,
description:string,
category:string,
newProduct: boolean
}
~~~
- Example:
~~~
{
name:'Corn cake',
price: 150.50,
imgUrl: 🔗,
description: "",
category: "cake",
newProduct: true
}
~~~
- Reality:
~~~
 "name": "Bánh Quy Kẹp Phô Mai Trứng Muối",
 "price": 65000,
 "imgURL1": "https://www.sugartown.vn/thumb/500x500/2/upload/sanpham/ck-16715406953.png",
 "imgURL2": "https://www.sugartown.vn/thumb/500x500/2/upload/sanpham/ck-16715406953.png",
 "description": "Bột mì, Muối, Đường, Bơ lạt, Marshmallow, Trứng muối, Phô mai",
 "category": "BÁNH COOKIES",
 "newProduct": true,
 "bestSeller": false,
 "quantity": 20,
 "quantityInCart": 1,
 "id": "25"
