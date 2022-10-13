/* eslint-disable import/no-anonymous-default-export */
import "bootstrap/dist/css/bootstrap.css";
export default (editor, opts = {}) => {
    const blcm = editor.BlockManager;
    const style = `<style>
    .stars {
      font-size: 0;
    }
    
    .stars p {
        font-size: 20px;
        padding: 3px;
    }
    
    .stars i {
      font-size: 26px;
      padding: 3px;
    }
    
    .stars:hover i,
    .stars:not(:hover) .active{
      color: red;
    }
    
    .stars:hover i:hover ~ i {
      color: inherit;
    }
  </style>
    `;
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
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
          <div class="stars">
            <i class="fa fa-star-o" id="star1" data-rating="1"></i>
            <i class="fa fa-star-o" id="star2" data-rating="2"></i>
            <i class="fa fa-star-o" id="star3" data-rating="3"></i>
            <i class="fa fa-star-o" id="star4" data-rating="4"></i>
            <i class="fa fa-star-o" id="star5" data-rating="5"></i>
            <p class="output"></p>
          </div>${style}
        </body>
      `
    });
  };


//   .container{
//     // position: relative;
//     // width: 400px;
//     // background: #111;
//     // background: white !important;
//     // padding: 20px 30px;
//     // border: 1px solid #444;
//     // border-radius: 5px;
//     // display: flex;
//     // align-items: center;
//     // justify-content: center;
//     // flex-direction: column;
//   }