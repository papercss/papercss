## Brief description

#### Top Nav element for PaperCSS

Added a small topnav element which does good job at creating simple mobile-friendly top navbar
Inspired by [w3schools example](https://www.w3schools.com/css/css_navbar.asp)

This is what it looks like in HTML:
```html
  <!-- Topnav START -->
  <div class="topnav" id="myTopnav">
    <a href="#home" class="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
  </div>
  <!-- Topnav END -->
```

It does need to have a small script inside:

```html
  <script>
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
    }
  </script>
```

The rest of CSS added are here:

```css
  /* paper topnav START */
  .topnav {
      overflow: hidden;
  }

  .topnav a {
      float: left;
      display: block;
      text-align: center;
      background-image: none;
      padding: 14px 16px;
      color: #41403E;
      text-decoration: none;
      font-size: 17px;
  }

  .topnav a:hover {
      background-color: #ddd;
      color: black;
  }

  .active {
      background-color: #C1C0BD;
      color: white;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
      display: none;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
      float: right;
      display: block;
    }
  }

  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
  /* paper topnav END */
```


## Developer Certificate of Origin

- [x] I certify that these changes according to the Developer Certificate of Origin 1.1 as described at <https://developercertificate.org/>.

## Sample pictures

![Screenshot fullscreen nav](/img/screenshots/topnav1.PNG)
![Screenshot mobile nav](/img/screenshots/topnav2.PNG)
![Screenshot mobile unfolded nav](/img/screenshots/topnav3.PNG)

## Further details

This is just a start. Perhaps someone can help enhance it.
I think having a simple way to add navbar would be awesome.

p.s.: I love PaperCSS so far - great framework
