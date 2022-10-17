/* eslint-disable import/no-anonymous-default-export */
import "bootstrap/dist/css/bootstrap.css";
export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const style = `<style>
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

 
  
  body {
    background-color: #fafafa;
    transition: background 0.2s linear;
  }
  
  body.dark {
    background: #292C35;
  }
  
  .checkbox {
    opacity: 0;
    position: absolute;
  }
  
  .label {
    background-color: #111;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    height: 26px;
    width: 50px;
    transform: scale(1.5);
  }
  
  .label .ball {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    transform: translateX(0px);
    transition: transform 0.2s linear;
  }
  
  .checkbox:checked + .label .ball {
    transform: translateX(24px);
    background-color: green;

  }
  
  

  
  

  </style>
    `;
  bm.add(opts.name, {
    label: `
      <div class="gjs-block-label">
        ${opts.name}
      </div>
      `,
    category: opts.category,
    content: `
    <head>
    <link href="/your-path-to-your-compiled-css-including-fontawesome/file.css" rel="stylesheet">
    </head>
    <body>
      <div class="theme">
        <input type="checkbox" class="checkbox" id="chk" />
        <label class="label" for="chk">
          <i class="fas fa-moon"  ></i>
          <i class="fas fa-sun"></i>
          <div class="ball"></div>
        </label>
      </div>
    </body>
    

    
  
  ${style}`,
    media: `<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-back" viewBox="-5 -5 24 24">
    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
  </svg>`,
  });
};
