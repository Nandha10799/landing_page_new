/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    const blcm = editor.BlockManager;
    const style = `<style> @import url(https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Pacifico|Oxygen);
    html, body
    {
        position: relative;
        height: 100%;
    }
    body
    {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
    }
    .swiper-container
    {
        width: 100%;
        height: 500px;
    }
    .swiper-slide
    {
        text-align: center;
        font-size: 18px;
        flex-direction:column;
        background: #fff; /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
  </style>     `;
    blcm.add(opts.name, {
      label: `
      <svg viewBox="0 0 24 24">
        <i class="fa fa-star"></i>
      </svg>
      <div class="gjs-block-label">
        ${opts.name}
      </div>
      `,
      category: opts.category,
      content:`
      <head><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.5/js/swiper.min.js"></script>
      <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.5/css/swiper.css" />
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script type="text/javascript">
      var swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
       
          speed: 1000, // Speed in milliseconds.
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          }
      });
      $(".swiper-container").mouseenter(function () {
        
      });
      $(".swiper-container").mouseleave(function () {
          swiper.autoplay.stop();
          swiper.slideTo(0); // 0 is the index number of slide.
      });
  </script>

      </head>
      <body>
      <form id="form1" runat="server">
      <div>
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                  <p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>
                      <img src="https://static.flickr.com/66/199481236_dc98b5abb3_s.jpg" alt="Slide 1" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/75/199481072_b4a0d09597_s.jpg" alt="Slide 2" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/57/199481087_33ae73a8de_s.jpg" alt="Slide 3" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/77/199481108_4359e6b971_s.jpg" alt="Slide 4" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/58/199481143_3c148d9dd3_s.jpg" alt="Slide 5" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/72/199481203_ad4cdcf109_s.jpg" alt="Slide 6" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/58/199481218_264ce20da0_s.jpg" alt="Slide 7" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/69/199481255_fdfe885f87_s.jpg" alt="Slide 8" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/60/199480111_87d4cb3e38_s.jpg" alt="Slide 9" /></div>
                  <div class="swiper-slide">
                      <img src="https://static.flickr.com/70/229228324_08223b70fa_s.jpg" alt="Slide 10" /></div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination">
              </div>
              <!-- Add Arrows -->
              <div class="swiper-button-next">
              </div>
              <div class="swiper-button-prev">
              </div>
          </div></div></form>
    
      
      </body>  ${style}                           		
      `
    });
  };


