/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    const blcm = editor.BlockManager;
    const style = `<style>#ceo th,
    #ceo td {
      padding: 10px 30px;
    }
    
    #ceo th {
      background: #333;
      color: white;
    }
    
    // #ceo th.asc:after {
    //   display: inline;
    //   content: '↓';
    // }
    
    // #ceo th.desc:after {
    //   display: inline;
    //   content: '↑';
    // }
    
    #ceo td {
      background: #ccc;
    }
  </style>     `;
    blcm.add(opts.name, {
      label: `
      <svg viewBox="0 0 24 24">
        <i class="fa fa-table"></i>
      </svg>
      <div class="gjs-block-label">
        ${opts.name}
      </div>
      `,
      category: opts.category,
      content:`
      <head><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/redmond/jquery-ui.css" type="text/css" />
  


      <script type="text/javascript">
      $(function () {
        $('table')
          .on('click', 'th', function () {
            var index = $(this).index(),
                rows = [],
                thClass = $(this).hasClass('asc') ? 'desc' : 'asc';
      
            $('#ceo th').removeClass('asc desc');
            $(this).addClass(thClass);
      
            $('#ceo tbody tr').each(function (index, row) {
              rows.push($(row).detach());
            });
      
            rows.sort(function (a, b) {
              var aValue = $(a).find('td').eq(index).text(),
                  bValue = $(b).find('td').eq(index).text();
      
              return aValue > bValue
                   ? 1
                   : aValue < bValue
                   ? -1
                   : 0;
            });
      
            if ($(this).hasClass('desc')) {
              rows.reverse();
            }
      
            $.each(rows, function (index, row) {
              $('#ceo tbody').append(row);
            });
          });
      });</script>

      </head>
      <body>
      <table id="ceo">
      <thead>
          <tr>
              <th title="Name"><p>Name</p></th>
              <th title="Gender"><p>Gender</p></th>
              <th title="Age"><p>Age</p></th>
              <th title="Age"><p>Age</p></th>
              <th title="Age"><p>Age</p></th>


          </tr>
      </thead>
      <tbody>
          <tr>
          <td><p>mark</p></td>
          <td><p>male</p></td>
          <td><p>41</p></td>
          <td><p>41</p></td>
          <td><p>41</p></td>

          </tr>
          <tr>
              <td><p>mark</p></td>
              <td><p>male</p></td>
              <td><p>41</p></td>
              <td><p>41</p></td>
              <td><p>41</p></td>

          </tr>
        
          <tr>
          <td><p>mark</p></td>
          <td><p>male</p></td>
          <td><p>41</p></td>
          <td><p>41</p></td>
          <td><p>41</p></td>

          </tr>
          <div>
          <tr>
          
          <td><p>mark</p></td>
          <td><p>male</p></td>
          <td><p>41</p></td>
          <td><p>41</p></td>
          <td><p>41</p></td>
         
          </tr>
          </div>
      </tbody>
  </table>
      
      </body>    ${style}                       		
      `
    });
  };


